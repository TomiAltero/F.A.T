const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT, // Agregar esta línea si el puerto es diferente al predeterminado
  dialect: 'mysql',
});

module.exports = sequelize;
