const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Hijo = require("./hijo");

class FrecuenciaCardiaca extends Model {}

FrecuenciaCardiaca.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    frecuencia: {
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
  },
  {
    sequelize,
    modelName: "FrecuenciaCardiaca",
    tableName: "frecuencia_cardiacas",
    timestamps: false,
  },
);

FrecuenciaCardiaca.associate = (models) => {
  FrecuenciaCardiaca.belongsTo(models.Hijo, {
    foreignKey: "hijoId",
    as: "hijo",
  });
};

module.exports = FrecuenciaCardiaca;
