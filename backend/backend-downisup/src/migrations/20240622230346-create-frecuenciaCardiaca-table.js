"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("frecuencia_cardiacas", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      frecuencia: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      hora: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      hijoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "hijo",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("frecuencia_cardiacas");
  },
};
