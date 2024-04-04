const Empresa = require("../models/user-models-empresa");

const ObtenerPerfilE = async (req, res) => {
    try {
      const perfil = await Empresa.findById(req.params.id);
      res.status(200).json(perfil);
    } catch (error) {
      res.status(404).json({ mensaje: 'Perfil no encontrado' });
    }
  };

module.exports = ObtenerPerfilE;