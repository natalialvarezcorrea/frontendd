import React, { Fragment, useState, useEffect } from "react";
import Swal from "sweetalert2";
import axiosFetch from "../../config/axiosConfig";

import "./form.css";

function Formpropiedades(props) {
  const [tipoPropiedades, guardarTipoPropiedades] = useState([]);

  const fetchAPI = async () => {
    const tiposPropiedadesData = await axiosFetch.get("/tipo-propiedades");

    setTimeout(() => {
      guardarTipoPropiedades(tiposPropiedadesData.data);
    }, 300);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  //propiedad=state

  const [propiedad, guardarPropiedad] = useState({
    titulo: "",
    descripcion: "",
    precio: "",
    sector: "",
    direccion: "",
    area: "",
    banios: "",
    habitaciones: "",
    tipoPropiedadId: ""
  });
  //Guardar imagen
  const [archivo, guardarArchivo] = useState("");

  // leer data form
  const actualizarState = e => {
    guardarPropiedad({
      // obtener una copia del state
      ...propiedad,
      [e.target.name]: e.target.value
    });
    console.log(propiedad);
  };
  // colocar la imagen en el state
  const leerArchivo = e => {
    guardarArchivo(e.target.files[0]);
  };

  const agregarPropiedadApi = async e => {
    e.preventDefault();

    // crear un formdata
    const formData = new FormData();
    formData.append("titulo", propiedad.titulo);
    formData.append("descripcion", propiedad.descripcion);
    formData.append("precio", propiedad.precio);
    formData.append("sector", propiedad.sector);
    formData.append("direccion", propiedad.direccion);
    formData.append("area", propiedad.area);
    formData.append("banios", propiedad.banios);
    formData.append("habitaciones", propiedad.habitaciones);
    formData.append("imagen", archivo);

    try {
      const res = await axiosFetch.post("/admin/propiedades", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (res.status === 200) {
        Swal.fire("Propiedad agregada", res.data.mensaje, "success");
      }
      // redireccionar
      props.history.push("/PropiedadesFiltro");
    } catch (error) {
      console.log(error);
      Swal.fire({
        type: "error",
        title: "Hubo un error",
        text: "Vuelva a intentarlo, la propiedad no se agregó"
      });
    }
  };

  const ancho = { width: "500px" };

  return (
    <Fragment>
      <div className="mx-auto" style={ancho}>
        <div className="container center-block ">
          <div className="row">
            <div className="col">
              <form className="mt-3" onSubmit={agregarPropiedadApi}>
                <h2>Registra tu inmueble</h2>
                <legend>Todos los campos son requeridos*</legend>
                <hr />
                <div className="form-group">
                  <label for="titulo">Título</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Nombra el inmueble"
                    name="titulo"
                    id="titulo"
                    onChange={actualizarState}
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <label for="tipo">Tipo</label>
                    <select
                      name="tipoPropiedadId"
                      id="titulo"
                      className="custom-select mb-3"
                      onChange={actualizarState}
                    >
                      {tipoPropiedades.map(tipoPropiedad => (
                        <option value={tipoPropiedad.id} key={tipoPropiedad.id}>
                          {" "}
                          {tipoPropiedad.nombre}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label for="precio">Precio</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Indicanos el valor de alquiler del inmueble"
                    name="precio"
                    id="precio"
                    onChange={actualizarState}
                  />
                </div>
                <div className="form-group">
                  <label for="sector">Sector</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="¿En qué sector esta ubicado?"
                    name="sector"
                    id="sector"
                    onChange={actualizarState}
                  />
                </div>
                <div className="form-group">
                  <label for="direccion">Dirección</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Dirección"
                    name="direccion"
                    id="direccion"
                    onChange={actualizarState}
                  />
                </div>
                <div className="form-group">
                  <label for="area">Área</label>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="Indicanos el área en metros cuadrados"
                    name="area"
                    id="area"
                    onChange={actualizarState}
                  />
                </div>

                <div className="row">
                  <div className="col">
                    <label for="banios">Baños</label>
                    <input
                      type="text"
                      required
                      className="form-control"
                      placeholder="número de baños"
                      name="banios"
                      id="banios"
                      onChange={actualizarState}
                    ></input>
                  </div>
                </div>
                <div className="form-group">
                  <label for="imagen">Imagen </label>
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Sube la imagen principal"
                    name="imagen"
                    id="imagen"
                    onChange={leerArchivo}
                  />

                  <div className="row">
                    <div className="col">
                      <label for="habitaciones">Habitaciones</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="habitaciones"
                        name="habitaciones"
                        id="habitaciones"
                        onChange={actualizarState}
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="descripcion">Descripción</label>
                    <textarea
                      name="descripcion"
                      id="descripcion"
                      className="form-control"
                      onChange={actualizarState}
                    ></textarea>
                  </div>

                  <div className="custom-control">
                    <label className="form-check-label"></label>
                    <input
                      type="checkbox"
                      name="terminos"
                      id="terminos"
                      className="form-check-input mr-2"
                      onChange={actualizarState}
                    />
                    Acepto Terminos y Condiciones
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    value="Agregar propiedad"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Formpropiedades;
