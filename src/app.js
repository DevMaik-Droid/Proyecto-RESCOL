const express = require('express');
const app = express();
const morgan = require('morgan');
const aulaRoutes = require("./api/routes/aula-routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use("/api/aulas", aulaRoutes);

module.exports = app;