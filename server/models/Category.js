const { Schema } = require("mongoose");

const categorySchema = new Schema({
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  wikiUrl: {
    type: String,
  },
  youtubeUrl: {
    type: String,
  },
});

module.exports = categorySchema;
