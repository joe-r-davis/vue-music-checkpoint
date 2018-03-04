var mongoose = require("mongoose");

var connectionString = "mongodb://test:test@ds058369.mlab.com:58369/mytunes";

var connection = mongoose.connection;
mongoose.connect(connectionString);

connection.on("error", err => {
  console.error("mlab Error: ", err);
});

connection.once("open", () => {
  console.log("connected to mLab baby!");
});