const sequelize = require("../config/database");

class PresionArterial extends Model {}

PresionArterial.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sistolica: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    diastolica: {
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
    modelName: "PresionArterial",
    tableName: "presiones_arteriales",
    timestamps: false,
  },
);

module.exports(PresionArterial);
