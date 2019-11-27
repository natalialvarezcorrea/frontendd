import React, { Fragment, useState, useEffect } from "react";
import Swal from "sweetalert2";
import axiosFetch from "../../config/axiosConfig";

function EditarPropiedad(props) {
  const { id } = props.match.params;

  const [propiedad, guardarPropiedad] = useState({
    titulo: "",
    descripcion: "",
    precio: "",
    sector: "",
    direccion: "",
    area: "",
    banios: "",
    habitaciones: "",
    imagen: ""
  });

  const [archivo, guardarArchivo] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      const propiedadConsulta = await axiosFetch.get(`/propiedades/${id}`);
      guardarPropiedad(propiedadConsulta.data);
    };

    fetchAPI();
  }, []);

  const actualizarPropiedadApi = async e => {
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
      const res = await axiosFetch.put(`/propiedades/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      if (res.status === 200) {
        Swal.fire("Propiedad actualizada", res.data.mensaje, "success");
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

  //leer data form
  const infoPropiedad = e => {
    guardarPropiedad({
      ...propiedad,
      [e.target.name]: e.target.value
    });
  };

  //   // colocar la imagen en el state
  const leerArchivo = e => {
    guardarArchivo(e.target.files[0]);
  };

  //   // extraer los valores del state
  //

  //   const {
  //     titulo
  //     //     descripcion,
  //     //     precio,
  //     //     sector,
  //     //     direccion,
  //     //     area,
  //     //     banios,
  //     //     habitaciones,
  //     //     imagen
  //   } = propiedad;

  const ancho = { width: "500px" };
  const centro = { textAlign: "center" };

  return (
    <Fragment>
      <div className="mx-auto" style={ancho}>
        <div className="container center-block ">
          <div className="row">
            <div className="col">
              <form className="mt-3">
                <h2 style={centro}>Edita Tu Propiedad</h2>
                <p style={centro}>Rellena todos los campos </p>
                <hr />
                {/* <div className="row">
                  <div className="col">
                    <label for="banios">Tipo</label>
                    <select
                      name="tipoPropiedadId"
                      id="titulo"
                      className="custom-select mb-3"
                    ></select>
                  </div>
                </div> */}
                <div className="form-group">
                  <label for="precio">Titulo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Indicanos el valor de alquiler del inmueble"
                    name="titulo"
                    id="titulo"
                    // defaultValue={titulo}
                    onChange={infoPropiedad}
                  />
                </div>

                <div className="form-group">
                  <label for="precio">Precio</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Indicanos el valor de alquiler del inmueble"
                    name="precio"
                    id="precio"
                    onChange={infoPropiedad}
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
                    onChange={infoPropiedad}
                  />
                </div>
                <div className="form-group">
                  <label for="direccion">Dirección</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Dirección"
                    name="direccion"
                    id="direccion"
                    onChange={infoPropiedad}
                  />
                </div>
                <div className="form-group">
                  <label for="area">Área</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Indicanos el área en metros cuadrados"
                    name="area"
                    id="area"
                    onChange={infoPropiedad}
                  />
                </div>

                <div className="row">
                  <div className="col">
                    <label for="banios">Baños</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="número de baños"
                      name="banios"
                      id="banios"
                      onChange={infoPropiedad}
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
                    onChange={infoPropiedad}
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
                        onChange={infoPropiedad}
                      ></input>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="descripcion">Descripción</label>
                    <textarea
                      name="descripcion"
                      id="descripcion"
                      className="form-control"
                      onChange={infoPropiedad}
                    ></textarea>
                  </div>

                  <div style={centro} className="custom-control">
                    <label className="form-check-label"></label>
                    <input
                      type="checkbox"
                      name="terminos"
                      id="terminos"
                      className="form-check-input mr-2"
                    />
                    Acepto Terminos y Condiciones
                  </div>
                  <div style={centro}>
                    {" "}
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EditarPropiedad;
