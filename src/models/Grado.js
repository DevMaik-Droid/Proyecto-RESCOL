const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/database-config");

const Grado = sequelize.define(
  "Grado",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "grado",
    timestamps: false,
  }
);

module.exports = Grado;
