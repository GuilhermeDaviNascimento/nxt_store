const { DataTypes } = require('sequelize');
const sequelize = require('./db');

// Defina o modelo User
const Clothes = sequelize.define('Clothes', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT, // Altere de DataTypes.NUMBER para DataTypes.FLOAT
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sincronize o modelo com o banco de dados
async function syncModels() {
  await Clothes.sync({ force: true }); // Use force: true para recriar a tabela
}

syncModels();

module.exports = Clothes;
