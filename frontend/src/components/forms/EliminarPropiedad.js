import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosFetch from "../../config/axiosConfig";
import Swal from "sweetalert2";

function Propiedad(props) {
  const eliminarPropiedad = id => {
    console.log("eliminando...", id);
    Swal.fire({
      title: "¿Estás seguro que quieres eliminarla?",
      text: "Una propiedad eliminada no se puede recuperar",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d333",
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "Cancelar"
    }).then(result => {
      if (result.value) {
        axiosFetch.delete(`admin/propiedades${_id}`).then(res => {
          if (res.status === 200) {
            Swal.fire("Eliminado ", res.data.mensaje, "success");
          }
        });
      }
    });
  };

  const {
    _id,
    titulo,
    descripcion,
    precio,
    sector,
    direccion,
    area,
    banios,
    habitaciones,
    imagen
  } = props.producto;

  return (
    <Fragment>
      <li className="propiedad animated fadeIn">
        <div className="info-propiedad">
          <p className="titulo">{titulo}</p>
          <p className="descripcion">$ {descripcion}</p>
          <p className="precio">{precio}</p>
          <p className="sector">{sector}</p>
          <p className="direccion">$ {direccion}</p>
          <p className="area">{area}</p>
          <p className="banios">$ {banios}</p>
          <p className="habitaciones">{habitaciones}</p>

          {imagen ? (
            <img
              className="imagen"
              src={`http://localhost:5000/uploads/${props.propiedad.imagen}`}
              alt=""
            />
          ) : (
            <null></null>
          )}
        </div>
        <div className="acciones">
          <Link
            to={`/propiedad/editar/${_id}`}
            className="btn btn-azul margin-tb"
          >
            <i className="fas fa-pen"></i> Editar Propiedad
          </Link>
          <button
            className="btn btn-rojo"
            onClick={() => eliminarPropiedad(_id)}
          >
            <i className="fas fa-times"></i>
            Eliminar Propiedad
          </button>
        </div>
      </li>
    </Fragment>
  );
}
export default Propiedad;
