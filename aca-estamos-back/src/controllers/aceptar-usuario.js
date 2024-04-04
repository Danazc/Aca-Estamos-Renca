const User = require("../models/user-model");

const aceptarUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await User.findByIdAndUpdate(id, { aceptado: true }, { new: true });
        
        if (!usuario) {
            return res.status(404).json({
                code: 404,
                msg: "Usuario no encontrado",
                data: null
            });
        }

        res.status(200).json({
            code: 200,
            msg: "Usuario aceptado correctamente",
            data: usuario
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

module.exports = aceptarUsuario;
