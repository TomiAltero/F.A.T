"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class UsuarioXHijo extends Model {
  static associate(models) {}
}

UsuarioXHijo.init(
  {
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Usuario",
        key: "id",
      },
    },
    hijoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Hijo",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "UsuarioXHijo",
    tableName: "UsuarioXHijo",
    timestamps: true,
  },
);

module.exports = UsuarioXHijo;
