// Importation du framework Express et de sa fonctionnalité router
const express = require('express');
const router = express.Router();

// Importation du controller User
const userCtrl = require('../controllers/user');

// Différentes routes users
router.post('/signup', userCtrl.signup);
router.get('/login', userCtrl.login);

// Exportation des routes users
module.exports = router;