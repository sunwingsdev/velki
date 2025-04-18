const express = require("express");
const { ObjectId } = require("mongodb");

const colorControlApi = (colorControlsCollection) => {
  const router = express.Router();

  router.post("/", async (req, res) => {
    const controlInfo = req.body;
    controlInfo.createdAt = new Date();
    const result = await colorControlsCollection.insertOne(controlInfo);
    res.send(result);
  });

  router.get("/", async (req, res) => {
    const result = await colorControlsCollection.find().toArray();
    res.send(result);
  });

  router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ error: "Invalid ObjectId format" });
    }

    const selectedObject = await colorControlsCollection.findOne({
      _id: new ObjectId(id),
    });
    if (!selectedObject) {
      return res.status(404).send({ error: "Object not found" });
    }
    const query = { _id: new ObjectId(id) };
    const controlInfo = req.body;
    controlInfo.updatedAt = new Date();
    const updatedDoc = {
      $set: {
        ...controlInfo,
      },
    };
    const result = await colorControlsCollection.updateOne(query, updatedDoc);
    res.send(result);
  });

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ error: "Invalid ObjectId format" });
    }

    const query = { _id: new ObjectId(id) };
    const result = await colorControlsCollection.deleteOne(query);
    res.send(result);
  });

  return router;
};

module.exports = colorControlApi;
