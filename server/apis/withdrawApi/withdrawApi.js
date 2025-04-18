const express = require("express");
const { ObjectId } = require("mongodb");
const withdrawApi = (withdrawsCollection, usersCollection) => {
  const router = express.Router();

  // --------- add a withdraw
  router.post("/", async (req, res) => {
    const withdrawInfo = req.body;
    withdrawInfo.pbuAmount = parseFloat(withdrawInfo.pbuAmount);
    withdrawInfo.bdtAmount = parseFloat(withdrawInfo.bdtAmount);
    withdrawInfo.status = "pending";
    withdrawInfo.createdAt = new Date();
    // Decrement the user's balance
    await usersCollection.updateOne(
      { _id: new ObjectId(withdrawInfo.userId) },
      { $inc: { balance: -withdrawInfo.pbuAmount } }
    );

    const result = await withdrawsCollection.insertOne(withdrawInfo);
    res.send(result);
  });

  //   get all withdraws
  router.get("/", async (req, res) => {
    try {
      const result = await withdrawsCollection
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

  //   update withdraw status
  router.patch("/update-status/:id", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
      const withdraw = await withdrawsCollection.findOne({
        _id: new ObjectId(id),
      });
      if (!withdraw) {
        return res.status(404).send({ message: "Withdraw not found" });
      }
      if (withdraw.status !== "pending") {
        return res.status(400).send({ message: "Withdraw is not pending" });
      }
      const user = await usersCollection.findOne({
        _id: new ObjectId(withdraw.userId),
      });

      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      const result = await withdrawsCollection.findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { status: status } },
        { returnDocument: "after" }
      );
      if (status === "rejected") {
        await usersCollection.updateOne(
          { _id: new ObjectId(withdraw.userId) },
          { $inc: { balance: withdraw.pbuAmount } }
        );
      }
      res.send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  return router;
};
module.exports = withdrawApi;
