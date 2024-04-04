import { useState } from 'react';
import './Formularioregistro.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from '../../Efectos/useAlert'

const Formularioregistro = () => {

  const [Nombre, setNombre] = useState('');
  const [Apellido, setApellido] = useState('');
  const [Telefono, setTelefono] = useState('');
  const [Rut, setRut] = useState('');
  const [FechaNacimiento, setFechaNacimiento] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Repassword, setRepassword] = useState('');
  const [Reemail, setReemail] = useState('');
  const navigate = useNavigate();

  // Usa el hook useAlert para obtener el estado y la API de alerta
  const [alertState, alertApi] = useAlert("alertsElement");

  //Definicion de funciones
  const showAlert = () => {

    let hasError = true;

    if (!Nombre || !Apellido || !Telefono || !Rut || !FechaNacimiento || !Email || !Reemail || !Password || !Repassword) {
      alertApi.show("¡No llenaste correctamente los datos solicitados!", 'error');
      hasError = false;
    }
    if (Email !== Reemail) {
      alertApi.show("¡Los datos de Correo y Repetir Correo, no son iguales!", 'error');
      hasError = false
    }
    if (Password !== Repassword) {
      alertApi.show("¡Los datos de Contraseña y Repetir Contraseña, no son iguales!", 'error');
      hasError = false
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación del RUT
    const rutRegex = /^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]{1}$/;
    if (!rutRegex.test(Rut)) {
      alertApi.show('El Rut no cumple con el formato requerido', 'error');
      return;
    }
    // Se efectua la alerta de contenido vacio o incorrecto
    if (showAlert() === true) {
      try {
        const response = await axios.post('http://localhost:3000/Crear-usuario', {
          Nombre,
          Apellido,
          Telefono,
          Rut,
          FechaNacimiento,
          Email,
          Password,
        });

        alert(response.data.message);
        navigate('/Login-form')
      } catch (error) {
        console.error('Error al enviar la solicitud:', error.response?.data || error.message);
      }
    }

  };


  return (
    <>
      <main className="d-flex justify-content-center">
        <div style={{ margin: '50px auto', maxWidth: '800px' }}>
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
            <h2 className="text-center">Datos Registro</h2>
            <div className="form-Registro">
              <form onSubmit={handleSubmit} id="registroForm">
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Nombre" value={Nombre} onChange={(e) => setNombre(e.target.value)} />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido" placeholder="Apellido" value={Apellido} onChange={(e) => setApellido(e.target.value)} />
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Teléfono</label>
                    <input type="text" className="form-control" id="telefono" placeholder="+59 999999999" value={Telefono} onChange={(e) => setTelefono(e.target.value)} />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Rut</label>
                    <input type="text" className="form-control" id="rut" placeholder="11.111.111-1" value={Rut} onChange={(e) => setRut(formatRut(e.target.value))} />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="FechaNacimiento" className="form-label">Fecha Nacimiento:</label>
                    <input type="date" className="form-control" id="FechaNacimiento" placeholder="DD/MM/AAAA" value={FechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Correo</label>
                    <input type="text" className="form-control" id="correo" placeholder="example@Email.com" value={Email} onChange={(e) => setEmail(e.target.value)} />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Repetir Correo</label>
                    <input type="text" className="form-control" id="repetirCorreo" placeholder="example@Email.com" value={Reemail} onChange={(e) => setReemail(e.target.value)} />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="contraseña" placeholder="*********" value={Password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">Repetir Contraseña</label>
                    <input type="password" className="form-control" id="repetircontraseña" placeholder="*********" value={Repassword} onChange={(e) => setRepassword(e.target.value)} />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                </div> <br />
                {/* Muestra la alerta si está visible */}
                {alertState.visible && (
                  <div id="alertsElement" className={`alert ${alertState.type}`}>
                    {alertState.message}
                  </div>
                )}
                <div className="row" id="contendor-registro">
                  <button type="submit" className="btn btn-primary btn-lg" id="boton-registro" onClick={showAlert}>Registrarse</button>
                </div>
                <div className="col">
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>

  );
};

export default Formularioregistro;