const { Sequelize } = require('sequelize');
const Clothes = require('./clothes.js');

// Configure sua conexão com o banco de dados MySQL
const sequelize = new Sequelize('nxtdatabase', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

// Teste a conexão
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados foi bem-sucedida!');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  }
}

testConnection();


module.exports = sequelize;
