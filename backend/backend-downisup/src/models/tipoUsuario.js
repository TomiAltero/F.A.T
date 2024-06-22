const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");

class Rol extends Model {}

Rol.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Rol",
    tableName: "roles",
    timestamps: false,
  },
);

module.exports = Rol;
