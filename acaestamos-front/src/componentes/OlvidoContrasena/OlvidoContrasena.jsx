import React from 'react';
import './OlvidoContrasena.css'

const OlvidoContraseña = () => {
    return (
        <>
            <div id="OLVIDOCONTRA" style={{ margin: '50px auto', maxWidth: '800px', marginBottom: '2%',marginTop : '10%', paddingBottom :'11%'}}>
                <div
                    className="border p-4"
                    style={{ fontFamily: 'Poppins-Regular', borderRadius: '10px', borderStyle: 'solid', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                    <h2 style={{ fontFamily: 'Heavitas' , paddingTop:'10px' }} className="text-center"  > 
                        Recuperación de Contraseña
                    </h2>
                    <div style={{ width: '80%', margin: 'auto' }} className="form-Experiencia">
                        <form>
                            <div className="mb-3" style={{padding:'32px'}}>
                                <label htmlFor="cargo" className="form-label">
                                    Ingrese correo 
                                </label>
                                <input type="text" className="form-control" id="cargo" placeholder="CORREO ELECTRONICO" />
                            </div>
                      
                          
                            <div className="d-flex justify-content-center btn-sendCorreo">
                                <button type="button" className="btn btn-secondary btn-lg me-2">
                                    Enviar correo
                                </button>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OlvidoContraseña;
