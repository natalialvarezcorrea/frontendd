import React, { Fragment, useState, useEffect } from 'react';
import '../cards/card.css';
import CardFiltroDetalle from './CardFiltroDetalle';
import axiosFetch from '../../config/axiosConfig';


function CardsFiltro() {

    const [propiedades, guardarPropiedades] = useState([]);

    const fetchAPI = async () => {
        const propiedadesData = await axiosFetch.get('/propiedades');

        setTimeout(() => {
            guardarPropiedades(propiedadesData.data);
        }, 300);
    }

    useEffect(() => {
        fetchAPI();
    }, [propiedades]);


    return (
         <Fragment>
        <div className="text-center">
            <div className=" cover-container d-flex w-100 p-3 mx-auto flex-column navegar">
                <main role="main">
                <div className="album py-3 ">
                    <div className="container">
                    <div className="row">
                {propiedades.map(propiedad => (
                        <CardFiltroDetalle 
                        key={propiedad.id_propiedades}
                            propiedad={propiedad}
                        />
                ))}
                        </div>
                    </div>
                </div>
                </main>
            </div>
            </div>
        </Fragment>
       



    )
}

export default CardsFiltro;