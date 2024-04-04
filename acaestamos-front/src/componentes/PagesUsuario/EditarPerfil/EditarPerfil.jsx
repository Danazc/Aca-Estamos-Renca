import { useState, useEffect } from 'react';
import './EditarPerfil.css'
import { useNavigate, Link } from 'react-router-dom';
import client from '../../../Utils/axios.Client';
import getUserId from '../../../Utils/getUserId';
import { useAlert } from '../../../Efectos/useAlert';

const EditarPerfil = () => {

  //Definicion de constantes
  const [perfil, setPerfil] = useState(null);
  const [NombreCV, setNombreCV] = useState('');
  const [TitularCV, setTitularCV] = useState('');
  const [AcercadeCV, setAcercadeCV] = useState('');
  const [ConocimientosCV, setConocimientosCV] = useState('');
  const [CursosCV, setCursosCV] = useState('');

  //Usa el hook useAlert para obtener el estado y la API de alerta
  const [alertState, alertApi] = useAlert("alertsElement");

  //Definicion de funciones
  const showAlert = () => {

    let hasError = true;

    if (!NombreCV || !TitularCV || !AcercadeCV || !ConocimientosCV || !CursosCV) {
      alertApi.show("¡No llenaste correctamente los datos solicitados!", 'error');
      hasError = false;
    }
    return hasError;
  }

  useEffect(() => {
    const obtenerPerfil = async () => {
      try {
        const response = await client.get(`/Obtener-Perfil/${getUserId()}`)
        setPerfil(response?.data);

        if (response?.data?.NombreCV) setNombreCV(response?.data?.NombreCV);
        if (response?.data?.TitularCV) setTitularCV(response?.data?.TitularCV);
        if (response?.data?.AcercadeCV) setAcercadeCV(response?.data?.AcercadeCV);
        if (response?.data?.ConocimientosCV) setConocimientosCV(response?.data?.ConocimientosCV);
        if (response?.data?.CursosCV) setCursosCV(response?.data?.CursosCV);

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

  const GuardarPerfil = async (e) => {
    e.preventDefault();

    if (showAlert() === true) {
      try {
        const userId = getUserId();
        const response = await client.post(`http://localhost:3000/Guardar-PerfilCV/${userId}`, {
          NombreCV,
          TitularCV,
          AcercadeCV,
          ConocimientosCV,
          CursosCV
        });
        console.log(response.data);
        navigate('/Actualizar-Cv')
      } catch (error) {
        console.error('Error al guardar el perfil:', error);
      }
    }
  };

  return (
    <>
      <div id="Editarperfil" style={{ margin: '50px auto', maxWidth: '800px' }}>
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
            Perfil
          </h2>
          <div className="form-Perfil" style={{ width: '80%', margin: 'auto' }}>
            <form onSubmit={GuardarPerfil}>
              <div className="mb-3">
                <label htmlFor="cargo" className="form-label">
                  NombreCV a mostrar:
                </label>
                <input type="text" className="form-control" placeholder="Ej. NombreCV" defaultValue={perfil && perfil.NombreCV} onChange={(e) => setNombreCV(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="tipoEmpleo" className="form-label">
                  TitularCV:
                </label>
                <input type="text" className="form-control" placeholder="Desarrollador Web / Diseñador" defaultValue={perfil && perfil.TitularCV} onChange={(e) => setTitularCV(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="NombreCVEmpresa" className="form-label">
                  Acerca de:
                </label>
                <input type="text" className="form-control" defaultValue={perfil && perfil.AcercadeCV} onChange={(e) => setAcercadeCV(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcionCargo" className="form-label">
                  Conocimientos Técnicos:
                </label>
                <input type="text" className="form-control" placeholder="Ej. Excel Medio" defaultValue={perfil && perfil.ConocimientosCV} onChange={(e) => setConocimientosCV(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcionCargo" className="form-label">
                  Cursos Realizados:
                </label>
                <input type="text" className="form-control" placeholder="Ej. Inglés II" defaultValue={perfil && perfil.CursosCV} onChange={(e) => setCursosCV(e.target.value)} />
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

export default EditarPerfil;
