const User = require("../models/user-model");

const ObtenerPerfil = async (req, res) => {
    try {
      const perfil = await User.findById(req.params.id);
      res.status(200).json(perfil);
    } catch (error) {
      res.status(404).json({ mensaje: 'Perfil no encontrado' });
    }
  };

module.exports = ObtenerPerfil;