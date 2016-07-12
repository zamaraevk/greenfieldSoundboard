var request = require('request');
var util = require('./lib/util.js');

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

exports.fetchSoundFiles = function(req, res) {
  // build
};

exports.fetchASoundFile = function(req, res) {

};

exports.loginuser = function(req, res) {
  // build
};
exports.signupUser = function(req, res) {
  // build
};






// determine where call to app is happening, where ajax call is happening,
//
