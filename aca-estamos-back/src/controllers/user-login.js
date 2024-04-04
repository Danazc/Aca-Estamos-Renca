const User = require("../models/user-model");
const bcrypt = require('bcrypt');
const generarJWT = require("../services/generate-jwt");

const LoginUser = async (req, res) => {
    const { Email, Password } = req.body;

    if (!Email || !Password) {
        return res.status(400).json({
            code: 400,
            msg: "Email y Password son requeridos"
        });
    }

    try {
        const user = await User.findOne({ Email: Email });

        if (!user) {
            return res.status(400).json({
                code: 400,
                msg: "Usuario no registrado en nuestro sistema"
            });
        }

        // Verificar la contraseña encriptada
        const passwordVerified = bcrypt.compareSync(Password, user.Password)
        // const PasswordCorrect = (Password === user.Password);

        if (!passwordVerified) {
            return res.status(400).json({
                code: 400,
                msg: "Contraseña incorrecta"
            });
        }
        
        // generar un await para que responda
        const token = await generarJWT(user._id);

        res.status(200).json({
            code: 200,
            msg: "Usuario logueado con éxito",
            data: {
                name: user.name,
                id: user._id
            },
            token: token
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            code: 500,
            msg: "Error interno del servidor"
        });
    }
};

module.exports = LoginUser;
