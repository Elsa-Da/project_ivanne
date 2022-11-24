const db = require("../models");
const Plant = db.plants;
const Op = db.Sequelize.Op;

// Create and Save a new Plant
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Plant
    const plant = {
       name: req.body.name,
        sciName: req.body.sciName,
        origin: req.body.origin,
        picture: req.body.picture,
        difficulty: req.body.difficulty,
        category: req.body.category,
        watering: req.body.watering,
        sunshine: req.body.sunshine,
        substrate: req.body.substrate,
        advice: req.body.advice
  };

  // Save New Plant in the database
  Plant.create(plant)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Plant."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Plant.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving plants."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Plant.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Plant with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Plant with id=" + id
      });
    });
};

// Update a Plant by the id in the request
exports.update = (req, res) => {
   const id = req.params.id;

  Plant.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Plant was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Plant with id=${id}. Maybe Plant was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

// Delete a Plant with the specified id in the request
exports.delete = (req, res) => {
   const id = req.params.id;

  Plant.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Plant was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Plant with id=${id}. Maybe Plant was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Plant with id=" + id
      });
    });
};

// Find all Plants by condition
exports.findAllPublished = (req, res) => {
   Plant.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving plants."
      });
    });
};
