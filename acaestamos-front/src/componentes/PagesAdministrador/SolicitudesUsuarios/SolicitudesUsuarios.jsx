import React, { useMemo } from 'react';
import './SolicitudesUsuarios.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import FiltroAdmin from '../../Filtros/FiltroAdmin/FiltroAdmin';

const SolicitudesUsuarios = () => {
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
                solicitud.Rubro?.toLowerCase().includes(searchTerm.toLowerCase())||
                solicitud.Rut?.toLowerCase().includes(searchTerm.toLowerCase())||
                solicitud.Telefono?.toLowerCase().includes(searchTerm.toLowerCase())||
                solicitud.FechaNacimiento?.toLowerCase().includes(searchTerm.toLowerCase())||
                solicitud.Disponibilidad?.toLowerCase().includes(searchTerm.toLowerCase())||
                solicitud.EstadoCivil?.toLowerCase().includes(searchTerm.toLowerCase())||
                solicitud.Email.toLowerCase().includes(searchTerm.toLowerCase()) ;

            const filtersMatch =
                (filters.disponibilidad === "" || solicitud.Disponibilidad === filters.disponibilidad) &&
                (filters.actividad === "" ||
                    solicitud.Actividad === filters.actividad) &&
                (filters.rubro === "" || solicitud.Rubro === filters.rubro);
                // (filters.experiencia === 0 ||
                //     solicitud.Experiencia >= filters.experiencia);

            return searchTermMatch && filtersMatch;
        });
    }, [solicitudes, searchTerm, filters]);

    function handleSubmit(_id, email) {
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
            <FiltroAdmin
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filters={filters}
                setFilters={setFilters}
            />
            <div className="container-fluid">
                <h1 className='tituloUsuarioSolicitud' style={{ fontFamily: 'Heavitas', fontSize: '30px' }}>Solicitudes de nuevos perfiles</h1>
            </div>

            {filteredSolicitudes.map((solicitud) => (
                <main className="solicitudesusuarios" key={solicitud._id}>
                    
                    <div className="container-fluid" style={{ borderRadius: '10px', backgroundColor: 'rgba(4, 157, 217, 0.15)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%' }}>
                    
                        <div className="soliciu-row">
                            <div className="soliciu-col1">
                                <img src={solicitud && solicitud.ImagenPerfil ? `http://localhost:3000/uploads/${solicitud.ImagenPerfil}` : "../Img/user-perfil.png"} alt="Imagen perfil" id="user-perfil" /> {/* Reemplaza '/ruta/imagen' con la ruta correcta */}
                            </div>
                            <div className="soliciu-col2">
                                <h3 className="Usuario">{solicitud.Nombre} {solicitud.Apellido}</h3>
                                <p><a href={`http://localhost:5173/Perfil-Usuario/${solicitud._id}`}>Ver perfil de usuario</a></p>
                            </div>
                            <div className="soliciu-col3">
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

export default SolicitudesUsuarios;