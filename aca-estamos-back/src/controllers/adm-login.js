const Admin = require("../models/user-model-Admin");
const bcrypt = require('bcrypt');
const generarJWT = require("../services/generate-jwt");

const LoginAdmin = async (req, res) => {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).json({
            code: 400,
            msg: "Email y Password son requeridos"
        });
    }

    try {
        const admin = await Admin.findOne({ Email: Email });

        if (!admin) {
            return res.status(400).json({
                code: 400,
                msg: "Administrador no registrado en nuestro sistema"
            });
        }

        const passwordVerified = bcrypt.compareSync(Password, admin.Password);

        if (!passwordVerified) {
            return res.status(400).json({
                code: 400,
                msg: "Contraseña incorrecta"
            });
        }

        const token = await generarJWT(admin._id);

        res.status(200).json({
            code: 200,
            msg: "Administrador logueado con éxito",
            data: {
                adminId: admin._id,
                // Otros datos específicos del administrador si es necesario
            },
            token: token
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            code: 500,
            msg: "Error interno del servidor"
        });
    }
};

module.exports = LoginAdmin;
