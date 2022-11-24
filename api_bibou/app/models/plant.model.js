module.exports = (sequelize, Sequelize) => {
  const Plant = sequelize.define("plant", {
     name: { type: Sequelize.STRING, allowNull: false },
        sciName: { type: Sequelize.STRING },
        origin: { type: Sequelize.STRING, allowNull: false },
        picture: { type: Sequelize.STRING, allowNull: false },
        difficulty: { type: Sequelize.INTEGER, allowNull: false },
        category: { type: Sequelize.STRING, allowNull: false },
        watering: { type: Sequelize.STRING, allowNull: false },
        sunshine: { type: Sequelize.STRING, allowNull: false },
        substrate: { type: Sequelize.STRING, allowNull: false },
        advice: { type: Sequelize.STRING, allowNull: false }
  });

  return Plant;
};