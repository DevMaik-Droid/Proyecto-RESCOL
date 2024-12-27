const Aula = require('../../models/Aula');

class AulaService {
    async getAllAulas() {
        return await Aula.findAll({
            attributes: ['id', 'nombre', 'sigla', 'capacidad', 'tipo', 'piso', 'estado']
        });
    }
    async obtenerAulaPorId(id) {
        const aula = await Aula.findByPk(id);
        return aula;
    }
    async createAula(data) {
        const aula = await Aula.create(data);
        return aula;
    }
    async updateAula(id, data) {
        const aula = this.obtenerAulaPorId(id);
        if (aula) {
            return await aula.update(data);
        }
        return null;
    }
    async deleteAula(id) {
        const aula = this.obtenerAulaPorId(id);
        if (aula) {
            return await aula.destroy();
        }
        return null;
    }
}

module.exports = new AulaService();