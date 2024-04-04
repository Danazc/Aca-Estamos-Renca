import React, { useState, useEffect } from 'react';
import Loading from '../Efectos/Loading';
import LayoutAdmin from "../Layout/LayoutAdmin"
import PanelAdmin from '../componentes/PagesAdministrador/PanelAdmin/PanelAdmin';

const PerfilAdmin = () => {
  const [loading, setLoading] = useState(true);

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
              <LayoutAdmin>                 
                  <PanelAdmin/>               
              </LayoutAdmin>
          )}
      </>
  );
};

export default PerfilAdmin;

