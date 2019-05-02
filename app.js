var express = require('express')
var os = require("os");
var hostname = os.hostname();
var app = express()

// serve the files out of ./public as our main files
app.use(express.static(__dirname + "/public"));

app.get('/gethostname', function(req, res) {
  var hostobj = {
    "hostname": hostname
  }
  console.log("Service gethostname returning " + hostname);
  res.json(hostobj);
})

app.listen(8080, function() {
  console.log('Sample app is listening on port 8080.')
})