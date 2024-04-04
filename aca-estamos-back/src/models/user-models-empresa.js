const mongoose = require('mongoose');

const { Schema } = mongoose;
const EmpresaSchema = new Schema({
    NombreEmpresa: String,
    Telefono: String,
    Rubro: String,
    RutEmpresa: String,
    Url: String,
    Email: String,
    Password: String,
    //Editar Perfil EMpresa//
    Acercade: String,
    Trayectoria: String,
    Numeroempleados: String,
    CorreoContacto: String,
    Ubicacion: String,
    LinkedIn: String,
    ImagenEmpresa: String,
    aceptado: {
        type: Boolean,
        default: false
    }
}, { 
    timestamps: true,
    versionKey: false
});

const Empresa = mongoose.model('Empresa', EmpresaSchema);
module.exports = Empresa;