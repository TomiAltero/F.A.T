"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Usuarios", "tipoUsuarioId", {
      type: Sequelize.INTEGER,
      references: {
        model: "tipousuario",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Usuarios", "tipoUsuarioId");
  },
};
