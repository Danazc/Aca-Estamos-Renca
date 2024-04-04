import React, { useState, useEffect } from 'react';
import Loading from '../Efectos/Loading';
import PerfilEmpresa from "../componentes/PagesEmpresas/PerfilEmpresa/PerfilEmpresa";
import LayoutEmpresa from '../Layout/LayoutEmpresa';
import { useParams } from 'react-router-dom';


const PerfilEmpresas = () => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  useEffect(() => {
      setTimeout(() => {
          setLoading(false);
      }, 1000);
  }, []);

  return (
      <>
          {loading ? (
              <Loading />
          ) : (
              <>
                <LayoutEmpresa>      
                  <PerfilEmpresa id={id}/>
                  </LayoutEmpresa>
              </>
          )}
      </>
  );
};

export default PerfilEmpresas;

