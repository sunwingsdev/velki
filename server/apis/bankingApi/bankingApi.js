const express = require("express");

const bankingApi = (bankingCollection) => {
  const router = express.Router();

  router.post("/", async (req, res) => {
    try {
      const bankingInfo = req.body;

      if (!bankingInfo) {
        res.status(400).send({ message: "Bad Request" });
      }
      bankingInfo.createdAt = new Date();
      const result = await bankingCollection.insertOne(bankingInfo);
      res.send(result);
    } catch (err) {
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  //   get all bankings
  router.get("/", async (req, res) => {
    try {
      const result = await bankingCollection
        .aggregate([
          {
            $addFields: {
              parentId: { $toObjectId: "$parentId" },
            },
          },
          {
            $lookup: {
              from: "users",
              localField: "parentId",
              foreignField: "_id",
              as: "parentInfo",
            },
          },
          {
            $unwind: {
              path: "$parentInfo",
              preserveNullAndEmptyArrays: true,
            },
          },
          {
            $project: {
              "parentInfo.password": 0,
            },
          },
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

  return router;
};

module.exports = bankingApi;
