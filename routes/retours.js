const express = require('express');
const router = express.Router();
const Retour = require('../models/Retour');

// Soumettre un retour
router.post('/', async (req, res) => {
  const { nomUtilisateur, avis, note } = req.body;
  const nouveauRetour = new Retour({ nomUtilisateur, avis, note });
  try {
    await nouveauRetour.save();
    res.status(201).json(nouveauRetour);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Obtenir tous les retours
router.get('/', async (req, res) => {
  try {
    const retours = await Retour.find();
    res.json(retours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;