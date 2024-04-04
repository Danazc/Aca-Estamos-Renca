const User = require("../models/user-model");

const GuardarExperiencia = async (req, res) => {
  try {
    const userId = req.params.id;
    const usuario = await User.findById(userId);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }

    const nuevosDatos = {
      Cargo: req.body.Cargo,
      TipoEmpleo: req.body.TipoEmpleo,
      NombredelaEmp: req.body.NombredelaEmp,
      FechaExpInicio: req.body.FechaExpInicio,
      FechaExpFin: req.body.FechaExpFin,
      CheckCargo: req.body.CheckCargo,
      DescripcionCargo: req.body.DescripcionCargo,
    };

    Object.assign(usuario, nuevosDatos);

    await usuario.save();

    res.status(201).json({ mensaje: "Perfil actualizado exitosamente" });
  } catch (error) {
    console.error("Error al guardar el perfil:", error);
    res.status(500).json({ mensaje: "Error al guardar el perfil" });
  }
};

module.exports = GuardarExperiencia;
