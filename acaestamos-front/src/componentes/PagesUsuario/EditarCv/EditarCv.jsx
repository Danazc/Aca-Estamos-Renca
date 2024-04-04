import './EditarCv.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import client from '../../../Utils/axios.Client';
import getUserId from '../../../Utils/getUserId';
import dayjs from "../../../Utils/dayjs";

const EditarCv = () => {
    const [perfil, setPerfil] = useState(null);

    useEffect(() => {
        const obtenerPerfil = async () => {
            try {

                const response = await client.get(`http://localhost:3000/Obtener-Perfil/${getUserId()}`);
                setPerfil(response.data);
            } catch (error) {
                if (error.response) {
                    console.error('Error en la respuesta:', error.response.data);
                } else if (error.request) {
                    console.error('Error en la solicitud:', error.request);
                } else {
                    console.error('Error general:', error.message);
                }
            }
        };

        obtenerPerfil();
    }, []);

    return (
        <>
            <main className="d-flex justify-content-center">
                <div className="  rounded w-60 p-4 h-50 text-center cvContainer" style={{ backgroundColor: "#049dd963" }}>
                    <div className="row justify-content-center nameUsuario p-3" style={{ backgroundColor: "#0077B7" }}>
                        <div className="col-11 colName">
                            <h1 className="nameCv" style={{ color: "white", fontFamily: "Heavitas" }}>{perfil && perfil.NombreCV ? perfil && perfil.NombreCV : 'Nombre de la persona'}</h1>
                            <h3 className="nameCv" style={{ color: "white" }}>{perfil && perfil.TitularCV ? perfil && perfil.TitularCV : 'Profesión'}</h3>
                        </div>
                        <div className="col-1 colName">
                            <Link to="/Actualizar-Perfil"><i className="fa-solid fa-pen-to-square fa-xl iconCv"></i></Link>
                        </div>
                        {/* <!-- No borren este punto, es para agrandar el contenedor del nombre --> */}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-5 firstColCv" style={{ backgroundColor: "#D9D9D9" }}>
                            <div className="row container-fluid containerItems p-2 justify-content-center" style={{ backgroundColor: "#0077B7" }}>
                                <div className="col-10">
                                    <h5 className="itemsCv">MI PERFIL</h5>
                                </div>
                                <div className="col-1">
                                    <Link to="/Actualizar-Perfil"><i className="fa-solid fa-pen-to-square fa-xl iconCv"></i></Link>
                                </div>
                            </div>
                            <div className="contInfo">
                                <p>{perfil && perfil.AcercadeCV ? perfil && perfil.AcercadeCV : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, perspiciatis non veniam'}</p>
                                <a href={`http://localhost:3000/uploads/${perfil && perfil.ArchivoPDF3}`} download target='_blank' style={{ color: "black" }}><u> Cert. antecedentes</u></a>
                            </div>
                            <div className="row container-fluid containerItems p-2 justify-content-center" style={{ backgroundColor: "#0077B7" }}>
                                <div className="col-10">
                                    <h5 className="itemsCv">CONOCIMIENTOS TÉCNICOS</h5>
                                </div>
                                <div className="col-1">
                                    <Link to="/Actualizar-Perfil"><i className="fa-solid fa-pen-to-square fa-xl iconCv"></i></Link>
                                </div>
                            </div>
                            <div className="row justify-content-center contInfo">
                                <div className="col-6 contInfo">
                                    <ul className="cTecnics">
                                        {perfil?.ConocimientosCV?.length
                                            ? perfil.ConocimientosCV[0].split(',').map((conocimiento, index) => (
                                                <li key={index}>{conocimiento.trim()}</li>
                                            ))
                                            : ['Conocimiento1', 'Conocimiento2', 'Conocimiento3'].map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                    </ul>


                                </div>
                                <div className="col-6 row">
                                    <ul className="cursosUsuario">
                                        <h6 className="contInfo"><b>Certificados de Cursos</b></h6>
                                        {perfil?.CursosCV?.length
                                            ? perfil.CursosCV[0].split(',').map((curso, index) => (
                                                <li key={index}>{curso.trim()}</li>
                                            ))
                                            : ['Curso1', 'Curso2', 'Curso3'].map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                    </ul>
                                    <a href={`http://localhost:3000/uploads/${perfil && perfil.ArchivoPDF4}`} download target='_blank' style={{ color: "black" }}><u> Cert. cursos</u></a>
                                </div>
                            </div>
                            <div className="row container-fluid containerItems p-2 justify-content-center" style={{ backgroundColor: "#0077B7" }}>
                                <div className="col-10">
                                    <h5 className="itemsCv">CONTACTO</h5>
                                </div>
                                <div className="col-1">
                                    <Link to="/Actualizar-Datos-Perfil"><i className="fa-solid fa-pen-to-square fa-xl iconCv"></i></Link>
                                </div>
                            </div>
                            <div className="contactData">
                                <ul>
                                    <p><i className="fa-solid fa-phone" style={{ color: 'black' }}></i> {perfil && perfil.Telefono}</p>
                                    <p><i className="fa-brands fa-linkedin" style={{ color: 'black' }}> </i> {perfil && perfil.LinkedIn ? perfil && perfil.LinkedIn : 'linkedin/milinkedin'}</p> {/* <!-- arreglar esto para que los lonks largos se vean facheros --> */}
                                    <p><i className="fa-solid fa-envelope" style={{ color: 'black' }}></i> {perfil && perfil.Email}</p>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 secondColCv">
                            <div className="row container-fluid  cvContent justify-content-center">
                                <div className="col-10">
                                    <h4 className="itemsCv p-2">EXPERIENCIA</h4>
                                </div>
                                <div className="col-1">
                                    <Link to="/Actualizar-Experiencia"><i className="fa-solid fa-pen-to-square fa-xl iconCv"></i></Link>
                                </div>
                                <div className="contInfo">
                                    <h6><b><i>{perfil && dayjs(perfil.FechaExpInicio).format('MMMM [de] YYYY') ? perfil && dayjs(perfil.FechaExpInicio).format('MMMM [de] YYYY') : 'Fecha Inicio'}</i>｜<i>{perfil?.CheckCargo
                                        ? "Actualidad"
                                        : perfil &&
                                            dayjs(perfil.FechaExpFin).format("MMMM [de] YYYY")
                                            ? perfil &&
                                            dayjs(perfil.FechaExpFin).format("MMMM [de] YYYY")
                                            : "Fecha Finalizacion"}</i></b></h6>
                                    <h6><b>{perfil && perfil.NombredelaEmp ? perfil && perfil.NombredelaEmp : 'Nombre de la empresa'}</b></h6>
                                    <h6><b>{perfil && perfil.Cargo ? perfil && perfil.Cargo : 'Cargo'} ｜ {perfil && perfil.TipoEmpleo ? perfil && perfil.TipoEmpleo : 'Tipo de empleo'}</b></h6>
                                    <p>{perfil && perfil.DescripcionCargo ? perfil && perfil.DescripcionCargo : 'descripcion del trabajo:Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, numquam? Culpa quasi'} </p>
                                </div>
                            </div>
                            <div className="row container-fluid p-2 justify-content-center">
                                <div className="col-10">
                                    <h4 className="itemsCv">EDUCACIÓN</h4>
                                </div>
                                <div className="col-1">
                                    <Link to="/Actualizar-Educacion"><i className="fa-solid fa-pen-to-square fa-xl iconCv"></i></Link>
                                </div>
                                <div className="contInfo">
                                    <h6><b><i>{perfil && dayjs(perfil.FechaInicio).format('MMMM [de] YYYY') ? perfil && dayjs(perfil.FechaInicio).format('MMMM [de] YYYY') : 'Fecha Inicio'}</i>｜<i>{perfil && dayjs(perfil.FechaFinalizacion).format('MMMM [de] YYYY') ? perfil && dayjs(perfil.FechaFinalizacion).format('MMMM [de] YYYY') : 'Fecha Finalizacion'}</i> {perfil && perfil.Titulo ? perfil && perfil.Titulo : 'Titulo'}</b></h6>
                                    <h6><b>{perfil && perfil.InstitucionEducativa ? perfil && perfil.InstitucionEducativa : 'Institucion Educativa'} ｜ {perfil && perfil.NivelEducacional ? perfil && perfil.NivelEducacional : 'Nivel Educacional'}</b></h6>
                                    <p>{perfil && perfil.Descripcion ? perfil && perfil.Descripcion : 'descripcion del trabajo:Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, numquam? Culpa quasi'} </p>
                                </div>
                            </div>
                            <div className="container-fluid contInfo">
                                <a href={`http://localhost:3000/uploads/${perfil && perfil.ArchivoPDF2}`} download target='_blank' style={{ color: "black" }}><u> Cert. de estudios PDF</u></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default EditarCv;