
import React, { useMemo } from 'react';
import './SolicitudesCV.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import FiltroAdmin from '../../Filtros/FiltroAdmin/FiltroAdmin';

const SolicitudesCV = () => {
  const [solicitudes, setSolicitudes] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    disponibilidad: "",
    actividad: "",
    rubro: "",
    // experiencia: 0,
});

  useEffect(() => {
    axios.get('http://localhost:3000/Usuario')
      .then(res => {
        const solicitudesNoAceptadas = res.data.data.filter(solicitud => !solicitud.aceptado);
        setSolicitudes(solicitudesNoAceptadas);
      })
      .catch(err => {
        console.error('Error en obtener la informaciÃ³n', err);
      });
  }, [searchTerm]);

const filteredSolicitudes = useMemo(() => {
  return solicitudes.filter((solicitud) => {
    const searchTermMatch =
        solicitud.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solicitud.Apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solicitud.Rut.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solicitud.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solicitud.EstadoCivil?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        solicitud.Telefono?.toLowerCase().includes(searchTerm.toLowerCase())||
        solicitud.Rubro?.toLowerCase().includes(searchTerm.toLowerCase())||
        solicitud.Disponibilidad?.toLowerCase().includes(searchTerm.toLowerCase())||
        solicitud.FechaNacimiento?.toLowerCase().includes(searchTerm.toLowerCase())||
        solicitud.NivelEducacional?.toLowerCase().includes(searchTerm.toLowerCase())||
        solicitud.InstitucionEducativa?.toLowerCase().includes(searchTerm.toLowerCase())||
        solicitud.Titulo?.toLowerCase().includes(searchTerm.toLowerCase())
        
        const filtersMatch =
        (filters.disponibilidad === "" || solicitud.Disponibilidad === filters.disponibilidad) &&
        (filters.actividad === "" ||
            solicitud.Actividad === filters.actividad) &&
        (filters.rubro === "" || solicitud.Rubro === filters.rubro); 
        
        return searchTermMatch && filtersMatch;
  });
}, [solicitudes, searchTerm, filters]);

function handleSubmit(_id,email) {
    const conf = window.confirm('Seguro que quieres Aceptar este usuario?');
    if (conf) {
      axios.put(`http://localhost:3000/Usuarios-Aceptados/${_id}`)
        .then(async res => {
          alert('Usuario Aceptado');
          const newSolicitudes = solicitudes.filter(solicitud => solicitud._id !== _id);
          setSolicitudes(newSolicitudes);
          await axios.post(`http://localhost:3000/Enviar-Correo/${email}`);
        })
        .catch(err => {
          console.error('Error al aceptar usuario', err);
        });
    }
  };
  console.log({ filters });

  return (
    <>
    <FiltroAdmin searchTerm={searchTerm} setSearchTerm={setSearchTerm} filters={filters} setFilters={setFilters} />
    <div className="container-fluid">
                <h1 className='tituloUsuarioSolicitud' style={{ fontFamily: 'Heavitas', fontSize: '30px' }}>Solicitudes de nuevos currículums</h1>
            </div>
            {filteredSolicitudes.map((solicitud) => (
      <main className="solicitudescv" key={solicitud._id}> 
                    
        <div className="container-fluid" style={{ borderRadius: '10px', backgroundColor: 'rgba(4, 157, 217, 0.15)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%' }}>

            <div className="solici-row">
              <div className="solici-col1">
                <img src={solicitud && solicitud.ImagenPerfil ? `http://localhost:3000/uploads/${solicitud.ImagenPerfil}` : "../Img/user-perfil.png"} alt="Imagen perfil" id="user-perfil" />
              </div>
              <div className="solici-col2">
                <h3 className="Curriculum">Curriculum de {solicitud.Nombre} {solicitud.Apellido}</h3>
                <p><a href={`http://localhost:5173/Mostrar-CV/${solicitud._id}`}>Mostrar CV Generado</a></p>
              </div>
              <div className="solici-col3">
                <button onClick={e => handleSubmit(solicitud._id, solicitud.Email)} id="btn-Aprobar" className="btn btn-primary btn-lg">Aprobar</button>
                <button id="btn-Denegar" className="btn btn-secondary btn-lg">Denegar</button>
              </div>
            </div>
          </div>
        </main>
      ))}

    </>
  );
}

export default SolicitudesCV;
