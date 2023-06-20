const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: String,
  bodyArea: String,
  type: String,
}, { timestamps: false });

module.exports = mongoose.model('Exercise', ExerciseSchema);