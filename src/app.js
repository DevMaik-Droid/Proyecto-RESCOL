const express = require('express');
const app = express();
const morgan = require('morgan');
const aulaRoutes = require("./api/routes/aula-routes");
const gradoRoutes = require("./api/routes/grado-routes");
const asistenciaRoutes = require("./api/routes/asistencia-routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use("/api/aulas", aulaRoutes);
app.use("/api/grados", gradoRoutes);
app.use("/api/asistencia", asistenciaRoutes);

module.exports = app;