const ytrend = require("yt-trending-scraper");

const VideoDetail = require("../models/video_detail");

/**
 *fetched from youtube trending page
 */
exports.updateVideoList = (req, res) => {
  ytrend
    .scrape_trending_page("", false)
    .then((data) => {
      //console.log(data);

      VideoDetail.insertMany(data, {
        writeConcern: { w: "majority", wtimeout: 100 },
      })
        .then((respose) => {
          return res.json({ success: true, data: respose });
        })
        .catch((err) => {
          return res.json({ success: false, data: err });
        });
    })
    .catch((error) => {
      console.log(error);
      return res.json({
        success: false,
        error: error.message,
        message: "Something went wrong",
      });
    });
};

//show fetched video
exports.fetchSavedVideo = (req, res) => {
  VideoDetail.find()
    .then((response) => {
      return res.json({ success: true, data: response });
    })
    .catch((err) => {
      return res.json({ success: false, message: err.message });
    });
};

//single video VideoDetail
exports.SingleVideo = (req, res) => {
  let videoId = req.body.videoId;
  VideoDetail.findOne({ videoId })
    .then((response) => {
      return res.json({ success: true, data: response });
    })
    .catch((err) => {
      return res.json({ success: false, message: err.message });
    });
};
