import { Link } from 'react-router-dom';
import './NavbarAdmin.css'

const NavbarAdmin = () => {

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        window.location.href = '/';
    }

    return (
        <>
            <header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="container-fluid text-light p-3" style={{ backgroundColor: '#83A637' }}>
                            <nav className="navbar navbar-expand-lg ">
                                <div className="container-fluid" style={{ backgroundColor: '#83A637' }} id="greenContainer">

                                    <div>
                                        <Link to="/Perfil-Admin" className="navbar-brand">
                                            <img src="/Logos/logo2.0.png" alt="Bootstrap" width="100" height="100" id="hire" />
                                        </Link>                                    </div>
                                    <div className="ml-4" id="hashtagDelInicio">
                                        <p className="mb-0">#RencaOrgullosa</p>
                                        <p className="mb-0">#RencaCrece</p>
                                        <p className="mb-0">#RencaParticipa</p>
                                    </div>
                                    <div className="container-fluid gap-5 d-md-flex justify-content-md-end p-4 secondNav" style={{ justifyContent: 'flex-end' }} id="botonesnav">
                                      

                                        <button className="btn nav-item dropdown btn-m userButton userN" style={{ backgroundColor: '#049DD9' }}>
                                            <a className="nav-link dropdown-toggle userName" href="#" id="navbarDropdown" role="button"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Administrador
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right position-absolute top-100 start-0" aria-labelledby="navbarDropdown">
                                                {/* Agrega cualquier elemento adicional del menú desplegable según sea necesario */}
                                                <Link to="/Visualizacion-Empresas-Admin" className="dropdown-item" >
                                                    <i className="fa-solid fa-building" style={{ color: "#D95525" }}></i> <b>Empresas</b>
                                                </Link>
                                                <Link to="/Visualizacion-Usuario-Admin" className="dropdown-item" href="#"><i class="fa-solid fa-user" style={{ color: "#049DD9" }}></i> <b>Postulantes</b></Link>


                                                {/* <a className="dropdown-item" href="#"><i className="fa-solid fa-toggle-on" style={{ color: "#83A637" }}></i><b> Operativo</b></a> */}
                                                {/* <a className="dropdown-item" href="#">     Activos</a>
                                                    <a className="dropdown-item" href="#">     Inactivos</a> */}
                                                <a className="dropdown-item" href="#" onClick={handleLogout}><i className="fa-solid fa-door-open" style={{ color: "#D97D0D" }}></i><b> Cerrar sesión</b></a>

                                                {/* <a className="dropdown-item" href="#">Item 4</a> */}
                                                {/* ... */}
                                            </div>
                                        </button>
                                        {/* </div> */}
                                    </div>

                                </div>
                            </nav>
                        </div>

                        <div className="container-fluid" style={{ backgroundColor: '#f2f7ea' }}>
                            <nav className="navbar navbar-expand-lg  ">
                                <div className="container-fluid justify-content-center " style={{ backgroundColor: '#f2f7ea' }}>
                                    <Link to="/Perfil-Admin" style={{ textDecoration: 'none', color:'black'}}>
                                    <h2 className='AdminNav'> Administrador Acá Estamos
                                    </h2>
                                    </Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavbarAdmin