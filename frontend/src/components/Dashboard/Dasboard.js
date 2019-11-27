import React,{Fragment} from 'react';

import './css/styles.css';

function Dashboard(){


    return(
        <Fragment>

    <div className="container-fluid">
      <div className="row">
        <div className="barra-lateral col-12 col-sm-auto">
          <div className="logo">
            <h2>Admin</h2>
          </div>
          <nav className="menu d-flex d-sm-block justify-content-center flex-wrap">
            <a href="#"><i className="icon-home"></i><span>Inicio</span></a>
            <a href="#"><i className="icon-doc-text"></i><span>Entradas</span></a>
            <a href="#"><i className="icon-users"></i><span>Usuario</span></a>
             <a href="#"> <i className="icon-cog-alt"></i><span>Configuración</span></a>
            <a href="#"><i className="icon-logout"></i><span>Salir</span></a>
          </nav>
    </div>

    <main className="main col">
          <div className="row">
            <div className="columna col-lg-7">
              <div className="widget nueva_entrada">
                <h3 className="titulo">Nueva Entrada</h3>
                <form action="">
                  <input type="text" placeholder="Titulo de la entrada" />
                  <textarea placeholder="lorem ipsummmmsss"></textarea>
                  <div className="d-flex justify-content-end">
                    <button><i className="icon icon-edit"></i>Enviar</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="columna col-lg-5">
              <div className="widget estadisticas">
                <h3 className="titulo">Estadisticas</h3>
                <div className="contenedor d-flex flex-wrap">
                  <div className="caja">
                    <h3>15.652</h3>
                    <p>Visitas</p>
                  </div>
                  <div className="caja">
                    <h3>652</h3>
                    <p>Registros</p>
                  </div>
                  <div className="caja">
                    <h3>1.652</h3>
                    <p>Ingresos</p>
                  </div>
                </div>
              </div>

              <div className="widget comentarios">
                <h3 className="titulo">Solicitudes</h3>
                <div className="contenedor">
                  <div className="comentario d-flex flex-wrap">
                    <div className="foto">
                      <a href="#">
                        <img src="./img/persona1.jpg" width="100" alt="" />
                      </a>
                    </div>
                    <div className="texto">
                      <a href="#">Jhon Doe</a>
                      <p>en <a href="#">Solicitud agregar propiedad</a></p>
                      <p className="texto-comentario">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eaque numquam reprehenderit molestiae nisi placeat
                        quaerat illum similique nobis in facilis dolorem sed
                        velit et fugiat sit minima, aliquid, assumenda nihil.
                      </p>
                    </div>
                    <div
                      className="botones d-flex justify-content-start flex-wrap w-100"
                    >
                      <button className="aprobar">
                        <i className="icono icon-ok"></i>Aprobar
                      </button>
                      <button className="eliminar">
                        <i className="icono icon-cancel"></i>Eliminar
                      </button>
                      <button className="bloquear">
                        <i className="icono icon-flag"></i>Bloquear Usuario
                      </button>
                    </div>
                  </div>
                  <div className="comentario d-flex flex-wrap">
                    <div className="foto">
                      <a href="#">
                        <img src="./img/persona6.jpg" width="100" alt="" />
                      </a>
                    </div>
                    <div className="texto">
                      <a href="#">Ana Mesa</a>
                      <p>en <a href="#">Solicitud agregar propiedad</a></p>
                      <p className="texto-comentario">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eaque numquam reprehenderit molestiae nisi placeat
                        quaerat illum similique nobis in facilis dolorem sed
                        velit et fugiat sit minima, aliquid, assumenda nihil.
                      </p>
                    </div>
                    <div
                      className="botones d-flex justify-content-start flex-wrap w-100"
                    >
                      <button className="aprobar">
                        <i className="icono icon-ok"></i>Aprobar
                      </button>
                      <button className="eliminar">
                        <i className="icono icon-cancel"></i>Eliminar
                      </button>
                      <button className="bloquear">
                        <i className="icono icon-flag"></i>Bloquear Usuario
                      </button>
                    </div>
                  </div>
                  <div className="comentario d-flex flex-wrap">
                    <div className="foto">
                      <a href="#">
                        <img src="./img/persona3.png" width="100" alt="" />
                      </a>
                    </div>
                    <div className="texto">
                      <a href="#">Richard Fard</a>
                      <p>en <a href="#">Solicitud agregar propiedad</a></p>
                      <p className="texto-comentario">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eaque numquam reprehenderit molestiae nisi placeat
                        quaerat illum similique nobis in facilis dolorem sed
                        velit et fugiat sit minima, aliquid, assumenda nihil.
                      </p>
                    </div>
                    <div
                      className="botones d-flex justify-content-start flex-wrap w-100"
                    >
                      <button className="aprobar">
                        <i className="icono icon-ok"></i>Aprobar
                      </button>
                      <button className="eliminar">
                        <i className="icono icon-cancel"></i>Eliminar
                      </button>
                      <button className="bloquear">
                        <i className="icono icon-flag"></i>Bloquear Usuario
                      </button>
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
    )
}


export default Dashboard;