import React, { useState, useEffect } from 'react';
import Loading from '../Efectos/Loading';
import Layout from "../Layout/Layout";
import PerfilUsuario from '../componentes/PagesUsuario/PerfilUsuario/PerfilUsuario';
import { useParams } from 'react-router-dom';

const PerfilUsers = () => {
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
                <Layout>
                    <PerfilUsuario id={id} />
                </Layout>
            )}
        </>
    );
};

export default PerfilUsers;
