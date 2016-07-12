var app = require('./server-config.js');
var mongoose = require('mongoose');
// using Mongoose ORM to build into our DB.
mongoose.connect('mongodb://localhost/soundboarddatabase');

var port = process.env.PORT || 8000;

app.listen(port);

console.log('Soundboard is now listening on port ' + port);
