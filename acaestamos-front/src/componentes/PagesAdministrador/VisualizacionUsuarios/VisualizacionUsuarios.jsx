import React, { useState, useEffect } from 'react';
import './VisualizacionUsuarios.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FiltroAdmin from '../../Filtros/FiltroAdmin/FiltroAdmin';

const VisualizacionUsuarios = () => {
    const [records, setRecords] = useState([]); //Dos estructura de data, una constante y una función 
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRecords, setFilteredRecords] = useState([]);
    


    useEffect(() => {
        axios.get('http://localhost:3000/Usuarios-Aceptados')
            .then(res => {
                setRecords(res.data.data);
                console.log(res);

            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, [searchTerm]);

    useEffect(() => {
        const filteredRecords = records.filter(record => {
            // console.log(record);
            return (
                record.Nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                record.Apellido.toLowerCase().includes(searchTerm.toLowerCase()) ||
                record.Rut.toLowerCase().includes(searchTerm.toLowerCase()) ||
                record.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                record.EstadoCivil?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                record.Telefono?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                record.Rubro?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                record.Disponibilidad?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                record.FechaNacimiento?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                record.NivelEducacional?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                record.InstitucionEducativa?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                record.Titulo?.toLowerCase().includes(searchTerm.toLowerCase())
                // record.ConocimientosCV?.toLowerCase().includes(searchTerm.toLowerCase())

            );
        });
        setFilteredRecords(filteredRecords);
    }, [searchTerm, records]);

    function handleSubmit(_id) {
        const conf = window.confirm('Seguro que quieres Elimnar a este Usuario?')

        if (conf) {
            axios.delete(`http://localhost:3000/Borrar-Usuario/` + _id)
                .then(res => {
                    alert('Usuario Eliminado')
                    /*  window.location.reload(); */
                    const newRecords = records.filter(record => record._id !== _id); //filter es un filtro, sirve para la disponibilidad del los usuarios
                    console.log(res);
                    setRecords(newRecords);
                })
                .catch(err => {
                    console.error('Error deleting data:', err);
                });
        }

    };



    return (
        <>
            <FiltroAdmin searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {/* Inicio tabla con la lista de usuarios registrados */}

            <main className="d-flex ">
                <div className="container-fluid mb-5 w-60 p-4 h-50">


                    <div className="container-fluid">
                        <div className="row">
                            <h3 className="userList">Todos los usuarios</h3>
                        </div>
                        <div className="container-fluid gap-5 d-md-flex justify-content-md-end p-4 containerAdmin" style={{ justifyContent: 'flex-end' }}>
                            <Link to="/Solicitudes-Usuarios-Admin" className="btn btn-lg me-2 adminButton" role="button"
                            >Nuevos usuarios
                            </Link>
                            <Link to="/Solicitudes-CV-Admin" className="btn btn-lg me-2 buttonCv" role="button">
                                Solicitudes de CV</Link>

                        </div>
                    </div>
                    <div className="conteiner fluid">
                        <div className="table-responsive">
                            <table className="table">

                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Apellido</th>
                                        <th>Rut</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody className="table-group-divider">
                                    {
                                        filteredRecords.map((record, index) => (
                                            <tr key={index}>
                                                <td>{record.Nombre}</td>
                                                <td>{record.Apellido}</td>
                                                <td>{record.Rut}</td>
                                                <td>
                                                  <a href={`mailto: ${record.Email}`}>{record.Email}</a> 
                                                </td>
                                                <td>
                                                    <button onClick={e => handleSubmit(record._id)} id='Eliminar-boton' className="btn btn-danger" type="button">Eliminar</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </table>
                        </div>

                    </div>

                </div>
            </main >
        </>
    );
};

export default VisualizacionUsuarios
