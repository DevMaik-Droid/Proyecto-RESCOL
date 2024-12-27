const aulaService = require("../services/aula-service");

class AulaController {
  async crearAula(req, res) {
    try {
      const aula = await aulaService.createAula(req.body);
      res.status(201).json(aula);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al crear el aula", error: error.message });
    }
  }

  async obtenerAulas(req, res) {
    try {
      const aulas = await aulaService.getAllAulas();
      if (aulas.length === 0) {
        res.status(404).json({ message: "No se encontraron aulas" });
        return;
      }
      res.status(200).json(aulas);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener las aulas", error: error.message });
    }
  }

  async obtenerAulaPorId(req, res) {
    try {
      const aula = await aulaService.obtenerAulaPorId(req.params.id);
      if (aula) {
        res.status(200).json(aula);
      } else {
        res.status(404).json({ message: "Aula no encontrado" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener el aula", error: error.message });
    }
  }

  async actualizarAula(req, res) {
    try {
      const aula = await aulaService.updateAula(req.params.id, req.body);
      if (aula) {
        res.status(200).json(aula);
      } else {
        res.status(404).json({ message: "Aula no encontrado" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al actualizar el aula", error: error.message });
    }
  }

  async eliminarAula(req, res) {
    try {
      const aula = await aulaService.deleteAula(req.params.id);
      if (aula) {
        res.status(200).json({ message: "Aula eliminado correctamente" });
      } else {
        res.status(404).json({ message: "Aula no encontrado" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al eliminar el aula", error: error.message });
    }
  }
}

module.exports = new AulaController();
