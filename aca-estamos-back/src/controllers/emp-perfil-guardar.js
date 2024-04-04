const Empresa = require("../models/user-models-empresa");
const fs = require("fs").promises;


const guardarArchivo = async (buffer, extension) => {
  const nombreArchivo = `${Date.now()}.${extension}`;
  await fs.writeFile(`./uploads/${nombreArchivo}`, buffer);
  return `${nombreArchivo}`;
};

const GuardarPerfilE = async (req, res) => {
  try {
    const userId = req.params.id;
    const empresa = await Empresa.findById(userId);

    if (!empresa) {
      return res.status(404).json({ mensaje: "empresa no encontrado" });
    }
    const nuevosDatos = {
      NombreEmpresa: req.body.NombreEmpresa,
      RutEmpresa: req.body.RutEmpresa,
      Acercade: req.body.Acercade,
      Trayectoria: req.body.Trayectoria,
      Rubro: req.body.Rubro,
      Numeroempleados: req.body.Numeroempleados,
      CorreoContacto: req.body.CorreoContacto,
      Telefono: req.body.Telefono,
      Ubicacion: req.body.Ubicacion,
      LinkedIn: req.body.LinkedIn,

    };

    const ImagenEmpresa = req?.files?.["ImagenEmpresa"]?.[0];
    if (ImagenEmpresa) {
      const buffer = ImagenEmpresa.buffer;
      const extension = ImagenEmpresa.originalname.split(".").pop();
      nuevosDatos.ImagenEmpresa = await guardarArchivo(buffer, extension);
    }

    Object.assign(empresa, nuevosDatos);


    await empresa.save();

    res.status(201).json({ mensaje: "Perfil actualizado exitosamente" });
  } catch (error) {
    console.error("Error al guardar el perfil:", error);
    res.status(500).json({ mensaje: "Error al guardar el perfil" });
  }
};

module.exports = GuardarPerfilE;