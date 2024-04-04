
import Navbar from "../componentes/Navbar/Navbar";
import Footer from "../componentes/Footer/Footer";
import { useState, useEffect } from "react";
import NavbarLogin from "../componentes/NavbarLogin/NavbarLogin";

const Layout = ({ children }) => {
  const [estaLogeado, setEstaLogeado] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setEstaLogeado(true);
    } else {
      setEstaLogeado(false);
    }
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
     
      {estaLogeado ? <NavbarLogin /> : <Navbar />}
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
