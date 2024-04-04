const Admin = require("../models/user-model-Admin"); // Asegúrate de importar el modelo correcto
const bcrypt = require('bcrypt');

const CrearAdm = async (req, res) => {
    const { Email, Password } = req.body;

    const salt = bcrypt.genSaltSync();
    const passwordEncripted = bcrypt.hashSync(Password, salt);

    const admExisting = await Admin.findOne({ Email: Email });
    if (admExisting) {
        return res.status(400).json({
            code: 400,
            msg: "El administrador ya existe",
            data: null
        });
    }

    try {
        const NuevoAdm = await Admin.create({
            Email: Email,
            Password: passwordEncripted
        });
        res.status(200).json({
            code: 200,
            msg: "Administrador creado con éxito",
            data: NuevoAdm
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

module.exports = CrearAdm;
