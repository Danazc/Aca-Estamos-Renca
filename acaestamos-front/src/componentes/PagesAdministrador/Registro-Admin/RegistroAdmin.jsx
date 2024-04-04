import React, { useState } from 'react';
import './RegistroAdmin.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from '../../../Efectos/useAlert';





const RegistroAdmin = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Repassword, setRepassword] = useState('');
  const navigate = useNavigate();

  // Usa el hook useAlert para obtener el estado y la API de alerta
  const [alertState, alertApi] = useAlert("alertsElement");

  // Función para mostrar alerta
  const showAlert = () => {
    let hasError = true;

    if (!Email || !Password || !Repassword) {
      alertApi.show("¡No llenaste correctamente los datos solicitados!", 'error');
      hasError = false;
    }

    if (Password !== Repassword) {
      alertApi.show("¡Los datos de Contraseña y Repetir Contraseña, no son iguales!", 'error');
      hasError = false;
    }

    return hasError;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Se efectua la alerta de contenido vacío o incorrecto
    if (showAlert()) {
      try {
        const response = await axios.post('http://localhost:3000/Registro-Admin', {
          Email,
          Password,
        });

        alert(JSON.stringify(response.data, null, 2));
        navigate('/Login-Admin'); 
      } catch (error) {
        console.error('Error al enviar la solicitud:', error.response?.data || error.message);
      }
    }
  };

  return (
    <>
      <main className="d-flex justify-content-center " >
        <div  style={{ margin: '50px auto', maxWidth: '800px' }} >
          <div
            className="border p-4" 
            
            style={{
              margin: '50px auto',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              borderRadius: '10px',
              borderStyle: 'solid',
              borderColor: 'black',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            <h2 className="text-center">Registro de Administrador</h2>
            <div  className="form-Registro" >
              <form onSubmit={handleSubmit} id="registroAdmForm">
                <div className="col-md-12">
                  <label htmlFor="validationCustom02" className="form-label">Correo</label>
                  <input type="text" className="form-control" id="correo" placeholder="example@Email.com" value={Email} onChange={(e) => setEmail(e.target.value)} />
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom02" className="form-label">Contraseña</label>
                  <input type="password" className="form-control" id="contraseña" placeholder="*********" value={Password} onChange={(e) => setPassword(e.target.value)} />
                  <div className="invalid-feedback">Please choose a username.</div>
                </div>
                <div className="col-md-12">
                  <label htmlFor="validationCustom02" className="form-label">Repetir Contraseña</label>
                  <input type="password" className="form-control" id="repetircontraseña" placeholder="*********" value={Repassword} onChange={(e) => setRepassword(e.target.value)} />
                  <div className="invalid-feedback">Please choose a username.</div>
                </div> <br />
                {/* Muestra la alerta si está visible */}
                {alertState.visible && (
                  <div id="alertsElement" className={`alert ${alertState.type}`}>
                    {alertState.message}
                  </div>
                )}
                <div className="row" id="contendor-registro">
                  <button type="submit" className="btn btn-primary btn-lg" id="btn-registroAdm" onClick={showAlert}>Registrarse</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegistroAdmin;
