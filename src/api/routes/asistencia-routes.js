const express = require("express");
const router = express.Router();
const asistenciaController = require("../controllers/asistencia-controller");

router.get("/", asistenciaController.obtenerAsistencias);
router.post("/", asistenciaController.crearAsistencia);

module.exports = router;

