var app = require('./server-config.js');
var mongoose = require('mongoose');
// assuming we are using MongoDB, we will need Mongoose as ORM.
mongoose.connect('');

var port = process.env.PORT || 8000;

app.listen(port);

console.log('Soundboard is now listening on port ' + port);
