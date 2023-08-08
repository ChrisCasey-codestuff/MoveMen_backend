const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  email: String,
  role: String,
  patients: Array
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);