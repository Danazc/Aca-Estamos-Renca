const Empresa = require("../models/user-models-empresa");

const aceptarEmpresa = async (req, res) => {
    const { id } = req.params;
    try {
        const empresa = await Empresa.findByIdAndUpdate(id, { aceptado: true }, { new: true });
        
        if (!empresa) {
            return res.status(404).json({
                code: 404,
                msg: "Empresa no encontrada",
                data: null
            });
        }

        res.status(200).json({
            code: 200,
            msg: "Empresa aceptada correctamente",
            data: empresa
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

module.exports = aceptarEmpresa;
