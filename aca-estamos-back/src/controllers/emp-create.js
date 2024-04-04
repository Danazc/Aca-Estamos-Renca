const Empresa = require("../models/user-models-empresa")
const bcrypt = require('bcrypt');

const CrearEmpresa = async (req, res) => {
    const { NombreEmpresa, Telefono, RutEmpresa, Rubro, Url, Email, Password } = req.body;

    const salt = bcrypt.genSaltSync();
    const passwordEncripted = bcrypt.hashSync(Password, salt)

    const empresaExisting = await Empresa.findOne({ RutEmpresa: RutEmpresa });
    if (empresaExisting) {
        return res.status(400).json({
            code: 400,
            msg: "El usuario ya existe",
            data: null
        });
    };

    try {
        const NuevaEmpresa = await Empresa.create({
            NombreEmpresa: NombreEmpresa,
            Telefono: Telefono,
            RutEmpresa: RutEmpresa,
            Rubro: Rubro,
            Url: Url,
            Email: Email,
            Password: passwordEncripted
        });
      res.status(200).json({
            success: true,
            message: "EMPRESA CREADA CON ÉXITO ",
            data: NuevaEmpresa
          });
    } catch (error) {
        console.error(error);

        if(error.code === 11000) {
            return res.status(400).json({
                code:400,
                msg: "El correo electrónico ya está en uso",
                data: null
            });
        }
        res.status(500).json({
            code: 500,
            msg:"Error interno del servidor",
            data: null
        });
    }


};


module.exports = CrearEmpresa;