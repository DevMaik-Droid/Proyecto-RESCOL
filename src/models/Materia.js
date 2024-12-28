const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database-config');

const Materia = sequelize.define('Materia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    codigo: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING(100),
        allowNull: false
    },
    id_grado: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Grado',
            key: 'id'
        },
        allowNull: false
    }
});

module.exports = Materia;