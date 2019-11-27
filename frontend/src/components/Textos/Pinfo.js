import React, { Fragment, useState, useEffect } from "react";
import "./style.css";
import axiosFetch from "../../config/axiosConfig";
import { withRouter } from "react-router-dom";

function Pinfo(props) {
  const [propiedad, guardarPropiedad] = useState([]);
  const [reserva, guardarReserva] = useState({
    fecha_in: "",
    fecha_out: ""
  });

  const fetchAPI = async () => {
    const propiedad = await axiosFetch.get(
      `/propiedades/${props.match.params.id}`
    );
    guardarPropiedad(propiedad.data);
  };
  useEffect(() => {
    fetchAPI();
  }, []);

  const Centrado = { textAlign: "center" };
  const Color = { color: "black" };
  const Left = { left: "0%" };

  const actualizarState = e => {
    guardarReserva({
      ...reserva,
      [e.target.name]: e.target.value
    });
    console.log(reserva);
  };

  const reservarPropiedad = e => {
    e.preventDefault();
    axiosFetch.post(`/propiedades/reserva/${props.match.params.id}`, reserva);
    console.log(reserva);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col mt-4">
            <h2 style={Centrado}>{propiedad.titulo}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 mt-4">
            <h4>Descripcion</h4>
            <h7>{propiedad.descripcion}</h7>
          </div>
          <hr />
          <hr />
          <hr />
          <div className="col-6 mt-4">
            <h4>Información general</h4>
            <ul>
              <li>Número de habitaciones: {propiedad.habitaciones}</li>
              <li>Sector: {propiedad.sector}</li>
              <li>Dirección: {propiedad.direccion}</li>
              <li>Área: {propiedad.area} m2</li>
              <li>Número de baños: {propiedad.banios} </li>
            </ul>
          </div>
          <div className="col-6 mt-4">
            <h4>Servicios que incluye</h4>
            <ul>
              <li>Wifi</li>
              <li>Computadoras</li>
              <li>Videobeam</li>
            </ul>
          </div>

          <div className="col-6 mt-4 ">
            <div className="container ">
              <div className="row">
                <div className="col ">
                  <div className="card ">
                    <div className="card-body">
                      <form style={Color} name="" onSubmit={reservarPropiedad}>
                        <h3
                          className="dark-grey-text text-center"
                          style={Centrado}
                        >
                          <strong style={Centrado}>Reserva ya</strong>
                        </h3>
                        <div className="form-group row">
                          <div className="col-6">
                            <label for="form"> Inicio</label>
                            <input
                              onChange={actualizarState}
                              type="date"
                              id="form"
                              data-veloute="checkin_input"
                              id="checkin_input"
                              className="form-control"
                              placeholder="dd/mm/año"
                              name="fecha_in"
                            />
                          </div>
                          <div className="col-6">
                            <label for="form"> Fin</label>
                            <input
                              onChange={actualizarState}
                              type="date"
                              id="form"
                              data-veloute="checkin_input"
                              id="checkin_input"
                              className="form-control"
                              placeholder="dd/mm/año"
                              name="fecha_out"
                            />
                          </div>
                        </div>

                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Reserva
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default withRouter(Pinfo);
