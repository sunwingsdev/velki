const express = require("express");
const { ObjectId } = require("mongodb");

const depsoitsApi = (depositsCollection, usersCollection) => {
  const router = express.Router();

  router.post("/", async (req, res) => {
    try {
      const depositInfo = req.body;

      if (!depositInfo) {
        res.status(400).send({ message: "Bad Request" });
      }
      depositInfo.bdtAmount = parseFloat(depositInfo.bdtAmount);
      depositInfo.pbuAmount = parseFloat(depositInfo.pbuAmount);
      depositInfo.status = "pending";
      depositInfo.createdAt = new Date();
      const result = await depositsCollection.insertOne(depositInfo);
      res.send(result);
    } catch (err) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  //   get all deposits
  router.get("/", async (req, res) => {
    try {
      const result = await depositsCollection
        .aggregate([
          {
            $addFields: {
              userId: { $toObjectId: "$userId" },
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "userId",
              foreignField: "_id",
              as: "userInfo",
            },
          },
          {
            $unwind: {
              path: "$userInfo",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $project: {
              "userInfo.password": 0,
            },
          },
        ])
        .toArray();

      res.send(result);
    } catch (error) {
      console.error("Error fetching deposits:", error);
      res.status(500).send({ error: "Failed to fetch deposits" });
    }
  });

  router.patch("/update-status/:id", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
      const deposit = await depositsCollection.findOne({
        _id: new ObjectId(id),
      });
      if (!deposit) {
        return res.status(404).send({ message: "Deposit not found" });
      }
      if (deposit.status !== "pending") {
        return res.status(400).send({ message: "Deposit is not pending" });
      }
      const user = await usersCollection.findOne({
        _id: new ObjectId(deposit.userId),
      });

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      const result = await depositsCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { status: status } },
        { returnDocument: "after" }
      );
      if (status === "approved") {
        await usersCollection.updateOne(
          { _id: new ObjectId(deposit.userId) },
          { $inc: { balance: deposit.pbuAmount } }
        );
      }
      res.send(result);
    } catch (err) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  return router;
};

module.exports = depsoitsApi;
