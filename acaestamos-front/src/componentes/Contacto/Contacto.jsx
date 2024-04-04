import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAlert } from '../../Efectos/useAlert'

const Contacto = () => {

    //Definicion de constantes
    const [Email, setEmail] = useState('');
    const [Rut, setRut] = useState('');
    const [Comentario, setComentario] = useState('');

    // Usa el hook useAlert para obtener el estado y la API de alerta
    const [alertState, alertApi] = useAlert("alertsElement");

    //Definicion de funciones
    const showAlert = () => {

        let hasError = true;

        if (!Email || !Rut || !Comentario) {
            alertApi.show("¡No llenaste correctamente los datos solicitados!", 'error');
            hasError = false;
        }
    }

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
        const rutRegex = /^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]{1}$/;
        if (!rutRegex.test(Rut)) {
            alertApi.show('El Rut no cumple con el formato requerido', 'error');
            return;
        }
        // Se efectua la alerta de contenido vacio o incorrecto
        if (showAlert() === true) {
            try {
                const response = await axios.post('http://localhost:3000/Crear-Empresa', {
                    Email,
                    Rut,
                    Comentario
                });
                alert(JSON.stringify(response.data, null, 2));
                navigate('/Contacto')
            } catch (error) {
                console.error('Error al enviar la solicitud:', error.response?.data || error.message);
            }
        }

    };


    return (
        <div>
            <div id="Editperfilempresa" style={{ margin: '50px auto', maxWidth: '800px' }}>
                <div className="border p-4"
                    style={{ fontFamily: 'Poppins-Regular', margin: '50px auto 50px auto', backgroundColor: '#D9F2ED', borderRadius: '10px', borderStyle: 'solid', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                    <h2 style={{ fontFamily: 'Heavitas' }} className="text-center">Contacta con Nosotros</h2>
                    <div className="form-DatosEmpresa">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Correo</label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Correo@example.com" value={Email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Rut</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="13-333-333-k" value={Rut} onChange={(e) => setRut(formatRut(e.target.value))} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Comentario</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comenta tus dudas acá" value={Comentario} onChange={(e) => setComentario(e.target.value)}></textarea>
                                    </div>
                                    {/* Muestra la alerta si está visible */}
                                    {alertState.visible && (
                                        <div id="alertsElement" className={`alert ${alertState.type}`}>
                                            {alertState.message}
                                        </div>
                                    )}
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn btn-primary btn-lg" onClick={showAlert}>Enviar Formulario</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacto;
