var request = require('request');
var util = require('./utility.js');
var fs = require('fs');

exports.renderIndex = function(req, res) {
  res.render('index');
};

exports.signupUserForm = function(req, res) {
  res.render('signup');
};

exports.loginUserForm = function(req, res) {
  res.render('login');
};

exports.logoutUser = function(req, res) {
  req.session.destroy(function() {
    res.redirect('/login');
  });
};

exports.fetchSoundFile = function(req, res) {
  var file = fs.readFile('../../foley/28134__herbertboland__grendel');
  res.set({'Content-Type' : 'audio/wav'});
  res.sendFile("soundfiles/28134__herbertboland__grendel");
};

exports.loginUser = function(req, res) {
  // build
};
exports.signupUser = function(req, res) {
  // build
};






// determine where call to app is happening, where ajax call is happening,
//
