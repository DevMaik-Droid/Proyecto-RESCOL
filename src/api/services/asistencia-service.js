const Asistencia = require("../../models/Asistencia");

class AsistenciaService {
    async obtenerAsistencias() {
        try {
            const asistencias = await Asistencia.findAll();
            return asistencias;
        } catch (error) {
            console.error("Error al obtener asistencias:", error);
            throw error;
        }
    }

    async crearAsistencia(data) {
        try {
            const asistencia = await Asistencia.create(data);
            return asistencia;
        } catch (error) {
            console.error("Error al crear asistencia:", error);
            throw error;
        }
    }
}

module.exports = new AsistenciaService();