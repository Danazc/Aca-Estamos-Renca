import React from 'react';
import './Nosotros.css'

const AboutUs = () => {
    return (
        <>
        <div className="logoNosotros">
                <img src='./Logos/logo2.0.png'></img>
                </div>
                
            <div className="containerNosotros">
                <article>
                    <h2>Sobre Nosotros</h2>
                    <br />
                    <p>Somos Acá Estamos, un proyecto de la Municipalidad de Renca en colaboración con OMIL, que funciona como una red de contacto entre empresas y personas de la comuna. Nuestra misión es facilitar a las empresas de Renca la búsqueda de empleados de calidad directamente en la comuna, brindando oportunidades laborales locales.</p>
                    <br />
                    <p>En Chile, el desempleo y la precariedad laboral son desafíos importantes. Según datos del Instituto Nacional de Estadísticas (INE), la tasa de desempleo en el país alcanzó el 9,7% en el último trimestre medido, afectando especialmente a los jóvenes y a ciertas regiones como la Metropolitana.</p>
                    <br />
                    <p>Acá Estamos es la plataforma ideal para empresas que desean encontrar talento local. Ofrecemos un espacio donde las empresas pueden visualizar perfiles de profesionales de Renca y contactar directamente a los candidatos que se ajusten a sus necesidades laborales, creando así un vínculo laboral sólido y beneficioso para ambas partes.</p>
                    <br />
                    <p>¡Únete a Acá Estamos y sé parte de esta comunidad que impulsa el empleo y el desarrollo local!</p>
                </article>
            </div>

        </>

    );
};

export default AboutUs;
