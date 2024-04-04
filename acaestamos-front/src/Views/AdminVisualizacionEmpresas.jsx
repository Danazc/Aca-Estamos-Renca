import LayoutAdmin from "../Layout/LayoutAdmin"
import VisualizacionEmpresas from "../componentes/PagesAdministrador/VisualizacionEmpresas/VisualizacionEmpresas";
import FiltroAdmin from "../componentes/Filtros/FiltroAdmin/FiltroAdmin";

const AdminVisualizacionEmpresas = () => {
  return (
    <LayoutAdmin>
      <FiltroAdmin />
      <VisualizacionEmpresas />
    </LayoutAdmin>
  )
}
export default AdminVisualizacionEmpresas;