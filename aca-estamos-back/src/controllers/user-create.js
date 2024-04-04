const User = require("../models/user-model");
const bcrypt = require('bcrypt');

const CrearUsuario = async (req, res) => {
    const { Nombre, Apellido, Telefono, Rut, FechaNacimiento, Email, Password } = req.body;

    // encriptar la password
    const salt = bcrypt.genSaltSync();
    const passwordEncripted = bcrypt.hashSync(Password, salt)

    const userExisting = await User.findOne({ Rut: Rut });
    if (userExisting) {
        return res.status(400).json({
            code: 400,
            msg: "El usuario ya existe",
            data: null
        });
    };

    try {
        const nuevoUsuario = await User.create({
            Nombre: Nombre,
            Apellido: Apellido,
            Telefono: Telefono,
            Rut: Rut,
            FechaNacimiento: FechaNacimiento,
            Email: Email,
            Password: passwordEncripted
        });

        res.status(200).json({
            success: true,
            message: "USUARIO CREADO CON ÉXITO",
            data: nuevoUsuario
          });
    } catch (error) {
        console.error(error);

        if (error.code === 11000) {
            return res.status(400).json({
                code: 400,
                msg: "El correo electrónico ya está en uso",
                data: null
            });
        }
        res.status(500).json({
            code: 500,
            msg: "Error interno del servidor",
            data: null
        });
    }
};

module.exports = CrearUsuario;
