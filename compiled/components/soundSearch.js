"use strict";

var soundSearch = function soundSearch(_ref, callback) {
  var key = _ref.key;
  var query = _ref.query;

  $.get('http://www.freesound.org/apiv2/search/text/?', {
    query: query,
    token: key
  }).done(function (_ref2) {
    var results = _ref2.results;

    console.log("hello", results);
    // if (callback) {
    //   callback(items);
    // }
  }).fail(function (_ref3) {
    var responseJSON = _ref3.responseJSON;

    responseJSON.error.errors.forEach(function (err) {
      return console.error(err);
    });
  });
};

window.soundSearch = soundSearch;