import React, { Component } from "react";
import { Link } from "react-router-dom";

function Typography(props) {
  const NuncaExpandirse = {
    verticalAlign: "inherit"
  };
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src="img/home3.jpg" className="img"></img>

        <div className="card-body">
          <h5 className="card-title">{props.propiedad}</h5>
          <p className="card-text">{props.propiedad}</p>
          <strong>Precio: ${props.propiedad}</strong>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <div className="btn-group">
                <Link to={`/EditarPropiedad`}>
                  <button type="button" class="btn btn-outline-success btn-sm">
                    Editar{" "}
                  </button>{" "}
                </Link>

                <Link to={`/EliminarPropiedad`}>
                  <button type="button" class="btn btn-outline-danger btn-sm">
                    Eliminar
                  </button>
                </Link>
              </div>
            </div>
            <small className="text-muted">
              <font style={NuncaExpandirse}>
                <font style={NuncaExpandirse}>9 minutos</font>
              </font>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Typography;
