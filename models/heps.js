const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HepSchema = new Schema({
  reps: String,
  weight: String,
  bands: String,
  hold: String,
  sets: String,
  times: String,
  day: String,
  week: String,
  hour: String,
}, { timestamps: true });

module.exports = mongoose.model('Hep', HepSchema);