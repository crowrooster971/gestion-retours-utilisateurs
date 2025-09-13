const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Updated to use express.json() instead of body-parser

// Connection to MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gestion-retours';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie!'))
  .catch(err => console.error('Erreur de connexion:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API de Gestion des Retours Utilisateurs');
});

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});