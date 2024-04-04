import Layout from "../Layout/Layout";
import VisualizacionCv from "../componentes/PagesUsuario/VisualizacionCV/VisualizacionCv";
import { useParams } from 'react-router-dom';

const MostrarCV = () => {
  const { id } = useParams();
  return (
    <Layout>
      <VisualizacionCv id={id}/>
    </Layout>
  )
}

export default MostrarCV;