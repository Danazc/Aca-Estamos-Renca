import Footer from "../componentes/Footer/Footer";
import Header from "../componentes/Header/Header";
import Navbar from "../componentes/Navbar/Navbar";
import InfoEmpresa from "../componentes/PagesEmpresas/InfoEmpresa/InfoEmpresa";
import EditInfoEmpresa from "../componentes/PagesEmpresas/EditInfoEmpresa/EditInfoEmpresa";
import EditarCv from "../componentes/PagesUsuario/EditarCv/EditarCv"
import FormularioRegistro from "../componentes/FormularioRegistro/Formularioregistro"
import NavbarLogin from '../componentes/NavbarLogin/NavbarLogin'
import Nosotros from '../componentes/Nosotros/Nosotros'
import NavbarAdmin from "../componentes/NavbarAdmin/NavbarAdmin";
import PanelAdmin from "../componentes/PagesAdministrador/PanelAdmin/PanelAdmin"
import VisualizacionEmpresas from "../componentes/PagesAdministrador/VisualizacionEmpresas/VisualizacionEmpresas"
const TestCaro = () => {
    return (
      <>
      {/* <Header /> */}
      {/* <Navbar /> */}
      {/* <NavbarLogin /> */}
      <NavbarAdmin />
      <PanelAdmin />
      {/* <EditarCv /> */}
      {/* <InfoEmpresa /> */}
      {/* <EditInfoEmpresa /> */}
      {/* <FormularioRegistro /> */}
      <VisualizacionEmpresas />
      <Footer />
      </>
    )
  }
  
  export default TestCaro;