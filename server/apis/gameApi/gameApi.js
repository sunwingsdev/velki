const express = require("express");
const { ObjectId } = require("mongodb");
const gameApi = (gamesCollection) => {
  const router = express.Router();

  router.post("/", async (req, res) => {
    const gameData = req.body;
    gameData.createdAt = new Date();
    gameData.isActive = false;
    const result = await gamesCollection.insertOne(gameData);
    res.send(result);
  });

  router.get("/", async (req, res) => {
    const games = await gamesCollection.find({}).toArray();
    res.send(games);
  });

  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res.status(400).send({ error: "Invalid ObjectId format" });
    }
    try {
      const query = { _id: new ObjectId(id) };
      const result = await gamesCollection.deleteOne(query);
      if (result.deletedCount === 0) {
        return res.status(404).send({ error: "Object not found" });
      }
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: "An error occurred" });
    }
  });

  //   toggleGameStatus

  router.patch("/toggle-status/:id", async (req, res) => {
    const { id } = req.params;
    const game = await gamesCollection.findOne({ _id: new ObjectId(id) });
    if (!game) {
      return res.status(404).send({ error: "Game not found" });
    }
    const status = !game.isActive;
    const query = { _id: new ObjectId(id) };
    const result = await gamesCollection.updateOne(query, {
      $set: { isActive: status },
    });
    res.send(result);
  });

  router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const gameData = req.body;
    gameData.updatedAt = new Date();
    const query = { _id: new ObjectId(id) };
    const result = await gamesCollection.updateOne(query, { $set: gameData });
    res.send(result);
  });
  return router;
};

module.exports = gameApi;
