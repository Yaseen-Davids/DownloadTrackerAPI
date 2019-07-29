const express = require("express");
const router = express.Router();
const knex = require("../knex");

/* GET ALL MOVIES */
router.get("/", async (req, res, next) => {
  try {
    const data = await knex("movies").orderBy("title").select("*");
    await res.send(data);
  } catch (e) {
    return next(e);
  }
});

/* GET MOVIE BY ID */
router.get("/:id", async (req, res, next) => {
  try {
    const data = await knex("movies").select("*").where("id", req.params.id)
    await res.send(data);
  } catch (e) {
    return next(e);
  }
})

/* POST NEW MOVIE */
router.post("/", async (req, res, next) => {
  try {
    await knex("movies").select("*").insert({
      title: req.body.title,
    });
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
    await knex("movies").select("*").where("id", req.params.id).update({
      title: req.body.title
    });
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
    await knex("movies").select("*").where("id", req.params.id).del();
    res.send({message: {
      value: "Successfully deleted a movie"
    }});
  } catch (e) {
    return next(e);
  }
})

module.exports = router;