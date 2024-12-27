const express = require('express');
const app = express();
const aulaRoutes = require("./api/routes/aula-routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/aulas", aulaRoutes);

module.exports = app;