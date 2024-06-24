"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("peso", "hijoId", {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "hijo",
        key: "id",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("peso", "hijoId");
  },
};
