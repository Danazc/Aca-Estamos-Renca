import React from 'react';
import './Registro.css';
import { Link } from 'react-router-dom';

export const Registro = () => {

  return (
    <>
      <section>
        <main className="d-flex justify-content-center" style={{ marginTop: '80px', marginBottom: '120px' }}>
          <div className="row" id="nuevoregistro">
            <div className="col align-self-center">
              <div className="border p-4" style={{ fontFamily: 'Poppins-Regular', borderRadius: '10px', borderStyle: 'solid', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
                <div className="row align-items-center">
                  <div className="col-12">
                    <h1 style={{ fontFamily: 'Heavitas' }} className="text-center"><strong>Registro</strong></h1>
                    <h3 className="text-center" style={{ paddingTop: '40px' }}><strong>Seleccione tipo de usuario:</strong></h3>
                  </div>
                </div>
                <div className="row align-items-center" style={{ paddingTop: '60px' }}>
                  <div className="col-6">
                  <Link to="/Registro-form" className="btn btn-lg me-2">
                      <img src="../Img/usuario-renca.png" alt="Descripción de la imagen" className="img-fluid"></img>
                    </Link>
                  </div>
                  <div className="col-6">
                  <Link to="/Registro-form-Empresa" className="btn btn-lg me-2">
                      <img src="../Img/empresas-renca.png" alt="Descripción de la imagen" className="img-fluid"></img>
                    </Link>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-6">
                    <h3 className="text-center">Busca empleos<br />como usuario<br /></h3>
                  </div>
                  <div className="col-6">
                    <h3 className="text-center">Publica empleos<br />como empresa<br /></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default Registro;