const express = require("express");
const router = express.Router();
const aulaController = require("../controllers/aula-controller");


// Rutas protegidas por autenticación y validación
/*
router.post('/aulas', authMiddleware, validateInput, aulaController.crearAula);
router.put('/aulas/:id', authMiddleware, validateInput, aulaController.actualizarAula);
*/


router.get("/", aulaController.obtenerAulas);
router.get("/:id", aulaController.obtenerAulaPorId);
router.post("/", aulaController.crearAula);
router.put("/:id", aulaController.actualizarAula);
router.delete("/:id", aulaController.eliminarAula);

module.exports = router;
