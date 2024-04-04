const User = require("../models/user-model");

const listaUsuariosAceptados = async (req, res) => {
    try {
        const usuarios = await User.find({ aceptado: true }, 
            'Nombre Apellido Telefono Rut FechaNacimiento Email Password EstadoCivil Rubro LinkedIn Disponibilidad ArchivoPDF1 ArchivoPDF ArchivoPDF3 ArchivoPDF4 ImagenPerfil NivelEducacional InstitucionEducativa Titulo FechaInicio FechaFinalizacion Descripcion Cargo TipoEmpleo NombredelaEmp FechaExpInicio FechaExpFin CheckCargo DescripcionCargo NombreCV TitularCV AcercadeCV ConocimientosCV CursosCV');

        console.log(usuarios);

        res.status(200).json({
            code: 200,
            msg: "Lista de usuarios aceptados obtenida con éxito",
            data: usuarios
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            code: 500,
            msg: "Error interno del servidor",
            data: null
        });
    }
};

module.exports = listaUsuariosAceptados;
