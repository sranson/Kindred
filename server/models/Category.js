const { Schema } = require("mongoose");

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  wikiUrl: {
    type: String,
  },
  youtubeUrl: {
    type: String,
  },
});

module.exports = categorySchema;
