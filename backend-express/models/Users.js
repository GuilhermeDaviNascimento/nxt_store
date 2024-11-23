const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// Defina o modelo User
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING, // Altere de DataTypes.NUMBER para DataTypes.FLOAT
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

// Sincronize o modelo com o banco de dados
async function syncModels() {
  await User.sync({ force: false }); // Use force: true para recriar a tabela
}

syncModels();

module.exports = User;
