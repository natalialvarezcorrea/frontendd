import React, { Fragment, useState, useEffect } from 'react';
import './css/sb-admin-2.css';
import fetchAxios from '../config/axiosConfig';
import { withRouter } from 'react-router-dom';


function Registro({ history }) {

  const [usuario, guardarUsuario] = useState({
    email: '',
    password: '',
    roleId: ''
  });


  // leer los datos del formulario
  const actualizarState = e => {
    // almacenar lo que el usuario escribe en el state
    guardarUsuario({
      // copia estado actual
      ...usuario,
      [e.target.name]: e.target.value
    });
    console.log(usuario);
  }

  // añade un nuevo usuario en la REST API
  const agregarUsuario = (e) => {
    e.preventDefault();

    fetchAxios.post('/signup', usuario)
      .then(res => {
        // validar si hay errores de mongo
        if (res.data.code === 11000) {
          console.log('Error de duplicado de Mongo');

        } else {
          console.log(res);

        }
        // redireccionar
        history.push('/');

      });
  }

  const validarUsuario = () => {
    const { email, password, roleId } = usuario;

    // revisar que las propiedades del state tengan contenido 
    let valido = !email.length || !password || !roleId.length;

    return valido;
  }

  const fondo = { backgroundColor: '#f5f5f5' }

  return (
    <Fragment>

      <div className="">

        <div className="container">


          <div className="row justify-content-center" style={fondo}>

            <div className="col-xl-10 col-lg-12 col-md-9">

              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">


                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-register-image"></div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">Unete a Social CoWork</h1>
                        </div>
                        <form className="user" onSubmit={agregarUsuario} >
                          <div className="form-group">
                            <input
                              type="email" className="form-control form-control-user"
                              id="email" name="email" aria-describedby="emailHelp" placeholder="Email"
                              onChange={actualizarState}

                            />
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control form-control-user"
                              name="password" id="exampleInputPassword"
                              placeholder="Password"
                              onChange={actualizarState}
                            />
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlSelect1">Tipo Usuario</label>
                            <select class="form-control" name="roleId"
                              onChange={actualizarState}
                              id="exampleFormControlSelect1">
                              <option value="0">Solo Reservas</option>
                              <option value="1">ONG - Arrendatario</option>

                            </select>
                          </div>
                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <input type="checkbox" className="custom-control-input" id="customCheck" />
                              <label className="custom-control-label" htmlFor="customCheck">Recuerdame</label>
                            </div>
                          </div>
                          <input type="submit" className="btn btn-primary btn-user btn-block"
                            value="Registrarme"
                            disabled={validarUsuario()}

                          />


                          <hr />
                          <a href="index.html" className="btn btn-google btn-user btn-block">
                            <i className="fab fa-google fa-fw"></i> Registrarme con Google
                  </a>
                          <a href="index.html" className="btn btn-facebook btn-user btn-block">
                            <i className="fab fa-facebook-f fa-fw"></i> Registrarme con Facebook
                  </a>
                        </form>
                        <hr />

                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>



    </Fragment>
  )


}
export default withRouter(Registro);