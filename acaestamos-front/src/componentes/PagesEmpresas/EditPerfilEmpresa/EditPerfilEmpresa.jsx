import './EditPerfilEmpresa.css';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import client from '../../../Utils/axios.Client';
import getUserId from '../../../Utils/getUserId';
import { useAlert } from '../../../Efectos/useAlert'

const EditPerfilEmpresa = () => {

  //Definicion de constantes
  const [PerfilE, setPerfilE] = useState(null);
  const [NombreEmpresa, setNombreEmpresa] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [RutEmpresa, setRutEmpresa] = useState('');
  const [Rubro, setRubro] = useState('');
  const [LinkedIn, setLinkedIn] = useState('');
  const [CorreoContacto, setCorreoContacto] = useState('');
  const [Acercade, setAcercade] = useState('');
  const [Trayectoria, setTrayectoria] = useState('');
  const [Numeroempleados, setNumeroempleados] = useState('');
  const [Ubicacion, setUbicacion] = useState('');
  const [ImagenEmpresa, setImagenEmpresa] = useState('null');



  const navigate = useNavigate();

  //Usa el hook useAlert para obtener el estado y la API de alerta
  const [alertState, alertApi] = useAlert("alertsElement");

  //Definicion de funciones
  const showAlert = () => {

    let hasError = true;

    if (!NombreEmpresa || !RutEmpresa || !Telefono || !Rubro || !CorreoContacto || !Ubicacion || !LinkedIn || !Acercade || !Trayectoria || !Numeroempleados) {
      alertApi.show("¡No llenaste correctamente los datos solicitados!", 'error');
      hasError = false;
    }
    // if (CorreoContacto !== ReCorreoContacto) {
    //   alertApi.show("¡Los datos de Correo y Repetir Correo, no son iguales!", 'error');
    //   hasError = false
    // }
    // if (Password !== Repassword) {
    //   alertApi.show("¡Los datos de Contraseña y Repetir Contraseña, no son iguales!", 'error');
    //   hasError = false
    // }
    return hasError;
  };

  const formatRut = (rut) => {
    // Formatear rut
    rut = rut.replace(/[^\dkK]/g, '');
    rut = rut.replace(/^0+/, '');

    if (rut.length > 1) {
      rut = rut.replace(/^(\d{1,2})(\d{3})(\d{3})([\dkK]{1})$/, '$1.$2.$3-$4');
    }

    return rut;
  };

  useEffect(() => {
    const obtenerPerfilE = async () => {
      try {

        const response = await client.get(`/Obtener-Perfil-Empresa/${getUserId()}`)
        setPerfilE(response?.data);

        if (response?.data?.NombreEmpresa) setNombreEmpresa(response?.data?.NombreEmpresa);
        if (response?.data?.Telefono) setTelefono(response?.data?.Telefono);
        if (response?.data?.RutEmpresa) setRutEmpresa(response?.data?.RutEmpresa);
        if (response?.data?.Rubro) setRubro(response?.data?.Rubro);
        if (response?.data?.LinkedIn) setLinkedIn(response?.data?.LinkedIn);
        if (response?.data?.CorreoContacto) setCorreoContacto(response?.data?.CorreoContacto);
        if (response?.data?.Acercade) setAcercade(response?.data?.Acercade);
        if (response?.data?.Trayectoria) setTrayectoria(response?.data?.Trayectoria);
        if (response?.data?.Numeroempleados) setNumeroempleados(response?.data?.Numeroempleados);
        if (response?.data?.Ubicacion) setUbicacion(response?.data?.Ubicacion);
        if (response?.data?.ImagenEmpresa) setImagenEmpresa(response?.data?.ImagenEmpresa);

      } catch (error) {
        if (error.response) {
          console.error('Error en la respuesta:', error.response.data);
        } else if (error.request) {
          console.error('Error en la solicitud:', error.request);
        } else {
          console.error('Error general:', error.message);
        }
      }
    };

    obtenerPerfilE();
  }, []);

  const handleImagenEmpresaChange = (e) => {
    setImagenEmpresa(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const rutRegex = /^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]{1}$/;
    if (!rutRegex.test(RutEmpresa)) {
      alertApi.show('El Rut no cumple con el formato requerido', 'error');
      return;
    }
    // Se efectua la alerta de contenido vacio o incorrecto
    if (showAlert() === true) {
      try {
        const formData = new FormData();
        formData.append('NombreEmpresa', NombreEmpresa);
        formData.append('Telefono', Telefono);
        formData.append('RutEmpresa', RutEmpresa);
        formData.append('Rubro', Rubro);
        formData.append('LinkedIn', LinkedIn);
        formData.append('CorreoContacto', CorreoContacto);
        formData.append('Acercade', Acercade);
        formData.append('Trayectoria', Trayectoria);
        formData.append('Numeroempleados', Numeroempleados);
        formData.append('Ubicacion', Ubicacion);
        formData.append('ImagenEmpresa', ImagenEmpresa);


        const response = await client.post(`http://localhost:3000/Guardar-Perfil-Empresa/${getUserId()}`, formData);
        console.log(response.data);
        navigate('/Perfil-Empresa');
      } catch (error) {
        console.error('Error al guardar el perfil:', error);

        if (error.response) {
          console.error('Respuesta del servidor:', error.response.data);
        }

      }

    }
  };


  return (
    <>
      <div id="Editperfilempresa" style={{ margin: '50px auto', maxWidth: '800px' }}>
        <div className="border p-4" style={{ fontFamily: 'Poppins-Regular', margin: '50px auto 50px auto', backgroundColor: '#D9F2ED', borderRadius: '10px', borderStyle: 'solid', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
          <h2 style={{ fontFamily: 'Heavitas' }} className="text-center">Editar Perfil Empresa</h2>
          <div className="form-DatosEmpresa">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="nombre-empresa" className="form-label">Nombre Empresa:</label>
                    <input type="text" className="form-control" id="nombre-empresa" placeholder="Nombre" defaultValue={PerfilE && PerfilE.NombreEmpresa} onChange={(e) => setNombreEmpresa(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rut" className="form-label">Rut:</label>
                    <input type="text" className="form-control" placeholder="11.111.111-1" defaultValue={PerfilE && PerfilE.RutEmpresa} onChange={(e) => setRutEmpresa(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="RubroOpciones" className="form-label">
                      Rubro o Giro:
                    </label>
                    <select className="form-select" id="disponibilidadOpciones" value={Rubro} onChange={(e) => setRubro(e.target.value)}>
                      <option value="Administración">Administración</option>
                      <option value="Agropecuaria">Agropecuaria</option>
                      <option value="Alimenticia">Alimenticia</option>
                      <option value="Arquitectura">Arquitectura</option>
                      <option value="Artesanal">Artesanal</option>
                      <option value="Automotriz">Automotriz</option>
                      <option value="Banca/Financiera">Banca/Financiera</option>
                      <option value="Bioteconología">Bioteconología</option>
                      <option value="Call-Center">Call-Center</option>
                      <option value="Comercio">Comercio</option>
                      <option value="Comercio exterior">Comercio exterior</option>
                      <option value="Comunicaciones">Comunicaciones</option>
                      <option value="Construcción">Construcción</option>
                      <option value="Consultoría">Consultoría</option>
                      <option value="Correo">Correo</option>
                      <option value="Defensa">Defensa</option>
                      <option value="Diseño">Diseño</option>
                      <option value="Editorial">Editorial</option>
                      <option value="Educación">Educación</option>
                      <option value="Energía">Energía</option>
                      <option value="Entretenimiento">Entretenimiento</option>
                      <option value="Farmacéutica">Farmacéutica</option>
                      <option value="Ferroviaria">Ferroviaria</option>
                      <option value="Financiera">Financiera</option>
                      <option value="Gastronomía">Gastronomía</option>
                      <option value="Hotelería/Turismo">Hotelería/Turismo</option>
                      <option value="Imprenta">Imprenta</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Información e investigación">Información e investigación</option>
                      <option value="Informática">Informática</option>
                      <option value="Ingeniería">Ingeniería</option>
                      <option value="Inmobiliaria">Inmobiliaria</option>
                      <option value="Internet">Internet</option>
                      <option value="Laboratorio">Laboratorio</option>
                      <option value="Legal">Legal</option>
                      <option value="Logística/Transporte">Logística/Transporte</option>
                      <option value="Manufactura">Manufactura</option>
                      <option value="Medios">Medios</option>
                      <option value="Publicidad">Publicidad</option>
                      <option value="Recursos Humanos">Recursos Humanos</option>
                      <option value="Retail">Retail</option>
                      <option value="Salud">Salud</option>
                      <option value="Seguridad">Seguridad</option>
                      <option value="Seguros">Seguros</option>
                      <option value="Servicios">Servicios</option>
                      <option value="Tecnología">Tecnología</option>
                      <option value="Telecomunicaciones">Telecomunicaciones</option>
                      <option value="Textil">Textil</option>
                      <option value="Transporte">Transporte</option>
                      <option value="Turismo">Turismo</option>
                      <option value="Veterinaria">Veterinaria</option>
                      <option value="Otros">Otros</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="acerca-de" className="form-label">Quiénes somos:</label>
                    <input type="text" className="form-control" defaultValue={PerfilE && PerfilE.Acercade} onChange={(e) => setAcercade(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="trayectoria" className="form-label">Trayectoria:</label>
                    <input type="text" className="form-control" placeholder="Trayectoria de tu empresa" defaultValue={PerfilE && PerfilE.Trayectoria} onChange={(e) => setTrayectoria(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="cant-empleados" className="form-label">Cantidad de empleados:</label>
                    <input type="text" className="form-control" placeholder="Ejemplo: 200" defaultValue={PerfilE && PerfilE.Numeroempleados} onChange={(e) => setNumeroempleados(e.target.value)} />
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="correo" className="form-label">Correo de contacto:</label>
                    <input type="text" className="form-control" placeholder="correo@gmail.com" defaultValue={PerfilE && PerfilE.CorreoContacto} onChange={(e) => setCorreoContacto(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono:</label>
                    <input type="text" className="form-control" placeholder="(9)12345678" defaultValue={PerfilE && PerfilE.Telefono} onChange={(e) => setTelefono(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="ubicacion" className="form-label">Ubicación:</label>
                    <input type="text" className="form-control" placeholder="Ej. Av. marina 000, stgo" defaultValue={PerfilE && PerfilE.Ubicacion} onChange={(e) => setUbicacion(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="pagina-web" className="form-label">LinkedIn:</label>
                    <input type="text" className="form-control" placeholder="LinkedIn" defaultValue={PerfilE && PerfilE.LinkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Adjuntar imagen de empresa o logotipo:</label>
                    <input className="form-control" type="file" name="ImagenEmpresa" accept="image/png, image/jpeg" onChange={handleImagenEmpresaChange} />
                  </div>
                </div>
              </div>
              {/* Muestra la alerta si está visible */}
              {alertState.visible && (
                <div id="alertsElement" className={`alert ${alertState.type}`}>
                  {alertState.message}
                </div>
              )}
              <div className="d-flex justify-content-center">
                <Link to="/Perfil-Empresa" type="button" className="btn btn-secondary btn-lg me-2">Cancelar</Link>
                <button type="submit" className="btn btn-primary btn-lg" onClick={showAlert}>Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


export default EditPerfilEmpresa;
