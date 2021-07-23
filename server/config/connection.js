const mongoose = require("mongoose");

<<<<<<< HEAD
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/kindred",
  {
=======
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/kindred", {
>>>>>>> 408ef2863a3bd4e24932c79f344074b47d5893e5
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;

// mongodb://localhost/kindred
// mongodb+srv://sranson:55Vtca2agHx5biEk@cluster0.kvcyt.mongodb.net/kindred?retryWrites=true&w=majority