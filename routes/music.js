const express = require("express");
const router = express.Router();
const { GetMusic, GetMusicById, CreateMusic, DeleteMusic, UpdateMusic } = require("../repositories/music");

/* GET ALL MUSIC */
router.get("/all", async (req, res, next) => {
  try {
    const data = await GetMusic();
    await res.send(data);
  } catch (e) {
    return next(e);
  }
});

/* GET MUSIC BY ID */
router.get("/:id", async (req, res, next) => {
  try {
    const data = await GetMusicById(req.params.id);
    await res.send(data);
  } catch (e) {
    return next(e);
  }
})

/* POST NEW MUSIC */
router.post("/", async (req, res, next) => {
  try {
    await CreateMusic(req.body);
    res.send({message: {
      value: "Successfully added a new music"
    }});
  } catch (e) {
    return next(e);
  }
});

/* UPDATE MUSIC BY ID */
router.put("/:id", async (req, res, next) => {
  try {
    await UpdateMusic(req.params.id, req.body);
    res.send({message: {
      value: "Successfully updated music"
    }});
  } catch (e) {
    return next(e);
  }
})

/* DELETE MUSIC BY ID */
router.delete("/:id", async (req, res, next) => {
  try {
    await DeleteMusic(req.params.id);
    res.send({message: {
      value: "Successfully deleted a music"
    }});
  } catch (e) {
    return next(e);
  }
})

module.exports = router;