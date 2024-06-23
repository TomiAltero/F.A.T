const sequelize = require("sequelize");

class Temperatura extends sequelize.Model {}

Temperatura.init(
  {
    id: {
      type: sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    valor: {
      type: sequelize.DataTypes.DECIMAL,
      allowNull: false,
    },
    descripcion: {
      type: sequelize.DataTypes.TEXT,
      allowNull: true,
    },
    fecha: {
      type: sequelize.DataTypes.DATE,
      allowNull: false,
    },
    hora: {
      type: sequelize.DataTypes.TIME,
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

module.exports = PresionArterial;
