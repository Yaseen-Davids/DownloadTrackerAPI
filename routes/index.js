var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Download Tracker API"
  });
});

router.get("/wakeup", async (req, res, next) => {
  await res.send({ message: "I am awake!" });
})

module.exports = router;