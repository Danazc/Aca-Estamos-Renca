const express = require('express');
const router = express.Router();
const listaUsuarios = require('../controllers/user-get');
const CrearUsuario = require('../controllers/user-create');
const DeleteUser = require('../controllers/user-delete');
const ActualizarUser = require('../controllers/user-update');
const IdUsuario = require('../controllers/user-get-id');
const LoginUser = require('../controllers/user-login');
const CrearEmpresa = require('../controllers/emp-create');
const LoginEmpresa = require('../controllers/emp-login');
const GuardarPerfil = require('../controllers/user-datosperosnales-guardar');
const ObtenerPerfil = require('../controllers/user-perfil-obtener');
const multer = require('multer');
const isAuth = require('../middlewares/validar-jwt');
const GuardarExperiencia = require('../controllers/user-experiencia-guardar');
const GuardarEducacion = require('../controllers/user-educacion-guardar');
const GuardarPerfilcv = require('../controllers/user-perfilcv-guardar');
const GuardarPerfilE = require('../controllers/emp-perfil-guardar');
const ObtenerPerfilE = require('../controllers/emp-perfil-obtener');

// Controllers Administrador
const AceptarUsuario = require('../controllers/aceptar-usuario');
const ListaUsuariosAceptados = require('../controllers/admin-list-user');

//Router de lista empresas 
const listaEmpresas = require('../controllers/emp-get');
const DeleteEmp = require('../controllers/emp-delete');
const aceptarEmpresa = require('../controllers/aceptar-empresa');
const EmpresaAceptada = require('../controllers/emp-aceptada')

//COSAS PARA ADMINISTRADOR 
const RegAdm = require('../controllers/adm-create');
const LogAdm = require('../controllers/adm-login');
const Admins = require('../controllers/admin-get');

// Multer para Usuarios
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


//Router   USUARIOS //
router.get('/Usuario', listaUsuarios);
router.get('/Usuario/:id', IdUsuario);
router.post('/Crear-usuario', CrearUsuario);
router.post('/Login-usuario', LoginUser)
router.put('/Actualizar-Usuario/:id', ActualizarUser);
router.delete('/Borrar-Usuario/:id', DeleteUser);
router.post('/Guardar-Datos-Personales/:id', upload.fields([
    { name: 'ArchivoPDF1', maxCount: 1 },
    { name: 'ArchivoPDF2', maxCount: 1 },
    { name: 'ArchivoPDF3', maxCount: 1 },
    { name: 'ArchivoPDF4', maxCount: 1 },
    { name: 'ImagenPerfil', maxCount: 1 }]), GuardarPerfil);
router.post('/Guardar-Experiencia/:id', GuardarExperiencia);
router.post('/Guardar-Educacion/:id', GuardarEducacion);
router.post('/Guardar-PerfilCV/:id', GuardarPerfilcv);
router.get('/Obtener-Perfil/:id', ObtenerPerfil);


//Router   ADMINISTRADOR //
router.post('/Registro-Admin', RegAdm);
router.post('/Login-Admin', LogAdm);
router.get('/Administradores', Admins )
router.put('/Usuarios-Aceptados/:id', AceptarUsuario);
router.get('/Usuarios-Aceptados/', ListaUsuariosAceptados);

//Router   EMPRESAS //

router.post('/Crear-Empresa', CrearEmpresa);
router.post('/Login-empresa', LoginEmpresa);
router.get('/Obtener-Perfil-Empresa/:id', ObtenerPerfilE);
router.post('/Guardar-Perfil-Empresa/:id', upload.fields([
    { name: 'ImagenEmpresa', maxCount: 1 }]), GuardarPerfilE );
router.get('/Empresas', listaEmpresas); 
router.put('/Empresa-Aceptada/:id', aceptarEmpresa);
router.delete('/Borrar-Empresa/:id', DeleteEmp);
router.get('/Empresa-Aceptada', EmpresaAceptada)

// Router ruta protegida
router.get("/ruta-protegida", isAuth, (req, res) => {
    res.send("Ruta protegida");
}
);

//rutar enviar correo 

const nodemailer = require('../controllers/nodemailer');
router.post('/Enviar-Correo/:Email', nodemailer);


module.exports = router;


