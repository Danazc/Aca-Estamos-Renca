const User = require("../models/user-model");

const ActualizarUser = async (req, res) => {
    const body = req.body;
    const id = req.params.id;

    try {
        const respuesta = await User.findOneAndUpdate({ _id: id }, body, { new: true });

        if (!respuesta) {
            return res.status(404).json({
                code: 404,
                msg: "Usuario no encontrado",
                data: null
            });
        }

        res.status(200).json({
            code: 200,
            msg: "Usuario actualizado con éxito",
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

module.exports = ActualizarUser;