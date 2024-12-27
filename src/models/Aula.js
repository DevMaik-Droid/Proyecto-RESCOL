const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database-config'); // Tu instancia de conexión Sequelize

const Aula = sequelize.define('Aula', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(100), // Limita el tamaño a 100 caracteres
        allowNull: false,           // NOT NULL
    },
    sigla:{
        type: DataTypes.STRING(10), // Limita el tamaño a 10 caracteres
        allowNull: false,           // NOT NULL
    },
    capacidad: {
        type: DataTypes.INTEGER,
        allowNull: false,           // NOT NULL
    },
    tipo: {
        type: DataTypes.ENUM('Regular', 'Laboratorio', 'Taller', 'Auditorio'),
        allowNull: false,           // NOT NULL
    },
    piso: {
        type: DataTypes.INTEGER,    // Columna opcional
        allowNull: true,            // Permite valores nulos
    },
    estado: {
        type: DataTypes.ENUM('Activo', 'Mantenimiento', 'Inactivo'),
        defaultValue: 'Activo',     // Valor por defecto
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // CURRENT_TIMESTAMP por defecto
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, // CURRENT_TIMESTAMP por defecto
        onUpdate: DataTypes.NOW,     // ON UPDATE CURRENT_TIMESTAMP
    },
}, {
    tableName: 'aula',             // Nombre de la tabla en la base de datos
    timestamps: false,             // Desactiva las columnas createdAt y updatedAt automáticas
});

module.exports = Aula;
