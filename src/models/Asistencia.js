const {DataTypes} = require('sequelize');
const {sequelize} = require('../config/database-config');

const Asistencia = sequelize.define('Asistencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    matricula: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    id_horario: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Horario',
            key: 'id'
        },
        allowNull: false
    },
    fecha_hora: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
        type: DataTypes.ENUM('PRESENTE', 'FALTO', 'TARDE'),
        allowNull: false
    }
},{
    tableName: 'asistencia',
    timestamps: false
});

module.exports = Asistencia;
    