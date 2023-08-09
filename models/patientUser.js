const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientUserSchema = new Schema({
  name: String,
  email: String,
  therapistId: String,
  id: String,
  heps: Array
}, { timestamps: true });

module.exports = mongoose.model('patientUser', patientUserSchema);