import React from "react";
import { Link } from "react-router-dom";

function CardFiltroDetalle(props) {
  const NuncaExpandirse = {
    verticalAlign: "inherit"
  };
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img
          src={`http://localhost:5000/uploads/${props.propiedad.imagen}`}
          className="img-fluid"
        ></img>

        <div className="card-body">
          <h5 className="card-title">{props.propiedad.titulo}</h5>
          <p className="card-text">{props.propiedad.descripcion}</p>
          <strong>Precio: ${props.propiedad.precio}</strong>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/propiedad/${props.propiedad.id_propiedades}`}>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Ver
                </button>
              </Link>
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

export default CardFiltroDetalle;
