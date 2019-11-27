import React, { Fragment } from 'react';


function Img2() {

    const Tamaño = { width: '100%' }
    const fondo = { backgroundColor: '#f5f5f5' }
    return (
        <Fragment>

            <div className="container" style={fondo}>
                <div className="row">
                    <div className="col-6">
                        <img
                            className="img-fluid "
                            style={Tamaño}
                            src="https://www.melior.es/noticias/wp-content/uploads/2014/09/sala-de-reuniones-madrid.jpg"
                        />
                    </div>
                    <div className=" col-6">
                        <img
                            className="img-fluid "
                            style={Tamaño}
                            src="http://www.coworkinglaeliana.com/wp-content/uploads/2015/10/01-coworking-la-eliana-sala-reuniones-pequena.jpg"
                            alt=""
                        />
                    </div>

                    <div className=" col-6">
                        <img
                            className="img-fluid "
                            style={Tamaño}
                            src="https://www.pocuro.cl/wp-content/uploads/2018/07/Casa-Ulmo-1000x600-1.jpg"
                            alt=""
                        />
                    </div>
                    <div className=" col-6">
                        <img
                            className="img-fluid "
                            style={Tamaño}
                            src="https://www.pocuro.cl/wp-content/uploads/2018/07/Casa-Ulmo-1000x600-1.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Img2;