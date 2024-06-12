"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Hijo extends Model {
  static associate(models) {
    Hijo.belongsToMany(models.Usuario, {
      through: "UsuarioXHijo",
      foreignKey: "hijoId",
      otherKey: "usuarioId",
    });
  }
}

Hijo.init(
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Hijo",
  },
);

module.exports = Hijo;
