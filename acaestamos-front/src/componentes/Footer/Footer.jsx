import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="barracolor">
                    <div className="color1"> </div>
                    <div className="color2"> </div>
                    <div className="color3"> </div>
                    <div className="color4"> </div>
                </div>
                <div className="container-fluid">
                    <div className="footer-row">
                        <div className="footer-info1">
                            <ul className="logosred">
                                <a href="https://www.youtube.com/channel/UCEOLXqeFxbHD4OSsSoUPXNg"> <img src="../Logos/youtube.png" alt="YouTube"></img></a>
                                <a href="https://www.instagram.com/muni_renca/"> <img src="../Logos/icon_instagram.png" alt="Instagram"></img></a>
                                <a href="https://web.facebook.com/MuniRenca/?_rdc=1&_rdr"> <img src="../Logos/icon_facebook.png" alt="Facebook"></img></a>
                                <a href="https://www.flickr.com/photos/153772620@N02"> <img src="../Logos/icon_Flickr.png" alt="Flickr"></img></a>
                                <a href="https://twitter.com/Muni_Renca"> <img src="../Logos/twitter.png" alt="Twitter"></img></a>
                            </ul>
                            <ul id="datosfooter">
                                <li><a>lafabrica@renca.cl</a></li>
                                <li><a>Horario de atención:</a></li>
                                <li><a>De lunes a jueves de 9:00 a 13:00 y de 14:00 a 17:00 hrs.</a></li>
                                <li><a>Viernes de 9:00 a 13:00 y de 14:00 a 16:00 hrs.</a></li>
                            </ul>
                        </div>
                        <div className="footer-info2">
                            <div className="renca">
                                <p className="orgullosa">#RencaOrgullosa</p>
                                <p className="crece">#RencaCrece</p>
                                <p className="participa">#RencaParticipa</p>
                            </div>
                        </div>
                        <div className="footer-info3">
                            <div className="logos-container">
                                <a href="https://lafabricaderenca.cl"> <img src="../Logos/logolafabrica.png" alt="La Fabrica de Renca"></img></a>
                                <a href="https://renca.cl"> <img src="../Logos/logo-renca.png" alt="Renca"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
