const { Sequelize } = require('sequelize');

// Configure sua conexão com o banco de dados MySQL
const sequelize = new Sequelize('nxt', 'root', '', {
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
