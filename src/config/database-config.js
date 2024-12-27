const {Sequelize} = require('sequelize')
const env = require('./env-config')
const database = env.database

const sequelize = new Sequelize(database.name, database.user, database.password, {
    host: database.host,
    dialect: database.dialect
})

const connectDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexion exitosa a la base de datos');
    } catch (error) {
        console.error('Error en la conexion a la base de datos:', error);
    }
}

module.exports = {
    sequelize,
    connectDatabase
}
