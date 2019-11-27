import React, { Fragment } from "react";
import "../cards/card.css";
import { Link } from "react-router-dom";

class CardPrincipal extends React.Component {
  render() {
    const NuncaExpandirse = {
      verticalAlign: "inherit"
    };

    return (
      <Fragment>
        <div className="text-center">
          <div className=" cover-container d-flex w-100 p-3 mx-auto flex-column navegar">
            <main role="main">
              <div className="album py-5 ">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card mb-4 shadow-sm">
                        <img src="/img/casa.jpg" className="img"></img>

                        <div className="card-body">
                          <h5 className="card-title">Oficina</h5>
                          <p className="card-text">
                            Una gran oficina con sofas y mesas, muy buena
                            iluminación y conexión veloz a internetEste
                            contenido es un poco más largo.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <Link to="/PropiedadesFiltro">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary"
                                >
                                  Ver
                                </button>
                              </Link>
                            </div>
                            <small className="text-muted">9 minutos</small>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="card mb-4 shadow-sm">
                        <img src="img/home3.jpg" className="img"></img>

                        <div className="card-body">
                          <h5 className="card-title">Entre Bosques</h5>
                          <p className="card-text">
                            Edificio con varias zonas utiles, una linda
                            vegetación y mucho espacio
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <Link to="/PropiedadesFiltro">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary"
                                >
                                  Ver
                                </button>
                              </Link>
                            </div>
                            <small className="text-muted">9 minutos</small>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card mb-4 shadow-sm">
                        <img src="/img/fondo2.jpg" className="img" />

                        <div className="card-body">
                          <h5 className="card-title">Poblado del Sur</h5>
                          <p className="card-text">
                            Apto en la Estrella con linda vista a un bosque
                            desde postman xdEste contenido es un poco más largo.
                          </p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                              <Link to="/PropiedadesFiltro">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-outline-secondary"
                                >
                                  Ver
                                </button>
                              </Link>
                            </div>
                            <small className="text-muted">9 minutos</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CardPrincipal;
