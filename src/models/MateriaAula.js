const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database-config');

const MateriaAula = sequelize.define('MateriaAula', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_materia: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Materia',
            key: 'id'
        },
        allowNull: false
    },
    id_aula: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Aula',
            key: 'id'
        },
        allowNull: false
    }
});

module.exports = MateriaAula;