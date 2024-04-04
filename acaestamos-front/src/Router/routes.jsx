import { createBrowserRouter } from 'react-router-dom';
import ErrorComponent from '../Views/Cursos';
import Home from "../Views/Home";
import Login from "../Views/Login";
import LoginFormulario from '../Views/LoginFormulario';
import PerfilUsers from '../Views/PerfilUsers';
import OlvidoContra from '../Views/OlvidoContra';
import Register from '../Views/Register';
import RegisterForm from '../Views/RegisterForm';
import ActualizarDatosPerfil from '../Views/ActualizarDatosPerfil';
import CrearCV from '../Views/CrearCV';
import App from '../App';
import EditEducacion from '../Views/EditEducacion';
import EditExperiencia from '../Views/EditExperiencia';
import EditPerfil from '../Views/EditPerfil';
import PerfilAdmin from '../Views/PerfilAdmin';
import PerfilEmpresas from '../Views/PerfilEmpresas'
import AdminVisualizacion from '../Views/AdminVisualizacion';
import AdminSolicitudescv from '../Views/AdminSolicitudescv';
import RegisterFormEmpresa from '../Views/RegisterFormEmpresa';
import Nosotrosview from '../Views/Nosotrosview';
import Contactoview from '../Views/Contactoview';
import LoginFormularioE from '../Views/LoginFormularioE';
import Editinfoempresas from '../Views/Editinfoempresas';
import EditPerfilE from '../Views/EditPerfilE';
import Empresasinfoview from '../Views/Empresasinfoview';
import AdminVisualizacionEmpresas from '../Views/AdminVisualizacionEmpresas';
import AdminSolicitudesEmpresas from '../Views/AdminSolicitudesEmpresas';
import AdminSolicitudesUsuarios from '../Views/AdminSolicitudesUsuarios';
import MostrarCV from '../Views/MostrarCV';
import BuscadorUsuarioByE from '../Views/BuscadorUsuarioByE';
//ADMIN COSAS
import RegFormularioAdmin from '../Views/RegisterFormAdmin';
import LogFormularioAdmin from '../Views/LoginFormularioAdm';
import AdminSolicitudesInfoEmpresas from '../Views/AdminSolicitudesInfoEmpresas';



const router = createBrowserRouter([
  //Routers de landing
  { path: '/', element: <Home /> },
  { path: '/Cursos', element: <ErrorComponent statusCode={404} /> },
  { path: '/Nosotros', element: <Nosotrosview /> },
  { path: '/Contacto', element: <Contactoview /> },
  { path: '/Login', element: <Login /> },
  { path: '/Pruebas', element: <App /> },
  //Routers para usuarios
  { path: '/Login-form', element: <LoginFormulario /> },
  { path: '/Perfil-Usuario/:id?', element: <PerfilUsers /> },
  { path: '/OlvidoContra', element: <OlvidoContra/>},
  { path: '/Registro', element: <Register /> },
  { path: '/Registro-form', element: <RegisterForm /> },
  { path: '/Actualizar-Datos-Perfil', element: <ActualizarDatosPerfil /> },
  { path: '/Actualizar-Cv', element: <CrearCV /> },
  { path: '/Actualizar-Educacion', element: <EditEducacion /> },
  { path: '/Actualizar-Experiencia', element: <EditExperiencia /> },
  { path: '/Actualizar-Perfil', element: <EditPerfil /> },
  { path: '/Mostrar-CV/:id?', element: <MostrarCV /> },
  //Router empresas

  { path: '/Registro-form-Empresa', element: <RegisterFormEmpresa /> },
  { path: '/Login-Empresas', element: <LoginFormularioE /> },
  { path: '/Perfil-Empresa/:id?', element: <PerfilEmpresas /> },
  { path: '/Edit-Info-Empresa', element: <Editinfoempresas /> },
  { path: '/Edit-Perfil-Empresa', element: <EditPerfilE /> },
  { path: '/Info-Empresa/:id?', element: <Empresasinfoview /> },
  { path: '/Buscar-Talentos', element: <BuscadorUsuarioByE /> },
  //Acá empieza enrutadoadmin
  { path: '/Perfil-Admin', element: <PerfilAdmin /> },
  { path: '/Visualizacion-Usuario-Admin', element: <AdminVisualizacion /> },
  { path: '/Solicitudes-CV-Admin', element: <AdminSolicitudescv /> },
  { path: '/Solicitudes-InfoEmpresas-Admin', element: < AdminSolicitudesInfoEmpresas/> },
  { path: '/Solicitudes-Usuarios-Admin', element: <AdminSolicitudesUsuarios /> },
  { path: '/Solicitudes-Empresas-Admin', element: <AdminSolicitudesEmpresas />},
  { path: '/Visualizacion-Empresas-Admin', element: <AdminVisualizacionEmpresas /> },
  { path: '/Registro-Admin', element: <RegFormularioAdmin /> },
  { path: '/Login-Admin', element: <LogFormularioAdmin /> },

]);

export default router;
