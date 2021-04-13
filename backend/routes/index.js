var express = require("express");
var router = express.Router();
var {
  updateVideoList,
  fetchSavedVideo,
  SingleVideo,
} = require("../controllers/controller");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/yt_trending", updateVideoList);

router.get("/fetch_saved_vide0", fetchSavedVideo);

router.get("/single_video", SingleVideo);

module.exports = router;
