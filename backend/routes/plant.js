// Importation du framework Express et de sa fonctionnalité router
const express = require('express');
const router = express.Router();

// Importation de l'authentification & de multer
const auth = require('../middleware/auth');
// Importation des controllers Plant
const plantCtrl = require('../controllers/plant');

// Différentes routes de "Sauce"
router.post('/', plantCtrl.createPlant);
router.get('/', plantCtrl.getAllPlants);
router.get('/:id', plantCtrl.getOnePlant);
router.put('/:id', auth, plantCtrl.modifyPlant);
router.delete('/:id', auth, plantCtrl.deletePlant);

// Exportation des routes
module.exports = router;