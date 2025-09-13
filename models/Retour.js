const mongoose = require('mongoose');

const RetourSchema = new mongoose.Schema({
  nomUtilisateur: { type: String, required: true },
  avis: { type: String, required: true },
  note: { type: Number, required: true, min: 1, max: 5 },
  dateSoumission: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Retour', RetourSchema);