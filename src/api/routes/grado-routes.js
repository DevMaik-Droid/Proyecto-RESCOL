
const express = require("express");
const router = express.Router();

const gradoController = require("../controllers/grado-controller");

router.get("/", gradoController.obtenerGrados);
router.post("/:grado", gradoController.crearGrado2);


module.exports = router;