const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Hijo = require("./hijo");
const UsuarioXHijo = require("./usuarioXHijo");

class Usuario extends Model {}

Usuario.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "Usuario",
    tableName: "Usuarios",
    timestamps: true,
  },
);

Usuario.belongsToMany(Hijo, {
  through: UsuarioXHijo,
  as: "Hijos",
  foreignKey: "usuarioId",
});

module.exports = Usuario;
