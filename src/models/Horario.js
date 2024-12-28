const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database-config');

const Horario = sequelize.define('Horario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_materia_aula: {
        type: DataTypes.INTEGER,
        references: {
            model: 'MateriaAula',
            key: 'id'
        },
        allowNull: false
    },
    dia: {
        type: DataTypes.ENUM('LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'),
        allowNull: false
    },
    hora_inicio: {
        type: DataTypes.TIME,
        allowNull: false
    },
    hora_fin: {
        type: DataTypes.TIME,
        allowNull: false
    }
},{
    tableName: 'horario',
    timestamps: false
});

module.exports = Horario;
