// Importation des différents éléments nécessaires au bon fonctionnement de l'application
require('dotenv').config('/.env');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Connexion à la BDD
mongoose.connect(`mongodb+srv://${process.env.BDD_USER}:${process.env.BDD_PASSWORD}@${process.env.BDD_CLUSTER_NAME}.mongodb.net/?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

// Importation des routes
const userRoutes = require('./routes/user');
const plantRoutes = require('./routes/plant');

// Exécution des routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use('/api/auth', userRoutes);
app.use('/api/plant', plantRoutes);


// Export du fichier app
module.exports = app;