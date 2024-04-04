import './Index.css';
import { useState, useEffect } from 'react';
import Loading from '../../Efectos/Loading';



const Index = () => {
    const [loading, setLoading] = useState(true)
    useEffect(()=> {
        setTimeout(() => {
            setLoading(false);

        }, 2000);
    }, [])
    return (
        <>
        {
            loading ? <Loading/> : 
        
            <section>
                <div className="container-fluid">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-touch="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="./Img/carrusel1.png" id="img-carrusel" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./Img/carrusel2.png" id="img-carrusel" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="./Img/carrusel3.png" id="img-carrusel" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="h2-conecta">
                        <h2 className="h3-testimnios">Se parte de nosotros</h2>
                    </div>
                    <div className="contenido-card">
                        <div className="Paso">
                            <div className="step">
                                <img src="./Img/Nota-registrate.png" alt="Paso 1"></img>
                                <div className="contenedor-h3-card">
                                    <h3 className="h3-card">Regístrate</h3>
                                </div>


                            </div>
                        </div>

                        <div className="Paso">
                            <div className="step">
                                <img src="./Img/Nota-curriculum.png" alt="Paso 2"></img>
                                <div className="contenedor-h3-card">
                                    <h3 className="h3-card">Haz tu CV </h3>
                                </div>

                            </div>
                        </div>

                        <div className="Paso">
                            <div className="step">
                                <img src="./Img/Conecta-Nota3.png" alt="Paso 3"></img>
                                <div className="contenedor-h3-card">
                                    <h3 className="h3-card">Conecta</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='btn-chat'>
            <img src='./Img/chatbot.png'></img>
        </div>

                <div className="container-fluid">
                    <h2 className="h2-empleos text-fluid">¡Colaboradores!</h2>
                </div>

                <div className="contenido-Testimonios">
                    <div className="container-testimonios">
                        <h4 className="h3-testimnios">Ellos Confian en Nosotros</h4>
                        <div className="container-color">
                            <div className="color-linea"></div>
                        </div>
                    </div>
                </div>
                <div className="contenido-empleos">

                    <div className="container-my-5">
                        <div className="container-fluid">

                            <div className="row">
                                <div className="col-6 col-md-3">
                                    <div className="img">
                                        <img src="./Img/CCU-empresas.jpg" className="img-fluid" alt="CCU"></img>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="img">
                                        <img src="./Img/bancochile-empresas.jpg" className="img-fluid" alt="Banco Chile"></img>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="img">
                                        <img src="./Img/COCACOLA-Empresas.jpg" className="img-fluid" alt="Coca Cola"></img>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="img">
                                        <img src="./Img/costanera-empresas.jpg" className="img-fluid" alt="Costanera"></img>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="img">
                                        <img src="./Img/DO_Smart-Empresas.jpg" className="img-fluid" alt="DO Smart"></img>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="img">
                                        <img src="./Img/HUELLALOCAL-Empresas.png" className="img-fluid" alt="Huella Local"></img>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="img">
                                        <img src="./Img/SODIMAC-Empresas.png" className="img-fluid" alt="Huella Local"></img>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="img">
                                        <img src="./Img/SOPROLE-Empresas.png" className="img-fluid" alt="Huella Local"></img>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="img">
                                        <img src="./Img/Generation-Empresas.png" className="img-fluid" alt="Huella Local"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="contenido-Testimonios">
                    <div className="container-testimonios">
                        <h2 className="h3-testimnios">Testimonios</h2>
                        <div className="container-color">
                            <div className="color-linea"></div>
                        </div>
                    </div>

                    <div className="contenedor-testis">
                        <div className="row">
                            <div className="img-testimonios1">
                                <div className="over-1">
                                    <div className="text-over">
                                        <h3 className="h3-over">Ricardo Caceres</h3>
                                        <p className="p-1">Gracias a Acá Estamos conseguí el trabajo de mis sueños.</p>
                                    </div>

                                </div>
                            </div>
                            <div className="img-testimonios2">
                                <div className="over-2">
                                    <div className="text-over">
                                        <h3 className="h3-over">Fernando Reyes</h3>
                                        <p className="p-2">Gracias a esta página pude hacer que mi currículum fuese más visible y atractivo para las empresas.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="img-testimonios3">
                                <div className="over-3">
                                    <div className="text-over">
                                        <h3 className="h3-over">Dayana Mendoza</h3>
                                        <p className="p-3">Pude conseguir un trabajo en mi comuna de algo que me apasiona, su ayuda con el currículum fue la
                                            clave para conseguir conectar con la empresa.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            }
        </>

    )
}

export default Index;