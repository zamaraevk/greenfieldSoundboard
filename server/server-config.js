var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

// set a normalized path to public. 
var rootPath = path.normalize(__dirname + '/../public');

// set paths from this directory to the others that are serving static files to client.
// note that the script tags in index.html are simplified as a result. 
app.use('/dist', express.static(__dirname + '/../dist/'));
app.use('/soundfiles', express.static(__dirname + '/../foley/'));
app.use('/node_modules', express.static(__dirname + '/../node_modules/'));
app.use('/compiled', express.static(__dirname + '/../compiled/'));
app.use('/styles', express.static(__dirname + '/../public/components/styles/'));
app.use('/assets', express.static(__dirname + '/assets/'));

// At root, send index.html. It's location is appended to the rootPath.
app.get('/', function(req, res) {
  res.sendFile(path.join(rootPath + '/index.html'));
});

//returns an array of all the sounds in foley folder
app.get('/sounds', function (req, res) { 
  fs.readdir(path.join(__dirname + '/../foley/'), function(err, files) {
    if (err) console.error(err);
    res.send(files);
  });
});

module.exports = app;