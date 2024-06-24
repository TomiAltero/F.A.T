const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Hijo = require("./hijo");

class Peso extends Model {}

Peso.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    peso: {
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
  },
  {
    sequelize,
    modelName: "Peso",
    tableName: "peso",
    timestamps: false,
  },

  (Peso.associate = (models) => {
    Peso.belongsTo(models.Hijo, {
      foreignKey: "hijoId",
      as: "Hijos",
    });
  }),
);

module.exports = Peso;
