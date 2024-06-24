const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database");
const Hijo = require("./hijo");

class Temperatura extends Model {}

Temperatura.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    valor: {
      type: DataTypes.DECIMAL,
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
    modelName: "Temperatura",
    tableName: "Temperatura",
    timestamps: false,
  },
);

Temperatura.associate = (models) => {
  Temperatura.belongsTo(models.Hijo, {
    foreignKey: "hijoId",
    as: "Hijos",
  });
};

module.exports = Temperatura;
