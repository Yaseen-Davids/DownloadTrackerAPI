const express = require("express");
const router = express.Router();
const { CreateMovie, DeleteMovie, GetMovieById, GetMovies, UpdateMovie } = require("../repositories/movies");

/* GET ALL MOVIES */
router.get("/all", async (req, res, next) => {
  try {
    const data = await GetMovies();
    await res.send(data);
  } catch (e) {
    return next(e);
  }
});

/* GET MOVIE BY ID */
router.get("/:id", async (req, res, next) => {
  try {
    const data = await GetMovieById(req.params.id);
    await res.send(data);
  } catch (e) {
    return next(e);
  }
})

/* POST NEW MOVIE */
router.post("/", async (req, res, next) => {
  try {
    await CreateMovie(req.body);
    res.send({message: {
      value: "Successfully added a new movie"
    }});
  } catch (e) {
    return next(e);
  }
});

/* UPDATE MOVIE BY ID */
router.put("/:id", async (req, res, next) => {
  try {
    await UpdateMovie(req.params.id, req.body);
    res.send({message: {
      value: "Successfully updated a movie"
    }});
  } catch (e) {
    return next(e);
  }
})

/* DELETE MOVIE BY ID */
router.delete("/:id", async (req, res, next) => {
  try {
    await DeleteMovie(req.params.id);
    res.send({message: {
      value: "Successfully deleted a movie"
    }});
  } catch (e) {
    return next(e);
  }
})

module.exports = router;