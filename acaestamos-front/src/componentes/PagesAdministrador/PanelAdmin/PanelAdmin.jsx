import React from 'react';
import './PanelAdmin.css';
import { Link } from 'react-router-dom';

const PanelAdmin = () => {
  return (
    <>
      <main className="perfiladmin">
        <div className="container-fluid" style={{ borderRadius: '10px', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%', textAlign: 'center' }}>
          <div className="admin-row">
            <div className="admin-col1">
            <Link to='/Visualizacion-Empresas-Admin'>
              <button id="btn-empresas" type="button" className="btn btn-primary btn-lg">Empresas</button>
            </Link>
            </div>
            <div className="admin-col2">
            <Link to = '/Solicitudes-Empresas-Admin'>
              <button id="btn-solicitudes" className="btn btn-primary btn-lg">Solicitudes</button>
            </Link>
            </div>
            <div className="admin-col3">
              <Link to='/Solicitudes-InfoEmpresas-Admin'>
              <button id="btn-ofertas" className="btn btn-secondary btn-lg">Info Empresas</button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <main className="perfiladmin">
        <div className="container-fluid" style={{ borderRadius: '10px', borderColor: 'black', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%', textAlign: 'center' }}>
          <div className="admin-row">
            <div className="admin-col1">
            <Link to='/Visualizacion-Usuario-Admin'>
              <button id="btn-usuario" type="button" className="btn btn-primary btn-lg" style={{ backgroundColor: '#049DD9', borderColor: '#049DD9' }}>Usuarios</button>
            </Link>
            </div>
            <div className="admin-col2">
            <Link to='/Solicitudes-Usuarios-Admin'>
              <button id="btn-solicitudes" className="btn btn-primary btn-lg">Solicitudes</button>
            </Link>
            </div>
            <div className="admin-col3">
            <Link to='/Solicitudes-CV-Admin'>
              <button id="btn-newcv" className="btn btn-secondary btn-lg">Nuevos CV</button>
            </Link>
            </div>
          </div>
        </div>
      </main>   
    </>
  );
}

export default PanelAdmin;
