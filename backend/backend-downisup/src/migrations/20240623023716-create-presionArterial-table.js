"use strict";

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("presiones_arteriales", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      sistolica: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      diastolica: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      hora: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      hijoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "hijo",
          key: "id",
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("presiones_arteriales");
  },
};
