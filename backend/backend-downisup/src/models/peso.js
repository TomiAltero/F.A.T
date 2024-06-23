const sequelize = require("../config/database");

class Peso extends Model {}

Peso.init({
  id: {
    DataTypes: INTEGER,
    autoIncrement: true,
  },
  peso: {
    type: DataTypes.FLOAT,
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
  },
});

module.exports(Peso);
