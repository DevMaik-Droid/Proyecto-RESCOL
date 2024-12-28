const Grado = require('../../models/Grado');

class GradoService {
    async getAllGrados() {
        const grados = await Grado.findAll();
        return grados;
    }
    async getGradoById(id) {
        const grado = await Grado.findByPk(id);
        return grado;
    }
    async createGrado(data) {
        const grado = await Grado.create(data);
        return grado;
    }
    async updateGrado(id, data) {
        const grado = await Grado.findByPk(id);
        if (grado) {
            return await grado.update(data);
        }
        return null;
    }
    async deleteGrado(id) {
        const grado = await Grado.findByPk(id);
        if (grado) {
            return await grado.destroy();
        }
        return null;
    }
}

module.exports = new GradoService();