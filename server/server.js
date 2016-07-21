var app = require('./server-config.js');
var db = require('./database.js');

var port = process.env.PORT || 8000;

app.listen(port);

// var newKeyboard = new db.keyboard({
//   "bindings": {
//     "test1": 42
//   }
// })
//
// newKeyboard.save(function(err){
//   if(err){
//     console.log("newKeyboard not saved")
//   }
//   console.log("newKeyboard saved!");
// })

console.log('Soundboard is now listening on port ' + port);
