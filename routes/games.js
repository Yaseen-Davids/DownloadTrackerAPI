const express = require("express");
const router = express.Router();
const { GetGames, GetGameById, CreateGame, DeleteGame, UpdateGame } = require("../repositories/games");

/* GET ALL GAME */
router.get("/all", async (req, res, next) => {
  try {
    const data = await GetGames();
    await res.send(data);
  } catch (e) {
    return next(e);
  }
});

/* GET GAME BY ID */
router.get("/:id", async (req, res, next) => {
  try {
    const data = await GetGameById(req.params.id);
    await res.send(data);
  } catch (e) {
    return next(e);
  }
})

/* POST NEW GAME */
router.post("/", async (req, res, next) => {
  try {
    await CreateGame(req.body);
    res.send({message: {
      value: "Successfully added a new game"
    }});
  } catch (e) {
    return next(e);
  }
});

/* UPDATE GAME BY ID */
router.put("/:id", async (req, res, next) => {
  try {
    await UpdateGame(req.params.id, req.body);
    res.send({message: {
      value: "Successfully updated game"
    }});
  } catch (e) {
    return next(e);
  }
})

/* DELETE GAME BY ID */
router.delete("/:id", async (req, res, next) => {
  try {
    await DeleteGame(req.params.id);
    res.send({message: {
      value: "Successfully deleted a game"
    }});
  } catch (e) {
    return next(e);
  }
})

module.exports = router;