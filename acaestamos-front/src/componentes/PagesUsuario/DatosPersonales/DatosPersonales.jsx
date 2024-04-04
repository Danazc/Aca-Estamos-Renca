import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DatosPersonales.css';
import client from '../../../Utils/axios.Client';
import getUserId from '../../../Utils/getUserId';
import { useAlert } from '../../../Efectos/useAlert'


const DatosPersonales = () => {

    //Definicion de constantes
    const [perfil, setPerfil] = useState(null);
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [Telefono, setTelefono] = useState('');
    const [EstadoCivil, setEstadoCivil] = useState('');
    const [LinkedIn, setLinkedIn] = useState('');
    const [Rubro, setRubro] = useState('');
    const [Disponibilidad, setDisponibilidad] = useState('');
    const [ArchivoPDF1, setArchivoPDF1] = useState(null);
    const [ArchivoPDF2, setArchivoPDF2] = useState(null);
    const [ArchivoPDF3, setArchivoPDF3] = useState(null);
    const [ArchivoPDF4, setArchivoPDF4] = useState(null);
    const [ImagenPerfil, setImagenPerfil] = useState(null);

    //Usa el hook useAlert para obtener el estado y la API de alerta
    const [alertState, alertApi] = useAlert("alertsElement");

    //Definicion de funciones
    const showAlert = () => {

        let hasError = true;

        if (!Nombre || !Apellido || !Telefono || !Rubro || !EstadoCivil || !LinkedIn) {
            alertApi.show("¡No llenaste correctamente los datos solicitados!", 'error');
            hasError = false;

            return hasError;
        }
    };

    useEffect(() => {
        const obtenerPerfil = async () => {
            try {

                const response = await client.get(`/Obtener-Perfil/${getUserId()}`)
                setPerfil(response?.data);

                if (response?.data?.Nombre) setNombre(response?.data?.Nombre);
                if (response?.data?.Apellido) setApellido(response?.data?.Apellido);
                if (response?.data?.Telefono) setTelefono(response?.data?.Telefono);
                if (response?.data?.EstadoCivil) setEstadoCivil(response?.data?.EstadoCivil);
                if (response?.data?.LinkedIn) setLinkedIn(response?.data?.LinkedIn);
                if (response?.data?.Rubro) setRubro(response?.data?.Rubro);
                if (response?.data?.Disponibilidad) setDisponibilidad(response?.data?.Disponibilidad);
                if (response?.data?.ArchivoPDF1) setArchivoPDF1(response?.data?.ArchivoPDF1);
                if (response?.data?.ArchivoPDF2) setArchivoPDF2(response?.data?.ArchivoPDF2);
                if (response?.data?.ArchivoPDF3) setArchivoPDF3(response?.data?.ArchivoPDF3);
                if (response?.data?.ArchivoPDF4) setArchivoPDF4(response?.data?.ArchivoPDF4);
                if (response?.data?.ImagenPerfil) setImagenPerfil(response?.data?.ImagenPerfil);


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


    const navigate = useNavigate();

    const handleArchivoPDF1Change = (e) => {
        setArchivoPDF1(e.target.files[0]);
    };

    const handleArchivoPDF2Change = (e) => {
        setArchivoPDF2(e.target.files[0]);
    };

    const handleArchivoPDF3Change = (e) => {
        setArchivoPDF3(e.target.files[0]);
    };

    const handleArchivoPDF4Change = (e) => {
        setArchivoPDF4(e.target.files[0]);
    };

    const handleImagenPerfilChange = (e) => {
        setImagenPerfil(e.target.files[0]);
    };

    const GuardarPerfil = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('Nombre', Nombre);
            formData.append('Apellido', Apellido);
            formData.append('Telefono', Telefono);
            formData.append('EstadoCivil', EstadoCivil);
            formData.append('Rubro', Rubro);
            formData.append('Disponibilidad', Disponibilidad);
            formData.append('LinkedIn', LinkedIn);
            formData.append('ArchivoPDF1', ArchivoPDF1);
            formData.append('ArchivoPDF2', ArchivoPDF2);
            formData.append('ArchivoPDF3', ArchivoPDF3);
            formData.append('ArchivoPDF4', ArchivoPDF4);
            formData.append('ImagenPerfil', ImagenPerfil);

            const userId = getUserId();
            const response = await client.post(`http://localhost:3000/Guardar-Datos-Personales/${userId}`, formData);

            console.log(response.data);
            navigate('/Perfil-Usuario')
        } catch (error) {
            console.error('Error al guardar el perfil:', error);
        }
    };


    return (
        <>

            <div id="Datos-personales" style={{ margin: '50px auto', maxWidth: '800px' }}>
                <div
                    className="border p-4"
                    style={{
                        fontFamily: 'Poppins-Regular',
                        margin: '50px auto 50px auto',
                        backgroundColor: 'rgba(4, 157, 217, 0.15)',
                        borderRadius: '10px',
                        borderStyle: 'solid',
                        borderColor: 'black',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <h2 style={{ fontFamily: 'Heavitas' }} className="text-center">
                        Datos Personales
                    </h2>
                    <div className="form-Datospersonales">
                        <form onSubmit={GuardarPerfil} encType="multipart/form-data">
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="nombres" className="form-label">
                                            Nombre:
                                        </label>
                                        <input type="text" className="form-control" id="nombres" defaultValue={perfil && perfil.Nombre} onChange={(e) => setNombre(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="apellidos" className="form-label">
                                            Apellido:
                                        </label>
                                        <input type="text" className="form-control" id="apellidos" defaultValue={perfil && perfil.Apellido} onChange={(e) => setApellido(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telefono" className="form-label">
                                            Teléfono:
                                        </label>
                                        <input type="text" className="form-control" id="telefono" defaultValue={perfil && perfil.Telefono} onChange={(e) => setTelefono(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="estadoCivil" className="form-label">
                                            Estado Civil:
                                        </label>
                                        <input type="text" className="form-control" id="estadoCivil" placeholder="Ejemplo: Soltero" defaultValue={perfil && perfil.EstadoCivil} onChange={(e) => setEstadoCivil(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="RubroOpciones" className="form-label">
                                            Rubro de interés:
                                        </label>
                                        <select className="form-select" id="disponibilidadOpciones" value={Rubro} onChange={(e) => setRubro(e.target.value)}>
                                            <option value="Administración">Administración</option>
                                            <option value="Agropecuaria">Agropecuaria</option>
                                            <option value="Alimenticia">Alimenticia</option>
                                            <option value="Arquitectura">Arquitectura</option>
                                            <option value="Artesanal">Artesanal</option>
                                            <option value="Automotriz">Automotriz</option>
                                            <option value="Banca/Financiera">Banca/Financiera</option>
                                            <option value="Bioteconología">Bioteconología</option>
                                            <option value="Call-Center">Call-Center</option>
                                            <option value="Comercio">Comercio</option>
                                            <option value="Comercio exterior">Comercio exterior</option>
                                            <option value="Comunicaciones">Comunicaciones</option>
                                            <option value="Construcción">Construcción</option>
                                            <option value="Consultoría">Consultoría</option>
                                            <option value="Correo">Correo</option>
                                            <option value="Defensa">Defensa</option>
                                            <option value="Diseño">Diseño</option>
                                            <option value="Editorial">Editorial</option>
                                            <option value="Educación">Educación</option>
                                            <option value="Energía">Energía</option>
                                            <option value="Entretenimiento">Entretenimiento</option>
                                            <option value="Farmacéutica">Farmacéutica</option>
                                            <option value="Ferroviaria">Ferroviaria</option>
                                            <option value="Financiera">Financiera</option>
                                            <option value="Gastronomía">Gastronomía</option>
                                            <option value="Hotelería/Turismo">Hotelería/Turismo</option>
                                            <option value="Imprenta">Imprenta</option>
                                            <option value="Industrial">Industrial</option>
                                            <option value="Información e investigación">Información e investigación</option>
                                            <option value="Informática">Informática</option>
                                            <option value="Ingeniería">Ingeniería</option>
                                            <option value="Inmobiliaria">Inmobiliaria</option>
                                            <option value="Internet">Internet</option>
                                            <option value="Laboratorio">Laboratorio</option>
                                            <option value="Legal">Legal</option>
                                            <option value="Logística/Transporte">Logística/Transporte</option>
                                            <option value="Manufactura">Manufactura</option>
                                            <option value="Medios">Medios</option>
                                            <option value="Publicidad">Publicidad</option>
                                            <option value="Recursos Humanos">Recursos Humanos</option>
                                            <option value="Retail">Retail</option>
                                            <option value="Salud">Salud</option>
                                            <option value="Seguridad">Seguridad</option>
                                            <option value="Seguros">Seguros</option>
                                            <option value="Servicios">Servicios</option>
                                            <option value="Tecnología">Tecnología</option>
                                            <option value="Telecomunicaciones">Telecomunicaciones</option>
                                            <option value="Textil">Textil</option>
                                            <option value="Transporte">Transporte</option>
                                            <option value="Turismo">Turismo</option>
                                            <option value="Veterinaria">Veterinaria</option>
                                            <option value="Otros">Otros</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="disponibilidadOpciones" className="form-label">
                                            Disponibilidad:
                                        </label>
                                        <select className="form-select" id="disponibilidadOpciones" value={Disponibilidad} onChange={(e) => setDisponibilidad(e.target.value)}>
                                            <option value="Disponible">Disponible</option>
                                            <option value="En búsqueda activa">En búsqueda activa</option>
                                            <option value="No Disponible">No disponible</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <label htmlFor="perfilLinkedIn" className="form-label">
                                            Perfil LinkedIn:
                                        </label>
                                        <input type="text" className="form-control" id="perfilLinkedIn" placeholder="Inserte URL de su perfil" defaultValue={perfil && perfil.LinkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">CV PDF:</label>
                                        <input className="form-control" type="file" name="ArchivoPDF1" accept=".pdf" onChange={handleArchivoPDF1Change} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Certificados de Estudios:</label>
                                        <input className="form-control" type="file" name="ArchivoPDF2" accept=".pdf" onChange={handleArchivoPDF2Change} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Certificado de Antecedentes:</label>
                                        <input className="form-control" type="file" name="ArchivoPDF3" accept=".pdf" onChange={handleArchivoPDF3Change} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Certificados de Cursos:</label>
                                        <input className="form-control" type="file" name="ArchivoPDF4" accept=".pdf" onChange={handleArchivoPDF4Change} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Foto Perfil:</label>
                                        <input className="form-control" type="file" name="ImagenPerfil" accept="image/png, image/jpeg" onChange={handleImagenPerfilChange} />
                                    </div>
                                </div>
                            </div>
                            {/* Muestra la alerta si está visible */}
                            {alertState.visible && (
                                <div id="alertsElement" className={`alert ${alertState.type}`}>
                                    {alertState.message}
                                </div>
                            )}
                            <div className="d-flex justify-content-center">
                                <Link to="/Perfil-Usuario" type="button" className="btn btn-secondary btn-lg me-2">
                                    Cancelar
                                </Link>
                                <button type="submit" className="btn btn-primary btn-lg" onClick={showAlert}>
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default DatosPersonales;
