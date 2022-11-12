// Importation de mongoose 
const mongoose = require('mongoose');

// Création du modèle "First"
const userSchema = mongoose.Schema({
    pseudo: { type: String, required: true },
    password: { type: String, required: true }
});

// Exportation du modèle User
module.exports = mongoose.model('User', userSchema);