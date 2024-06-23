const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Usuario = require("./usuario");
const Hijo = require("./hijo");

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
Usuario.belongsToMany(Hijo, {
  through: UsuarioXHijo,
  as: "Hijos",
  foreignKey: "usuarioId",
});

Hijo.belongsToMany(Usuario, {
  through: UsuarioXHijo,
  as: "Usuarios",
  foreignKey: "hijoId",
});

module.exports = UsuarioXHijo;
