const express = require("express");
const router = express.Router();
const torrentSearch = require("torrent-grabber");

const trackersToUse = [
  "1337x",
  "ThePirateBay",
  "Nnm",
];

router.get("/search", async (req, res, next) => {
  try {
    trackersToUse.map(async (torrent) => {
      await torrentSearch.activate(torrent);
    })
    const searched = await torrentSearch.search(req.query.search, {
      groupByTracker: false
    });
    return res.send({ searched }).end();
  } catch (e) {
    return next(e);
  }
})

module.exports = router;