const express = require("express");
const router = express.Router();
const { GetEpisodeByName } = require("../searches/next-episode");

router.get("/search/:name/:season", async (req, res, next) => {
  try {
    const searched = await GetEpisodeByName(req.params.name, req.params.season);
    return res.send({ searched }).end();
  } catch (e) {
    return next(e);
  }
});

module.exports = router;