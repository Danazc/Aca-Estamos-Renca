import './InfoEmpresa.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import client from '../../../Utils/axios.Client';
import getUserId from '../../../Utils/getUserId';

const InfoEmpresa = ({id}) => {

    const [PerfilE, setPerfilE] = useState(null);

    useEffect(() => {
        const obtenerPerfilE = async () => {
            try {
                
                const response = await client.get(`http://localhost:3000/Obtener-Perfil-Empresa/${id ??getUserId()}`);
                setPerfilE(response.data);
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

        obtenerPerfilE();
    }, []);

    return (
        <>
            <main className="d-flex justify-content-center">
                <div className="container-fluid p-6 mb-5 rounded w-60 p-4 h-50 text-center ContainerEmp" style={{ backgroundColor: "#03a6883b" }}>
                    <div className="row justify-content-center nameEmpresa p-3" style={{ backgroundColor: "#03A688" }}>
                        <div className="col-11 colEmpresa">
                            <h1 className="nameE" style={{ color: "white", fontFamily: "Heavitas" }}>NOMBRE DE LA EMPRESA</h1>
                        </div>
                        {/* <!-- No borren este punto, es para agrandar el contenedor del nombre --> */}
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-5 firstColE" style={{ backgroundColor: "#D9D9D9" }}>
                            <div className="row container-fluid containerItemsE p-2 justify-content-center" style={{ backgroundColor: "#03A688" }}>
                                <div className="col-10">
                                    <h5 className="itemsE">QUIÉNES SOMOS</h5>
                                </div>
                            </div>
                            <div className="container-fluid infoEmpresa">
                            <h6><b><i>Rubro de la empresa: {PerfilE && PerfilE.Rubro} </i></b></h6>
                                <p>{PerfilE && PerfilE.Acercade ?
                                PerfilE && PerfilE.Acercade : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, perspiciatis non veniam'}</p>
                                <h6><b><i>Página WEB: <a href={PerfilE && PerfilE.Url} target="_blank" rel="noopener noreferrer">{PerfilE && PerfilE.Url}</a></i></b></h6>
                            </div>
                            <div className="row container-fluid containerItemsE p-2 justify-content-center" style={{ backgroundColor: "#03A688" }}>
                                <div className="col-10">
                                    <h5 className="itemsE">TRAYECTORIA</h5>
                                </div>
                            </div>
                            <div className="container-fluid infoEmpresa">
                            <h6><b><i>Número de empleados: {PerfilE && PerfilE.Numeroempleados} </i></b></h6>
                                <p>{PerfilE && PerfilE.Trayectoria ?
                                PerfilE && PerfilE.Trayectoria : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, perspiciatis non veniam'}</p>
                            </div>
                            <div className="row container-fluid containerItemsE p-2 justify-content-center" style={{ backgroundColor: "#03A688" }}>
                                <div className="col-10">
                                    <h5 className="itemsE">CONTACTO</h5>
                                </div>
                            </div>
                            <div className="contactEmp">
                                <ul>
                                    <p><i className="fa-solid fa-phone" style={{color: 'black'}}></i> {PerfilE && PerfilE.Telefono}</p>
                                    <p><i className="fa-brands fa-linkedin" style={{color: 'black'}}> </i> {PerfilE && PerfilE.LinkedIn ? PerfilE && PerfilE.LinkedIn : 'linkedin.com/milinkedin'}</p> {/* <!-- arreglar esto para que los lonks largos se vean facheros --> */}
                                    <p><i className="fa-solid fa-envelope" style={{color: 'black'}}></i> {PerfilE && PerfilE.CorreoContacto ? PerfilE && PerfilE.CorreoContacto : 'correocontacto@gmail.com'}</p>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 secondColE">
                            <div className="row container-fluid  EmpContent justify-content-center">
                                <div>
                                    <img className="imagen" src={PerfilE && PerfilE.ImagenEmpresa ? `http://localhost:3000/uploads/${PerfilE.ImagenEmpresa}` : "/Img/LogoCompany.png"} alt="Bootstrap" />
                                </div>
                            </div>
                            <div className="row container-fluid p-2 justify-content-center">
                                <div className="col-10">
                                    <h4 className="itemsE">UBICACIÓN</h4>
                                </div>
                                <div className="infoEmpresa">
                                <p>{PerfilE && PerfilE.Ubicacion ?
                                PerfilE && PerfilE.Ubicacion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, perspiciatis non veniam'}</p>
                                </div>
                            </div>
                            <div className="container-fluid infoEmpresa">
                                {/* IMAGEN GOOGLE MAPS */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}

export default InfoEmpresa