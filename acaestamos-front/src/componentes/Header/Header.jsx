import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid text-light p-3" style={{ backgroundColor: '#83A637' }}>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid" style={{ backgroundColor: '#83A637' }} id="greenContainer">
              <div>
                <Link to="/" className="navbar-brand">
                  <img src="/Logos/logo2.0.png" alt="Bootstrap" width="100" height="100" id="hire" />
                </Link>
              </div>
              <div className="ml-4" id="hashtagDelInicio">
                <p className="mb-0">#RencaOrgullosa</p>
                <p className="mb-0">#RencaCrece</p>
                <p className="mb-0">#RencaParticipa</p>
              </div>
              <div className="container-fluid gap-5 d-md-flex justify-content-md-end p-4" id="botonesnav">
                <Link to="/Login" className="btn btn-custom btn-lg me-2" id="botonInicio" type="button" style={{ backgroundColor: '#049DD9', color: 'white' }}>
                  Iniciar Sesión
                </Link>
                <Link to="/Registro" className="btn btn-custom btn-lg me-2" id="botonInicio" style={{ backgroundColor: '#D97D0D', color: 'white' }}>
                  Regístrate
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

