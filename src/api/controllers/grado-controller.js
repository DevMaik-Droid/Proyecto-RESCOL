const gradoService = require("../services/grado-service");

class GradoController {
    async obtenerGrados(req, res) {
        try {
            const grados = await gradoService.getAllGrados();
            res.status(200).json(grados);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener los grados" });
        }
    }
    async crearGrado(req, res) {
        try {
            const grado = await gradoService.createGrado(req.body);
            res.status(201).json(grado);
        } catch (error) {
            res.status(500).json({ error: "Error al crear el grado" });
        }
    }

    async crearGrado2(req, res) {
        try {
            console.log(req.params.grado);
            const grado = await gradoService.createGrado({
                nombre: req.params.grado});
            res.send("Grado creado exitosamente");
        } catch (error) {
            res.send("Error al crear el grado");
        }
    }
    async obtenerGradoPorId(req, res) {
        try {
            const grado = await gradoService.getGradoById(req.params.id);
            res.status(200).json(grado);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener el grado" });
        }
    }
}

module.exports = new GradoController();