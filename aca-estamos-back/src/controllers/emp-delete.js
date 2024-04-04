const Empresa = require("../models/user-models-empresa");

const DeleteEmp = async (req, res) => {
    const id = req.params.id;

    try {
        const respuesta = await Empresa.deleteOne({ _id: id });

        if (respuesta.n === 0) {
            return res.status(404).json({
                code: 404,
                msg: "Empresa no encontrada",
                data: null
            });
        }

        res.status(200).json({
            code: 200,
            msg: "Empresa borrada con éxito",
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
module.exports = DeleteEmp;