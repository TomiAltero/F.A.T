"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("frecuencia_cardiacas", {
      fields: ["hijoId"],
      type: "foreign key",
      name: "fk_hijoId",
      references: {
        table: "hijo",
        field: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("frecuencia_cardiacas", "fk_hijoId");
  },
};
