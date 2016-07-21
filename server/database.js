var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://needsclosure:needsclosure1@ds027175.mlab.com:27175/soundboard');

var keyboardSchema = new Schema({
  "bindings": Object
});

var Keyboard = mongoose.model('Keyboard', keyboardSchema);

module.exports = {
  'keyboard': Keyboard
}
