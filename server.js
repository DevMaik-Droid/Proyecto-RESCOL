const app = require('./src/app');
const { connectDatabase } = require("./src/config/database-config");
const env = require('./src/config/env-config')
connectDatabase()

app.listen(env.port, () => {
    console.log(`Escuchando en el puerto ${env.port}`);
});