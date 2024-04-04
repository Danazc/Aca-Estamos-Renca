// CrearNewPass.jsx

import React from 'react';
import './CrearNewPass'

const CrearNewPass = () => {

  return (
    <>
      <div id="ContenedorOlvCont" className="OLVIDOCONTRA">
        <div className="border p-4 form-NewContra">
          <h2 className="text-center">Recuperación de Contraseña</h2>
          <div className="form-NewContra">
            <form>
              <div className="mb-3" style={{ padding: '16px' }}>
                <label htmlFor="exampleInputPass1" className="form-label">
                  Ingrese nueva contraseña
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="exampleInputPass1"
                  aria-describedby="password"
                />

                <div className="mb-3">
                  <label htmlFor="exampleInputPass2" className="form-label">
                    Repita contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="exampleInputPass2"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center btn-sendCorreo">
                <button type="button" className="btn btn-secondary btn-lg me-2">
                  Confirmar Cambio
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearNewPass;
