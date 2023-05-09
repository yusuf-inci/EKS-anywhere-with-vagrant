var express = require('express')
var os = require("os");
var hostname = os.hostname();
var app = express()

app.get('/', function(req, res) {
  // res.send('Hello world from ' + hostname + '! Your app is up and running!\n')
  // res.send('Welcome to ' + hostname + '! Your app is up and running!\n')
  res.send(process.env.MESSAGE + '\n')
})
app.listen(8080, function() {
  console.log('Sample app is listening on port 8080.')
})
