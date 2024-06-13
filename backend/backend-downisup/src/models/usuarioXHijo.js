const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class UsuarioXHijo extends Model {}

UsuarioXHijo.init(
  {
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hijoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
