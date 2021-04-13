const mongoose = require("mongoose");
const { Schema } = mongoose;

const VideoDetail = new Schema({
  videoId: {
    type: String,
    unique: true,
    required: true,
  },
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  author: {
    type: String,
  },
  authorId: {
    type: String,
  },
  authorUrl: {
    type: String,
  },
  videoThumbnails: [
    {
      quality: {
        type: String,
      },
      url: {
        type: String,
      },
      width: {
        type: String,
      },
      height: {
        type: String,
      },
    },
  ],
  description: {
    type: String,
  },

  viewCount: {
    type: String,
  },
  published: {
    type: String,
  },
  publishedText: {
    type: String,
  },
  lengthSeconds: {
    type: String,
  },
  liveNow: {
    type: Boolean,
  },
  paid: {
    type: Boolean,
  },
  premium: {
    type: Boolean,
  },
  isUpcoming: {
    type: Boolean,
  },
  timeText: {
    type: String,
  },
  isCreatorOnRise: {
    type: Boolean,
  },
  isVerified: {
    type: Boolean,
  },
});

module.exports = mongoose.model("videodetails", VideoDetail);
