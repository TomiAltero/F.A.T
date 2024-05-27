'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('usuarios', 'nombre', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn('usuarios', 'apellido', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('usuarios', 'nombre');
    await queryInterface.removeColumn('usuarios', 'apellido');
  }
};

