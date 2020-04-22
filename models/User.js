var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  confirm_password: String,
  about: String,
  phone: Number,
  address: String
});

module.exports = mongoose.model('User', UserSchema);