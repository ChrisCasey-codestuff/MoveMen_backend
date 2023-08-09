const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const therapistUserSchema = new Schema({
  name: String,
  email: String,
  id: String,
}, { timestamps: true });

module.exports = mongoose.model('therapistUser', therapistUserSchema);