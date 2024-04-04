import React from 'react'
import './VisualizacionEmpresas.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const VisualizacionEmpresas = () => {
    const [column, setColumn] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3000/Empresa-Aceptada')
            .then(res => {
                setColumn(res.data.data);
                console.log(res);
            })
            .catch(err => {
                console.error('Error fetching data:', err);
            });
    }, []);

    function handleSumbit(_id) {
        const conf = window.confirm('Seguro que quieres Elimnar a esta Empresa?')

        if (conf) {
            axios.delete(`http://localhost:3000/Borrar-Empresa/${_id}`)
                .then(res => {
                    alert('Empresa Eliminada')
                    const newColumn = column.filter(column => column._id !== _id);
                    console.log(res);
                    setColumn(newColumn);
                })
                .catch(err => {
                    console.error('Error en eliminar los datos', err);
                });
        }
    };




    return (
        <>

            {/* Inicio tabla con la lista de usuarios registrados */}
            <main className="d-flex ">
                <div className="container-fluid mb-5 w-60 p-4 h-50">
                    <div className="container-fluid">
                        <div className="row">
                            <h3 className="userList">Todas las empresas</h3>
                        </div>
                        <div className="container-fluid gap-5 d-md-flex justify-content-md-end p-4 containerAdmin" style={{ justifyContent: 'flex-end' }}>

                            <Link to='/Solicitudes-Empresas-Admin' className="btn btn-lg me-2 buttonCv" type="button">
                                Solicitudes de Empresas
                            </Link>
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className='tabla' scope="col">Nombre Empresa</th>
                                <th className='tabla' scope="col">RUT</th>
                                {/* <th className='tabla' scope="col">Apellido Materno</th> */}
                                <th className='tabla' scope="col">Actividad</th>
                                <th className='tabla' scope="col">Eliminar Empresa</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {column.map((column, index) => (
                                <tr key={index}>
                                    <td>{column.NombreEmpresa}</td>
                                    <td>{column.RutEmpresa}</td>
                                    {/* <td>{column.ApellidoMaterno}</td> */}
                                    <td>{column.Rubro}</td>
                                    <td>
                                        <button onClick={e => handleSumbit(column._id)} id='Eliminar-boton' className="btn btn-danger" type="button">Eliminar</button>
                                    </td>
                                </tr>
                            )


                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    )
}

export default VisualizacionEmpresas