var mongoose = require("mongoose");
console.log('Be sure to put in your connection string!')
var connectionString = "mongodb://test:test@ds012538.mlab.com:12538/vue-music-checkpoint";

var connection = mongoose.connection;
mongoose.connect(connectionString);

connection.on("error", err => {
  console.error("mlab Error: ", err);
});

connection.once("open", () => {
  console.log("connected to database");
});