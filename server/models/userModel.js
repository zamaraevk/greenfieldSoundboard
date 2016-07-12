var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  keyBindingId: Number,
  username: String,
  passHash: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
