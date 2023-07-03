const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  name: String,
  bodyArea: String,
  type: String,
  description: String,
  tags: Array,
}, { timestamps: false });

module.exports = mongoose.model('Exercise', ExerciseSchema);