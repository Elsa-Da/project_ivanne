// Importation de mongoose 
const mongoose = require('mongoose');

// Création du modèle Plant
const plantSchema = mongoose.Schema({
    name: { type: String, required: true },
    sciName: { type: String},
    origin: { type: String, required: true },
    picture: { type: String, required: true },
    difficulty: { type: Number, required: true },
    category: { type: String, required: true },
    watering: { type: String, required: true },
    sunshine: { type: String, required: true },
    substrate: { type: String, required: true },
    advice: { type: String, required: true }
});

// Exportation du modèle User
module.exports = mongoose.model('Plant', plantSchema);