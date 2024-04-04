const User = require("../models/user-model");

const GuardarPerfilcv = async (req, res) => {
  try {
    const userId = req.params.id;
    const usuario = await User.findById(userId);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    const nuevosDatos = {
      NombreCV: req.body.NombreCV,
      TitularCV: req.body.TitularCV,
      AcercadeCV: req.body.AcercadeCV,
      ConocimientosCV: req.body.ConocimientosCV,
      CursosCV: req.body.CursosCV
    };

    Object.assign(usuario, nuevosDatos);

    await usuario.save();

    res.status(201).json({ mensaje: "Perfil actualizado exitosamente" });
  } catch (error) {
    console.error("Error al guardar el perfil:", error);
    res.status(500).json({ mensaje: "Error al guardar el perfil" });
  }
};

module.exports = GuardarPerfilcv;
