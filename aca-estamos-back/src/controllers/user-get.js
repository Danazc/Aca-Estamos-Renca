const User = require("../models/user-model");

const listaUsuarios = async (req, res) => {
    try {
        const respuesta = await User.find({});

        res.status(200).json({
            code: 200,
            msg: "Lista de usuarios obtenida con éxito",
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

module.exports = listaUsuarios;
