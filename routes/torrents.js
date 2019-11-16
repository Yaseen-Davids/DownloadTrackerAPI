const express = require("express");
const router = express.Router();
const torrentSearch = require("torrent-grabber");
const { SearchLime, SearchPirate } = require("../torrents/TorrentSearch");

const trackersToUse = [
  "1337x",
  "ThePirateBay",
  "Nnm",
];

router.get("/search/:name", async (req, res, next) => {
  try {
    trackersToUse.map(async (torrent) => {
      await torrentSearch.activate(torrent);
    })
    const searched = await torrentSearch.search(req.params.name, {
      groupByTracker: false
    });
    return res.send({ searched }).end();
  } catch (e) {
    return next(e);
  }
});

router.get("/limetorrents/search/:name", async (req, res, next) => {
  try {
    const result = await SearchLime(req.params.name);
    return res.send({ result }).end();
  }
  catch (e){
    return next(e);
  }
});

router.get("/piratebay/search/:name", async (req, res, next) => {
  try {
    const result = await SearchPirate(req.params.name);
    return res.send({ result }).end();
  }
  catch (e){
    return next(e);
  }
});

module.exports = router;