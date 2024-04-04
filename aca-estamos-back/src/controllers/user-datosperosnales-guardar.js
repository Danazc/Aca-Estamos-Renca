const User = require("../models/user-model");
const fs = require("fs").promises;


const guardarArchivo = async (buffer, extension) => {
  const nombreArchivo = `${Date.now()}.${extension}`;
  await fs.writeFile(`./uploads/${nombreArchivo}`, buffer);
  return `${nombreArchivo}`;
};

const GuardarPerfil = async (req, res) => {
  try {
    const userId = req.params.id;
    const usuario = await User.findById(userId);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    const nuevosDatos = {
      Nombre: req.body.Nombre,
      Apellido: req.body.Apellido,
      Telefono: req.body.Telefono,
      EstadoCivil: req.body.EstadoCivil,
      Rubro: req.body.Rubro,
      Disponibilidad: req.body.Disponibilidad,
      LinkedIn: req.body.LinkedIn,

    };

    const ArchivoPDF1 = req?.files?.["ArchivoPDF1"]?.[0];
    if (ArchivoPDF1) {
      const buffer = ArchivoPDF1.buffer;
      const extension = ArchivoPDF1.originalname.split(".").pop();
      nuevosDatos.ArchivoPDF1 = await guardarArchivo(buffer, extension);
    }

    const ArchivoPDF2 = req?.files?.["ArchivoPDF2"]?.[0];
    if (ArchivoPDF2) {
      const buffer = ArchivoPDF2.buffer;
      const extension = ArchivoPDF2.originalname.split(".").pop();
      nuevosDatos.ArchivoPDF2 = await guardarArchivo(buffer, extension);
    }

    const ArchivoPDF3 = req?.files?.["ArchivoPDF3"]?.[0];
    if (ArchivoPDF3) {
      const buffer = ArchivoPDF3.buffer;
      const extension = ArchivoPDF3.originalname.split(".").pop();
      nuevosDatos.ArchivoPDF3 = await guardarArchivo(buffer, extension);
    }

    const ArchivoPDF4 = req?.files?.["ArchivoPDF4"]?.[0];
    if (ArchivoPDF4) {
      const buffer = ArchivoPDF4.buffer;
      const extension = ArchivoPDF4.originalname.split(".").pop();
      nuevosDatos.ArchivoPDF4 = await guardarArchivo(buffer, extension);
    }

    const ImagenPerfil = req?.files?.["ImagenPerfil"]?.[0];
    if (ArchivoPDF4) {
      const buffer = ImagenPerfil.buffer;
      const extension = ImagenPerfil.originalname.split(".").pop();
      nuevosDatos.ImagenPerfil = await guardarArchivo(buffer, extension);
    }

    Object.assign(usuario, nuevosDatos);


    await usuario.save();

    res.status(201).json({ mensaje: "Perfil actualizado exitosamente" });
  } catch (error) {
    console.error("Error al guardar el perfil:", error);
    res.status(500).json({ mensaje: "Error al guardar el perfil" });
  }
};

module.exports = GuardarPerfil;