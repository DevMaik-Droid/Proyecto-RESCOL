const asistenciaService = require("../services/asistencia-service");

class AsistenciaController {
    async obtenerAsistencias(req, res) {
        try {
            const asistencias = await asistenciaService.obtenerAsistencias();
            res.json(asistencias);
        } catch (error) {
            console.error("Error al obtener asistencias:", error);
            res.status(500).json({ error: "Error al obtener asistencias" });
        }
    }
    async crearAsistencia(req, res) {
        try {
            const asistencia = await asistenciaService.crearAsistencia(req.body);
            res.json({ message: "Asistencia creada exitosamente", status: "success" });
        } catch (error) {
            console.error("Error al crear asistencia:", error);
            res.status(500).json({ error: "Error al crear asistencia" });
        }
    }
}

module.exports = new AsistenciaController();