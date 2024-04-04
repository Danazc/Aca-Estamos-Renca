
import Footer from "../componentes/Footer/Footer";
import NavbarEmpresa from "../componentes/NavbarEmpresa/NavbarEmpresa";
import { useState, useEffect } from "react";
import Navbar from "../componentes/Navbar/Navbar";
const LayoutEmpresa = ({ children }) => {

const [estaLogeado, setEstaLogeado] = useState(false);

useEffect(() => {
  if (localStorage.getItem("accessToken")) {
    setEstaLogeado(true);
  } else {
    setEstaLogeado(false);
  }
}, []);



  return (
    
     <>
     
     {estaLogeado ? <NavbarEmpresa/> : <Navbar />}   
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </>
  );
};

export default LayoutEmpresa;
