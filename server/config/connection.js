const mongoose = require("mongoose");
require(`dotenv`).config();

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://sranson:gf684xgoe7SJC0wQ@cluster0.kvcyt.mongodb.net/kindred?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
