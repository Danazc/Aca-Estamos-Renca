import './PerfilUsuario.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import client from '../../../Utils/axios.Client';
import getUserId from '../../../Utils/getUserId';
import dayjs from "../../../Utils/dayjs";


const PerfilUsuario = ({id}) => {

    const [perfil, setPerfil] = useState(null);

    useEffect(() => {
        const obtenerPerfil = async () => {
            try {
                
                const response = await client.get(`http://localhost:3000/Obtener-Perfil/${id ??getUserId()}`);
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
            <h2 className="mi-perfil"><br />Mi perfil</h2>

            <main className="perfilusuario">
                <div className="container-fluid" style={{ fontFamily: 'Poppins-Regular', backgroundColor: 'rgba(4, 157, 217, 0.15)', borderRadius: '10px' }}>
                    <div className="row-perfil">
                        <div className="col-perfil1">
                            <img src={perfil && perfil.ImagenPerfil ? `http://localhost:3000/uploads/${perfil.ImagenPerfil}` : "../Img/user-perfil.png"} alt="Imagen perfil" id="user-perfil" />
                        </div>
                        <div className="col-perfil2">
                            <h3 className="Nombre-perfil">{perfil && perfil.Nombre} {perfil && perfil.Apellido}</h3>
                            <ul className="Elementos-perfil">
                                <li><span><b>Disponibilidad:</b> {perfil && perfil.Disponibilidad}</span></li>
                                <li><span><b>Estado Civil:</b> {perfil && perfil.EstadoCivil} ｜ <b>Fecha de nacimiento:</b>  {perfil && dayjs(perfil.FechaNacimiento).format('DD [de] MMMM [de] YYYY')}</span></li>
                                <li><span><b>LinkedIn:</b> {perfil && perfil.LinkedIn}</span></li>
                                <li><span><b>Rubro de interés:</b> {perfil && perfil.Rubro}</span></li>
                            </ul>
                        </div>
                        <div className="col-perfil3">
                            <div className="actualizar-datos">
                                <p><Link to="/Actualizar-Datos-Perfil">Actualizar datos Perfil</Link></p>
                                <Link to="/Actualizar-Datos-Perfil"><img src="../Img/pen-edit.png" alt="Editar perfil icon" id="pen-edit" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="elementos-adjuntos">
                        <div className="row">
                            <div className="col">
                                <h3 style={{ marginTop: '40px' }}>Archivos Adjuntos</h3>
                                <ul className="certificadoslist">
                                    <li><a href={`http://localhost:3000/uploads/${perfil && perfil.ArchivoPDF1}`} download target='_blank'>CV</a></li>
                                    <li><a href={`http://localhost:3000/uploads/${perfil && perfil.ArchivoPDF2}`} download target='_blank'>Certificados de Estudios</a></li>
                                    <li><a href={`http://localhost:3000/uploads/${perfil && perfil.ArchivoPDF3}`} download target='_blank'>Certificado de Antecedentes</a></li>
                                    <li><a href={`http://localhost:3000/uploads/${perfil && perfil.ArchivoPDF4}`} download target='_blank'>Certificado de Cursos</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <div className="colcv">
                                    <p><Link to="/Mostrar-CV">Mostrar CV Generado</Link></p>
                                    <Link to="/Mostrar-CV"><img src="../Img/mostrar.png" alt="Mostrar perfil icon" id="mostrar-perfil" /></Link>
                                    <p><Link to="/Actualizar-Cv">Actualizar y crear CV</Link></p>
                                    <Link to="/Actualizar-Cv"><img src="../Img/pen-edit.png" alt="Editar perfil icon" id="pen-edit" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default PerfilUsuario;