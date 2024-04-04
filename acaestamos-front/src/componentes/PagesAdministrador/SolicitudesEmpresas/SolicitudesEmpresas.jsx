import React, { useMemo } from 'react';
import './SolicitudesEmpresas.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FiltroAdmin from '../../Filtros/FiltroAdmin/FiltroAdmin';

const SolicitudesEmpresas = () => {
  const [solicitudesEmpresas, setSolicitudesEmpresas] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    disponibilidad: "",
    actividad: "",
    rubro: "",
    // experiencia: 0,
});

  useEffect(() => {
    axios.get('http://localhost:3000/Empresas')
      .then(res => {
        const solicitudesEmp = res.data.data.filter(solicitudesEmpresas => !solicitudesEmpresas.aceptado);
        setSolicitudesEmpresas(solicitudesEmp);
      }).catch(err => {
        console.error('Error en obtener la información', err);
      })

  }, [searchTerm]);

  const filteredSolicitudesEmpresas = useMemo(() => {
    return solicitudesEmpresas.filter((solicitud) => {
      const searchTermMatch =
        solicitud.NombreEmpresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solicitud.RutEmpresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solicitud.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solicitud.Telefono?.toLowerCase().includes(searchTerm.toLowerCase())||
        solicitud.Rubro?.toLowerCase().includes(searchTerm.toLowerCase())||
        solicitud.CorreoContacto?.toLowerCase().includes(searchTerm.toLowerCase())||
        solicitud.Ubicacion?.toLowerCase().includes(searchTerm.toLowerCase())||
        solicitud.LinkedIn?.toLowerCase().includes(searchTerm.toLowerCase())||
        solicitud.Url?.toLowerCase().includes(searchTerm.toLowerCase())||
        solicitud.Numeroempleados?.toLowerCase().includes(searchTerm.toLowerCase());

        const filtersMatch =
        (filters.disponibilidad === "" || solicitud.Disponibilidad === filters.disponibilidad) &&
        (filters.actividad === "" ||
            solicitud.Actividad === filters.actividad) &&
        (filters.rubro === "" || solicitud.Rubro === filters.rubro); 
        
        return searchTermMatch && filtersMatch;

  });
}, [solicitudesEmpresas, searchTerm, filters]);

  function handleSubmitEmp(_id) {
    const conf = window.confirm('Seguro que quieres aceptar esta Empresa?');
    if (conf) {
      axios.put(`http://localhost:3000/Empresa-Aceptada/${_id}`)
        .then(res => {
          alert('Empresa Aceptada');
          const newSolicitudesEmp = solicitudesEmpresas.filter(solicitud => solicitud._id !== _id);
          setSolicitudesEmpresas(newSolicitudesEmp);
        })
        .catch(err => {
          console.error('Error al aceptar la empresa', err);
        });
    }
  }


  return (
    <>
    <FiltroAdmin searchTerm={searchTerm} setSearchTerm={setSearchTerm} filters={filters} setFilters={setFilters} />
      <div className="container-fluid">
        <h1 className='tituloUsuarioSolicitud' style={{ fontFamily: 'Heavitas', fontSize: '30px' }}>Solicitudes de nuevas empresas</h1>
      </div>

      {filteredSolicitudesEmpresas.map((solicitud) => (

        <main className="solicitudesEmp" key={solicitud._id}>
          <div className="container-fluid" style={{ borderRadius: '10px', backgroundColor: '#03a6883b', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%' }}>
            <div className="solici-row">
              <div className="solici-col1">
                <img src={solicitud && solicitud.ImagenEmpresa ? `http://localhost:3000/uploads/${solicitud.ImagenEmpresa}` : "../Img/user-perfil.png"} id="user-perfil" />
              </div>
              <div className="solici-col2">
                <h3 className="Empresa">{solicitud.NombreEmpresa}</h3>
                <p><a href={`http://localhost:5173/Perfil-Empresa/${solicitud._id}`}>Ver perfil de la empresa</a></p>
              </div>
              <div className="solici-col3">
                <button onClick={e => handleSubmitEmp(solicitud._id)} id="btn-Aprobar" className="btn btn-primary btn-lg">Aprobar</button>
                <button onClick={e => handleDenegarEmpresa(solicitud._id)} id="btn-Denegar" className="btn btn-secondary btn-lg">Denegar</button>
              </div>
            </div>
          </div>
        </main>
      ))}

    </>
  );

      }
export default SolicitudesEmpresas;