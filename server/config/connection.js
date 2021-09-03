const mongoose = require("mongoose");
require(`dotenv`).config();

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://sranson:55Vtca2agHx5biEk@cluster0.kvcyt.mongodb.net/kindred?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
