const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const FrecuenciaCardiaca = require("./frecuenciaCardiaca");
const PresionArterial = require("./presionArterial");
const Temperatura = require("./temperatura");
const Peso = require("./peso");

class Hijo extends Model {}

Hijo.init(
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
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    edad: {
      type: DataTypes.INTEGER,
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
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "hijo",
    tableName: "hijo",
    timestamps: true,
  },
);

Hijo.hasMany(FrecuenciaCardiaca, {
  foreignKey: "hijoId",
  as: "frecuenciasCardiacas",
});

Hijo.hasMany(PresionArterial, {
  foreignKey: "hijoId",
  as: "presionArterial",
});

Hijo.hasMany(Temperatura, {
  foreignKey: "hijoId",
  as: "Temperatura",
});

Hijo.hasMany(Peso, {
  foreignKey: "hijoId",
  as: "Peso",
});

module.exports = Hijo;
