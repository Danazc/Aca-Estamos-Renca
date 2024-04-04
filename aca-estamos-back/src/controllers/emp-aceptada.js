const Empresa = require("../models/user-models-empresa")


const listaEmpresas = async (req, res) => {
    try {
        const respuesta = await Empresa.find({aceptado: true}, 'NombreEmpresa Telefono Rubro: RutEmpresa: Url: Email: Password: Acercade: Trayectoria: Numeroempleados: CorreoContacto: Ubicacion: LinkedIn: ImagenEmpresa');

        res.status(200).json({
            code: 200,
            msg: "Lista de empresas obtenida con éxito",
            data: respuesta
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

module.exports = listaEmpresas;