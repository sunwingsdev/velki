const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");

const usersApi = (usersCollection, bankingCollection) => {
  const router = express.Router();
  const jwtSecret = process.env.JWT_SECRET;

  // Middleware to validate JWT tokens
  const authenticateToken = (req, res, next) => {
    const authHeader = req.header("Authorization");
    if (!authHeader)
      return res
        .status(401)
        .json({ error: "Access denied. No token provided." });

    const token = authHeader.split(" ")[1];
    if (!token)
      return res
        .status(401)
        .json({ error: "Access denied. Invalid token format." });

    try {
      const decoded = jwt.verify(token, jwtSecret);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(403).json({ error: "Invalid or expired token." });
    }
  };

  // Register a new user
  router.post("/register", async (req, res) => {
    const userInfo = req.body;
    if (!userInfo?.username || !userInfo?.password) {
      return res
        .status(400)
        .json({ error: "Username, Email and password are required" });
    }
    try {
      const existingUser = await usersCollection.findOne({
        username: userInfo?.username,
      });
      if (existingUser)
        return res.status(400).json({ error: "User already exists" });
      const hashedPassword = await bcrypt.hash(userInfo?.password, 10);
      const newUser = { ...userInfo, password: hashedPassword };
      newUser.createdAt = new Date();
      newUser.status = "activated";
      const result = await usersCollection.insertOne(newUser);
      res.status(201).send(result);
    } catch (error) {
      res.status(500).json({ error: "Registration failed" });
    }
  });

  // Login a user and validate JWT issuance
  router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res
        .status(400)
        .json({ error: "Username and password are required" });
    }

    try {
      const user = await usersCollection.findOne({ username });
      if (!user) return res.status(400).json({ error: "Invalid credentials" });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ error: "Invalid credentials" });

      // Generate JWT token
      const token = jwt.sign(
        { userId: user._id, username: user.username },
        jwtSecret,
        { expiresIn: "7d" }
      );

      await usersCollection.updateOne(
        { username },
        { $set: { lastLoginAt: new Date() } },
        { upsert: true }
      );

      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: "Login failed" });
    }
  });

  // Example Protected Route Using Middleware
  router.get("/profile", authenticateToken, async (req, res) => {
    try {
      const user = await usersCollection.findOne({
        _id: new ObjectId(req.user.userId),
      });
      if (!user) return res.status(404).json({ error: "User not found" });
      const { password: _, ...userInfo } = user;
      res.status(200).json(userInfo);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  });

  router.get("/", async (req, res) => {
    try {
      const result = await usersCollection
        .find({}, { projection: { password: 0 } })
        .toArray();
      res.send(result);
    } catch (error) {
      res.status(500).send({ error: "Failed to fetch users" });
    }
  });

  // get user by id
  router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const result = await usersCollection.findOne({ _id: new ObjectId(id) });
    if (!result) return res.status(404).json({ error: "User not found" });
    res.status(200).json(result);
  });

  // update user remark
  router.put("/remark/:id", async (req, res) => {
    const { id } = req.params;
    const remarkInfo = req.body;
    const query = { _id: new ObjectId(id) };
    const updatedDoc = {
      $set: {
        remark: remarkInfo?.remark,
      },
    };
    const result = await usersCollection.updateOne(query, updatedDoc, {
      upsert: true,
    });
    res.send(result);
  });

  // update user balance
  router.put("/balance/:id", async (req, res) => {
    const { id } = req.params;
    console.log(req.body);
    const transactionInfo = req.body;
    const query = { _id: new ObjectId(id) };
    const userUpdate = {
      $inc: {
        balance:
          transactionInfo.type === "deposit"
            ? transactionInfo.amount
            : -transactionInfo.amount,
      },
    };
    await usersCollection.updateOne(query, userUpdate);
    const parentUpdate = {
      $inc: {
        balance:
          transactionInfo.type === "deposit"
            ? -transactionInfo.amount
            : transactionInfo.amount,
      },
    };
    transactionInfo.createdAt = new Date();
    await bankingCollection.insertOne(transactionInfo);
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(transactionInfo?.parentId) },
      parentUpdate
    );
    res.send(result);
  });

  // update profile
  router.put("/profile/:id", async (req, res) => {
    const { id } = req.params;
    const profileInfo = req.body;
    const query = { _id: new ObjectId(id) };
    const selectedUser = await usersCollection.findOne(query);
    if (!selectedUser) return res.status(404).json({ error: "User not found" });
    if (profileInfo.password) {
      profileInfo.password = await bcrypt.hash(profileInfo.password, 10);
    } else {
      delete profileInfo.password;
    }
    profileInfo.updatedAt = new Date();
    const updatedDoc = {
      $set: {
        ...selectedUser,
        ...profileInfo,
      },
    };
    const result = await usersCollection.updateOne(query, updatedDoc, {
      upsert: true,
    });
    res.send(result);
  });

  // add mother admin balance
  router.put("/mother-admin-balance/:id", async (req, res) => {
    const { id } = req.params;
    const balanceInfo = req.body;
    const query = { _id: new ObjectId(id) };
    const updatedDoc = {
      $inc: {
        balance: balanceInfo.amount,
      },
    };
    const result = await usersCollection.updateOne(query, updatedDoc, {
      upsert: true,
    });
    res.send(result);
  });

  // update user active status
  router.put("/active-status/:id", async (req, res) => {
    const { id } = req.params;
    const statusInfo = req.body;
    const query = { _id: new ObjectId(id) };
    const updatedDoc = {
      $set: {
        status: statusInfo.status,
      },
    };
    const result = await usersCollection.updateOne(query, updatedDoc, {
      upsert: true,
    });
    res.send(result);
  });

  return router;
};

module.exports = usersApi;
