import React, { useState } from 'react';

import './LoginAdmin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from '../../../Efectos/useAlert';

function LoginAdmin() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const navigate = useNavigate();

  // Usa el hook useAlert para obtener el estado y la API de alerta
  const [alertState, alertApi] = useAlert("alertsElement");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/Login-Admin', {
        Email,
        Password,
      });

      localStorage.setItem('accessToken', response?.data?.token);
      alertApi.show(JSON.stringify(response.data, null, 2));
      navigate('/Perfil-Admin'); // Puedes redirigir a la página de perfil de administrador
    } catch (error) {
      const errorMessage = getErrorMessage(error);
      alertApi.show(errorMessage, 'error');
    }
  };

  const getErrorMessage = (error) => {
    if (error.response && error.response.data && error.response.data.msg === "Contraseña incorrecta") {
      return 'Datos ingresados de forma incorrecta';
    } else if (error.message) {
      return error.response.data.msg;
    } else {
      return 'Error al enviar la solicitud.';
    }
  };

  return (
    <div className='container-fluid'>
      <main className="d-flex justify-content-center ">
        <div className="row" id="login-admin " style={{ margin: '50px auto', maxWidth: '800px' }}>
          <div className="col align-self-center">
            <div className="border p-4"
              style={{
                margin: '50px auto',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                borderStyle: 'solid',
                borderColor: 'black',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
              }}>
              <h2 className="text-center">Inicio de sesión de Administrador</h2>
              <div className="from-ingreso">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="correoInicioSesion" className="form-label">Ingrese email</label>
                    <input type="email" className="form-control" id="correoInicioSesion"
                      aria-describedby="emailHelp" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">Ingrese un Email Registrado</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="contraseñaInicioSesion" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="contraseñaInicioSesion" value={Password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Guardar contraseña</label>
                  </div>
                  {/* Muestra la alerta si está visible */}
                  {alertState.visible && (
                    <div id="alertsElement" className={`alert ${alertState.type}`}>
                      {alertState.message}
                    </div>
                  )}
                  <div className="text-center">
                    <button type='submit' className="btn btn-primary btn-lg" id="BotonInicioSesion">Ingresar</button> <br />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginAdmin;
