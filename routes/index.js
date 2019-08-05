var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Download Tracker API"
  });
});

router.get("/wake-up", async (req, res, next) => {
  await res.send("I am wake!");
})

module.exports = router;