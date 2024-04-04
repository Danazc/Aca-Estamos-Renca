import React, { useState } from "react"
import "./FiltroAdmin.css"

const FiltroAdmin = ({ searchTerm, setSearchTerm, filters, setFilters}) => {
    const [isVisible, setIsVisible] = useState(false);
    

    const toggleVisibility = (event) => {
        setIsVisible(!isVisible);
        event.preventDefault();
    };

    const handleChange = (event, field) => {
        console.log({ event, field });
        const value = event.target.value;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [field]: value,
        }));
        
    };


    const removerFiltros = () => {
        setFilters({
            disponibilidad: "",
        //   actividad: "",
          rubro: "",
        //   experiencia: 0,
        });
      };

    return (
        <>

            <div className=" row buscador" style={{ fontFamily: 'Poppins-Regular' }}>
                <form className="d-flex container-fluid" role="search" id="buscar-ofertas">
                    {/* <div className='d-flex col-10 align-items-center buscadorLupa' style={{ marginRight: '0px' }}> */}
                    <div className='col-9 me-4 searchButton' >
                        <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="form-control " type="search" placeholder="Buscador..." aria-label="Buscador..." style={{ height: '48px' }} />
                    </div>
                    <div className='col-1  divLupa'>
                        <button className="btn btn-outline-success" >
                            <i className="fa-solid fa-magnifying-glass img-fluid lupa" style={{ color: 'black', fontSize: '23px', width: '48px', height: '35px' }}></i>
                        </button>
                    </div>
                    {/* </div> */}
                    <div className='col-2 colina'>
                        <button style={{ backgroundColor: '#049DD9', width: '120px', height: '48px' }} className="btn btn-outline-light moreFiltros" type="submit" onClick={toggleVisibility}>Más filtros</button>
                    </div>
                </form>
            </div>
            {/* Termina el buscador */}

            {/* Comienzan los filtros */}
            <div style={{ display: isVisible ? 'block' : 'none' }}>
                <div className=" filtroAdmin row filtros-row" style={{ fontFamily: 'Poppins-Regular' }}>
                    
                    {/* <div className="col-md-2 filtros-col">
                        <select className="form-select" aria-label="Default select example" onChange={(e) => handleChange(e, "perfil")} value={filters?.perfil} placeholder="Seleccione perfil">
                            <option value="" disabled selected hidden>Perfiles</option>
                            <option value="1">Usuarios</option>
                            <option value="2">Empresas</option>

                        </select>
                    </div> */}
                    <div className="col-md-2 filtros-col">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => handleChange(e, "disponibilidad")} value={filters?.disponibilidad} placeholder="Seleccione disponibilidad">
                        <option value="" disabled selected hidden>Disponibilidad</option>
                        <option value="Disponible">Disponible</option>
                        <option value="En búsqueda activa">En búsqueda activa</option>
                        <option value="No disponible">No disponible</option>

                    </select>
                </div>

                    {/* <div className="col-md-2 filtros-col">
                        <select className="form-select" aria-label="Default select example" onChange={(e) => handleChange(e, "actividad")} value={filters?.actividad} placeholder="Seleccione actividad" >
                            <option value="" disabled selected hidden>Actividad</option>
                            <option value="1">Activo</option>
                            <option value="2">Inactivo</option>
                        </select>
                    </div> */}
                    <div className="col-md-2 filtros-col">
                        <select className="form-select" aria-label="Default select example" onChange={(e) => handleChange(e, "rubro")} value={filters?.rubro} placeholder="Seleccione rubro">
                            <option value="" disabled selected hidden>Rubro</option>
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

                    {/* <div className="col-md-3 filtros-col">
                        <label htmlFor="customRange2" className="form-label">Años de Experiencia</label>
                        <input type="range" className="form-range" style={{ paddingBottom: '5px' }} min="0" max="40" id="customRange2" value={valorRango} onChange={handleInput} />
                        <h6 className="contador">{valorRango}</h6>
                    </div> */}
                    
                </div>
                <div className='container-fluid botonfiltro' style={{ alignContent: 'center' }}>
                    <button className='btn btn-lg btn-primary botonFiltro' type='button' onClick={() => removerFiltros()}>Remover filtros</button>
                </div>

            </div>
        </>
    )
}

export default FiltroAdmin;