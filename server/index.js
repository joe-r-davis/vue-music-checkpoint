let express = require("express"),
  bp = require("body-parser"),
  cors = require("cors"),
  server = express(),
  port = 3000;
  var songsRoutes = require('./server-assets/routes/songs');

require("./server-assets/db/mlab-config");

var whitelist = ['http://localhost:8080'];
var corsOptions = {
	origin: function (origin, callback) {
		var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	},
	credentials: true
};


server.use(cors(corsOptions));
server.use(bp.json());
server.use(bp.urlencoded({ extended: true }));
server.use(songsRoutes.router);
//Your routes here

server.use("*", (error, req, res, next) => {
    res.status(400).send(error);
  });
  
server.listen(port, () => {
    console.log("the server is running... Port:", port);
  });