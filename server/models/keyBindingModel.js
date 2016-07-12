var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var keyBindingSchema = new Schema({
  id: Number,
  65 : String,
  66 : String,
  67 : String,
  68 : String,
  69 : String,
  70 : String,
  71 : String,
  72 : String,
  73 : String,
  74 : String,
  75 : String,
  76 : String,
  77 : String,
  78 : String,
  79 : String,
  80 : String,
  81 : String,
  82 : String,
  83 : String,
  84 : String,
  85 : String,
  86 : String,
  87 : String,
  88 : String,
  89 : String,
  90 : String
});

var KeyBinding = mongoose.model('KeyBinding', keyBindingSchema);

module.exports = KeyBinding;
