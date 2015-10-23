var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User;

// Email
var userSchema = new Schema({
  name: String,
  email: { type: String, required: true, index: { unique: true } },
  location: String,
  addedFrom: { type: String, required: true }
});

try {
  User = mongoose.model('User');
} catch (e) {
  User = mongoose.model('User', userSchema, 'users');
}

module.exports = {
  User: User
};
