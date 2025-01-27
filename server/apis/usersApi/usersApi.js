const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");

const usersApi = (usersCollection) => {
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

  return router;
};

module.exports = usersApi;
