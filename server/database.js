var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://needsclosure:needsclosure1@ds027175.mlab.com:27175/soundboard');

var keyboardSchema = new Schema({
  97 : String,
  98 : String,
  99 : String,
  100 : String,
  101 : String,
  102 : String,
  103 : String,
  104 : String,
  105 : String,
  106 : String,
  107 : String,
  108 : String,
  109 : String,
  110 : String,
  111 : String,
  112 : String,
  113 : String,
  114 : String,
  115 : String,
  116 : String,
  117 : String,
  118 : String,
  119 : String,
  120 : String,
  121 : String,
  122 : String
});

var Keyboard = mongoose.model('Keyboard', keyboardSchema);

module.exports = {
  'keyboard': Keyboard
}
