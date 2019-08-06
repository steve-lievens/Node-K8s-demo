"use strict";
// --------------------------------------------------------------------------
// Require statements
// --------------------------------------------------------------------------
var express = require("express");
var bodyParser = require("body-parser");
var os = require("os");
var hostname = os.hostname();

console.log("INFO: starting K8s demo app");

// --------------------------------------------------------------------------
// Read environment variables
// --------------------------------------------------------------------------

// When not present in the system environment variables, dotenv will take them
// from the local file
require("dotenv").config({
  silent: true,
  path: "my.env"
});

var REGION = process.env.REGION;

console.log("INFO: REGION", REGION);


// --------------------------------------------------------------------------
// Setup the express server
// --------------------------------------------------------------------------
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + "/public"));

// --------------------------------------------------------------------------
// Express Server runtime
// --------------------------------------------------------------------------
// Start our server !
app.listen(process.env.PORT || 3000, function() {
  console.log("INFO: app is listening on port %s", (process.env.PORT || 3000));
});

// --------------------------------------------------------------------------
// REST API : retrieve info about the host
// --------------------------------------------------------------------------
app.get('/gethostinfo', function(req, res) {
  var hostobj = {
    "hostname": hostname,
    "region": REGION
  }
  console.log("Service gethostname returning " + JSON.stringify(hostobj));
  res.json(hostobj);
});