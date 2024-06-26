"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Usuarios", "nombre", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("Usuarios", "apellido", {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Usuarios", "nombre");
    await queryInterface.removeColumn("Usuarios", "apellido");
  },
};
