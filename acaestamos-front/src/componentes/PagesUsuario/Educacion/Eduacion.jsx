import { useState, useEffect } from 'react';
import './Educacion.css';
import client from '../../../Utils/axios.Client';
import getUserId from '../../../Utils/getUserId';
import { useNavigate, Link } from 'react-router-dom';
import { useAlert } from '../../../Efectos/useAlert'

const Educacion = () => {

  //Definicion de constantes
  const [perfil, setPerfil] = useState(null);
  const [NivelEducacional, setNivelEducacional] = useState('');
  const [InstitucionEducativa, setInstitucionEducativa] = useState('');
  const [FechaInicio, setFechaInicio] = useState('');
  const [FechaFinalizacion, setFechaFinalizacion] = useState('');
  const [Titulo, setTitulo] = useState('');
  const [Descripcion, setDescripcion] = useState('');

  //Usa el hook useAlert para obtener el estado y la API de alerta
  const [alertState, alertApi] = useAlert("alertsElement");

  //Definicion de funciones
  const showAlert = () => {

    let hasError = true;

    if (!NivelEducacional || !InstitucionEducativa || !Titulo || !FechaInicio || !FechaFinalizacion || !Descripcion) {
      alertApi.show("¡No llenaste correctamente los datos solicitados!", 'error');
      hasError = false;

      return hasError;
    }
  }

  useEffect(() => {
    const obtenerPerfil = async () => {
      try {
        const response = await client.get(`/Obtener-Perfil/${getUserId()}`)
        setPerfil(response?.data);

        if (response?.data?.NivelEducacional) setNivelEducacional(response?.data?.NivelEducacional);
        if (response?.data?.InstitucionEducativa) setInstitucionEducativa(response?.data?.InstitucionEducativa);
        if (response?.data?.FechaInicio) setFechaInicio(response?.data?.FechaInicio);
        if (response?.data?.FechaFinalizacion) setFechaFinalizacion(response?.data?.FechaFinalizacion);
        if (response?.data?.Titulo) setTitulo(response?.data?.Titulo);
        if (response?.data?.Descripcion) setDescripcion(response?.data?.Descripcion);

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

    obtenerPerfil();
  }, []);

  const navigate = useNavigate();

  const GuardarEducacion = async (e) => {
    e.preventDefault();
    try {
      const userId = getUserId();
      const response = await client.post(`http://localhost:3000/Guardar-Educacion/${userId}`, {
        NivelEducacional, InstitucionEducativa, FechaInicio, FechaFinalizacion, Titulo, Descripcion
      });
      console.log(response.data);
      navigate('/Actualizar-Cv')
    } catch (error) {
      console.error('Error al guardar el perfil:', error);
    }
  };


  return (
    <>
      <div id="Educacion" style={{ margin: '50px auto', maxWidth: '800px' }}>
        <div
          className="border p-4"
          style={{
            fontFamily: 'Poppins-Regular',
            backgroundColor: 'rgba(4, 157, 217, 0.15)',
            borderRadius: '10px',
            borderStyle: 'solid',
            borderColor: 'black',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <h2 style={{ fontFamily: 'Heavitas' }} className="text-center">
            Educación
          </h2>
          <div style={{ width: '80%', margin: 'auto' }} className="form-Educacion">
            <form onSubmit={GuardarEducacion}>
              <div className="mb-3">
                <label htmlFor="nivelEducacional" className="form-label">
                  Nivel educacional:
                </label>
                <input type="text" className="form-control" placeholder="Ej. Universitario completo" defaultValue={perfil && perfil.NivelEducacional} onChange={(e) => setNivelEducacional(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="institucionEducativa" className="form-label">
                  Institución Educativa:
                </label>
                <input type="text" className="form-control" placeholder="Ej. Universidad Austral" defaultValue={perfil && perfil.InstitucionEducativa} onChange={(e) => setInstitucionEducativa(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="titulo" className="form-label">
                  Título:
                </label>
                <input type="text" className="form-control" placeholder="Ej. MQQ" defaultValue={perfil && perfil.Titulo} onChange={(e) => setTitulo(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="fechaInicio" className="form-label">
                  Fecha Inicio:
                </label>
                <input type="date" className="form-control" placeholder="DD/MM/AAAA" defaultValue={perfil && perfil.FechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="fechaFin" className="form-label">
                  Fecha finalización:
                </label>
                <input type="date" className="form-control" placeholder="DD/MM/AAAA" defaultValue={perfil && perfil.FechaFinalizacion} onChange={(e) => setFechaFinalizacion(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcionCargo" className="form-label">
                  Descripción:
                </label>
                <input type="text" className="form-control" placeholder="Agrega una descripción de la carrera" defaultValue={perfil && perfil.Descripcion} onChange={(e) => setDescripcion(e.target.value)} />
              </div>
              {/* Muestra la alerta si está visible */}
              {alertState.visible && (
                <div id="alertsElement" className={`alert ${alertState.type}`}>
                  {alertState.message}
                </div>
              )}
              <div className="d-flex justify-content-center">
                <Link to="/Actualizar-Cv" type="button" className="btn btn-secondary btn-lg me-2">
                  Cancelar
                </Link>
                <button type="submit" className="btn btn-primary btn-lg" onClick={showAlert}>
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educacion;
