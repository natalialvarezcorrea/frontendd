import React, { Fragment } from 'react';
import './form.css';


function FiltroB() {

    return (

        <Fragment>

            <div className="text- py-3 px-4 color">
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-2 center-clock">
                                <div className="input-group place fm" data-provide="place">
                                    <input type="text" placeholder="Lugar" className="form-control form-control-sm fm" />
                                    <div className="input-group-addon">
                                        <span
                                            className="form-control-icon search-destination-input_icon"
                                        ></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group date fm" data-provide="datepicker">
                                    <input type="text" placeholder="Entrada" className="form-control form-control-sm  fm" />
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-th"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <div className="input-group date fm" data-provide="datepicker">
                                    <input type="text" placeholder="Salida" className="form-control form-control-sm  fm" />
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-th"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="search_button-container">
                                <button type="submit" className="searchform_button search_button btn btn-primary btn-sm">Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )


}

export default FiltroB;