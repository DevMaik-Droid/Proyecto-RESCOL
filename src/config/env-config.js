require("dotenv").config();

const validateDataBaseConfig = (config) => {
  if (
    !config.host ||
    !config.user ||
    !config.password ||
    !config.name ||
    !config.dialect
  ) {
    throw new Error("Falta configurar la base de datos");
  }
  if (!["mysql", "postgres"].includes(config.dialect)) {
    throw new Error("Dialecto no soportado");
  }
};

const env = {
  port: process.env.PORT,
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT,
  }
};

validateDataBaseConfig(env.database); //valida la configuracion de la base de datos

module.exports = env;
