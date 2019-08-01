const express = require("express");
const router = express.Router();
const { GetSeries, GetSeriesById, CreateSeries, DeleteSeries, UpdateSeries } = require("../repositories/series");
// const { GetSeriesById} = require("../repositories/series");
// const CreateSeries = require("../repositories/series");
// const DeleteSeries = require("../repositories/series");
// const UpdateSeries = require("../repositories/series");

/* GET ALL SERIES */
router.get("/all", async (req, res, next) => {
  try {
    const data = await GetSeries();
    await res.send(data);
  } catch (e) {
    return next(e);
  }
});

/* GET SERIES BY ID */
router.get("/:id", async (req, res, next) => {
  try {
    const data = await GetSeriesById(req.params.id);
    await res.send(data);
  } catch (e) {
    return next(e);
  }
})

/* POST NEW SERIES */
router.post("/", async (req, res, next) => {
  try {
    await CreateSeries(req.body);
    res.send({message: {
      value: "Successfully added a new series"
    }});
  } catch (e) {
    return next(e);
  }
});

/* UPDATE SERIES BY ID */
router.put("/:id", async (req, res, next) => {
  try {
    await UpdateSeries(req.params.id, req.body);
    res.send({message: {
      value: "Successfully updated series"
    }});
  } catch (e) {
    return next(e);
  }
})

/* DELETE SERIES BY ID */
router.delete("/:id", async (req, res, next) => {
  try {
    await DeleteSeries(req.params.id);
    res.send({message: {
      value: "Successfully deleted a series"
    }});
  } catch (e) {
    return next(e);
  }
})

module.exports = router;