var app = require('./server-config.js');
var db = require('./database.js');

var port = process.env.PORT || 8000;

app.listen(port);


console.log('Soundboard is now listening on port ' + port);
