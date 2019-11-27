import React, { Fragment, useState, useEffect } from 'react';
import axiosFetch from '../../config/axiosConfig';
import ListaTipoPropiedad from '../../components/Filtro_Busqueda/ListaTipoPropiedad';
import './form.css';


function FiltrosMas() {

    const [tipoPropiedades, guardarTipoPropiedades] = useState([]);

    const fetchAPI = async () => {
        const tiposPropiedadesData = await axiosFetch.get('/tipo-propiedades');

        setTimeout(() => {
            guardarTipoPropiedades(tiposPropiedadesData.data);
        }, 300);
    }

    useEffect(() => {
        fetchAPI();
    }, [tipoPropiedades]);
    return (
        <Fragment>

            <section className="application_filterBar">
                <div className="FilterBar color" data-wdio="FilterBar">
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <div className="dropdown">
                                    <button className="btn btn-outline-dark dropdown-toggle btn-sm" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Precio
                                </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button className="dropdown-item  btn-sm" type="button">Action</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2"><div className="dropdown">
                                <button className="btn btn-outline-dark dropdown-toggle  btn-sm" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Tipo
                                 </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">

                                    {tipoPropiedades.map(tiPropiedad => (

                                        <ListaTipoPropiedad
                                            key={tiPropiedad.id}
                                            tipoPropiedadProp={tiPropiedad}
                                        />
                                    ))}
                                </div>

                            </div>
                            </div>
                            <div className="col-2"><div className="dropdown">
                                <button className="btn btn-outline-dark dropdown-toggle  btn-sm" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Area
                        </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item  btn-sm" type="button">Action</button>

                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Fragment>

    )
}

export default FiltrosMas;