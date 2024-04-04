const User = require("../models/user-model");

const GuardarEducacion = async (req, res) => {
  try {
    const userId = req.params.id;
    const usuario = await User.findById(userId);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    const nuevosDatos = {
        NivelEducacional: req.body.NivelEducacional,
        InstitucionEducativa: req.body.InstitucionEducativa,
        Titulo: req.body.Titulo,
        FechaInicio: req.body.FechaInicio,
        FechaFinalizacion: req.body.FechaFinalizacion,
        Descripcion: req.body.Descripcion,

    };

    Object.assign(usuario, nuevosDatos);


    await usuario.save();

    res.status(201).json({ mensaje: "Perfil actualizado exitosamente" });
  } catch (error) {
    console.error("Error al guardar el perfil:", error);
    res.status(500).json({ mensaje: "Error al guardar el perfil" });
  }
};

module.exports = GuardarEducacion;