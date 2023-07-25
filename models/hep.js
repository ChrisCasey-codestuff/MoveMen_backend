const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HepSchema = new Schema({
  hep: Array,
}, { timestamps: true });

module.exports = mongoose.model('Hep', HepSchema);