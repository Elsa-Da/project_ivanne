// Import du modèle "Sauce" et du module nodejs file system
const Plant = require('../models/Plant');
const fs = require('fs');

// CREATION D'UNE NOUVELLE SAUCE
exports.createPlant = (req, res) => {
    //on parse l'objet requête, puisque l'objet est envoyé sous forme json mais en chaine de caractère
    const plantObject = req.body;
    //on supprime l'id de la sauce puisqu'il sera généré automatiquement par BDD
    delete plantObject._id;
    //on supprime l'userID pour pouvoir utiliser l'userID qui vient du token d'identification
    delete plantObject._userId;
    //on crée la nouvelle sauce
    const plant = new Plant({
        ...plantObject
    });

    // on sauvegarde la sauce
    plant.save()
        .then(() => { res.status(201).json({ message: 'Objet enregistré !' }) })
        .catch(error => { res.status(400).json({ error }) })
};

// AFFICHAGE D'UNE PLANTE UNIQUE
exports.getOnePlant = (req, res) => {
    //on trouve la sauce qui correspond à l'id que l'on recherche
    Plant.findOne({
        _id: req.params.id
    }).then(
        (plant) => {
            res.status(200).json(plant);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

// MODIFICATION D'UNE PLANTE
exports.modifyPlant = (req, res) => {

    //on récupère la sauce dans notre BDD
    Plant.findOne({ _id: req.params.id })
        .then(() => {
            //si l'utilisateur à transmis un fichier on récupère notre objet en parsant la chaine de caractère + recrée url img
            const plantObject = { ...req.body };

            //si c'est bien le cas, on update la sauce
            Plant.updateOne({ _id: req.params.id }, { ...plantObject, _id: req.params.id })
                .then(() => res.status(200).json({ message: 'Objet modifié!' }))
                .catch(error => res.status(401).json({ error }));
        })
        .catch((error) => {
            res.status(400).json({ error });
        });
};

// SUPRESSION D'UNE PLANTE
exports.deletePlant = (req, res) => {
    //on trouve la sauce qui correspond à l'id que l'on recherche
    Plant.findOne({ _id: req.params.id })
        .then(plant => {
                //puis on supprime la sauce
               plant.deleteOne({ _id: req.params.id })
                    .then(() => { res.status(200).json({ message: 'Objet supprimé !' }) })
                    .catch(error => res.status(401).json({ error }));
        })
        .catch(error => {
            res.status(500).json({ error });
        });
};

// AFFICHAGE DE TOUTES LES PLANTES
exports.getAllPlants = (req, res) => {
    //on trouve toutes les sauces crées
    Plant.find()
        .then(
            (plant) => {
                res.status(200).json(plant);
            }
        ).catch(
            (error) => {
                res.status(400).json({
                    error: error
                });
            }
        );
};


