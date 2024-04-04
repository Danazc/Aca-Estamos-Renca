const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
  Nombre: String,
  Apellido: String,
  Telefono: String,
  Rut: String,
  FechaNacimiento: Date,
  Email: String,
  Password: String,
  EstadoCivil: String,
  Rubro: String,
  LinkedIn: String,
  Disponibilidad: String,
  ArchivoPDF1: String,
  ArchivoPDF2: String,
  ArchivoPDF3: String,
  ArchivoPDF4: String,
  ImagenPerfil: String,
  NivelEducacional: String,
  InstitucionEducativa: String,
  Titulo: String,
  FechaInicio: Date,
  FechaFinalizacion: Date,
  Descripcion: String,
  Cargo: String,
  TipoEmpleo: String,
  NombredelaEmp: String,
  FechaExpInicio: Date,
  FechaExpFin: Date,
  CheckCargo: Boolean,
  DescripcionCargo: String,
  NombreCV: String,
  TitularCV: String,
  AcercadeCV: String,
  ConocimientosCV: {
    type: [String], 
  },
  CursosCV: {
    type: [String], 
  },
  aceptado: {
    type: Boolean,
    default: false
  }
}, { 
    timestamps: true,
    versionKey: false
});

const User = mongoose.model('User', userSchema);
module.exports = User;
