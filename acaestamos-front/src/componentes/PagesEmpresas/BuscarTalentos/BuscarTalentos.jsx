import React, { useMemo, useEffect, useState } from 'react';
import './BuscarTalentos.css';
import axios from 'axios';
import FiltroEmpresa from '../../Filtros/FiltroEmpresa/FiltroEmpresa';

const BuscarTalentos = () => {
    const [usuariosAceptados, setUsuariosAceptados] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        disponibilidad: "",
        // orden: "",
        rubro: "",
        // experiencia: 0, 
    });


    useEffect(() => {
        axios.get('http://localhost:3000/Usuarios-Aceptados')
            .then(res => {
                const usuariosNoAceptados = res.data.data.filter(usuario => !usuario.aceptado);
                
                setUsuariosAceptados(usuariosNoAceptados);
            })
            .catch(err => {
                console.error('Error en obtener la información', err);
            });
    }, [searchTerm]);

    const filteredUsuarios = useMemo(() => {
        return usuariosAceptados.filter((usuario) => {
            const searchTermMatch =
                usuario.Nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                usuario.Apellido?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                usuario.Rubro?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                usuario.Rut?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                usuario.Telefono?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                usuario.FechaNacimiento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                usuario.Disponibilidad?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                usuario.EstadoCivil?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                usuario.Email.toLowerCase().includes(searchTerm.toLowerCase());

            const filtersMatch =
                (filters.disponibilidad === "" || usuario.Disponibilidad === filters.disponibilidad) &&
                // (filters.orden === "" || usuario.Orden === filters.orden) &&
                (filters.rubro === "" || usuario.Rubro === filters.rubro) 

            return searchTermMatch && filtersMatch;
        });
    }, [usuariosAceptados, searchTerm, filters]);

    function handleDenegarUsuario(_id, mail) {
        // Aquí puedes implementar la lógica para denegar un usuario
        const conf = window.confirm('Seguro que quieres Aceptar este usuario?');
        if (conf) {
            axios.put(`http://localhost:3000/Usuarios-Aceptados/${_id}`)
                .then(async res => {
                    alert('Usuario Aceptado');
                    const newUsuariosAceptados = usuariosAceptados.filter(usuario => usuario._id !== _id);
                    setUsuariosAceptados(newUsuariosAceptados);
                    await axios.post(`http://localhost:3000/Enviar-Correo/${mail}`);
                })
                .catch(err => {
                    console.error('Error al aceptar usuario', err);
                });
        }
    }

    return (
        <>
            <FiltroEmpresa
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filters={filters}
                setFilters={setFilters}
            />
            <div className="container-fluid">
                <h1 className='tituloUsuarioSolicitud' style={{ fontFamily: 'Heavitas', fontSize: '30px' }}>Usuarios Aceptados</h1>
            </div>

            {filteredUsuarios.map((usuario) => (
                <main className="solicitudesusuarios" key={usuario._id}>
                    <div className="container-fluid" style={{ borderRadius: '10px', backgroundColor: 'rgba(4, 157, 217, 0.15)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)', width: '100%' }}>
                        <div className="soliciu-row">
                            <div className="soliciu-col1">
                                <img src={usuario && usuario.ImagenPerfil ? `http://localhost:3000/uploads/${usuario.ImagenPerfil}` : "../Img/user-perfil.png"} alt="Imagen perfil" id="user-perfil" />
                            </div>
                            <div className="soliciu-col2">
                                <h3 className="Usuario">{usuario.Nombre} {usuario.Apellido}</h3>
                                <p><a href={`http://localhost:5173/Perfil-Usuario/${usuario._id}`}>Ver perfil de usuario</a></p>
                            </div>
                            <div className="soliciu-col3">
                                <button className="btn btn-secondary btn-lg" onClick={() => handleDenegarUsuario(usuario._id)}>Denegar</button>
                            </div>
                        </div>
                    </div>
                </main>
            ))}
        </>
    )
}

export default BuscarTalentos;