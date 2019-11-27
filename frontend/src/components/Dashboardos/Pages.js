import React,{Fragment} from 'react';
import './css/style.css'

function Pages(){
   
    const tamaño1={width:' 60%'}
const tamaño2={width: '40%'}

    return(
     <Fragment>

<nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Administrador</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li><a href="/Dashboardos">Dashboard</a></li>
            <li class="active"><a href="/Pages">Paginas</a></li>
            <li><a href="posts.html">Publicaciones</a></li>
            <li><a href="users.html">Usuarios</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Bienvenido, Admin</a></li>
            <li><a href="/Loginn">Salir</a></li>
          </ul>
        </div>

      </div>
    </nav>

    <header id="header">
      <div class="container">
        <div class="row">
          <div class="col-md-10">
            <h1><span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Paginas<small>Maneja tu sitio</small></h1>
          </div>
          <div class="col-md-2">
            <div class="dropdown create">
              <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Create Content
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a type="button" data-toggle="modal" data-target="#addPage">Agregar pagina</a></li>
                <li><a href="#">Agregar Publicación</a></li>
                <li><a href="#">Agregar Usuario</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="breadcrumb">
      <div class="container">
        <ol class="breadcrumb">
          <li><a href="/Dashboardos">Dashboard</a></li>
          <li class="active">Paginas</li>
        </ol>
      </div>
    </section>

    <section id="main">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="list-group">
              <a href="index.html" class="list-group-item active main-color-bg">
                <span class="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
              </a>
              <a href="pages.html" class="list-group-item"><span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Paginas <span class="badge">12</span></a>
              <a href="posts.html" class="list-group-item"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> Publicaciones <span class="badge">33</span></a>
              <a href="users.html" class="list-group-item"><span class="glyphicon glyphicon-user" aria-hidden="true"></span> Usuarios <span class="badge">203</span></a>
            </div>

            <div class="well">
              <h4>Espacio usado en disco</h4>
              <div class="progress">
                  <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={tamaño1}>
                      60%
              </div>
            </div>
            <h4>Bandwidth Used </h4>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={tamaño2}>
                    40%
            </div>
          </div>
            </div>
          </div>
          <div class="col-md-9">

            <div class="panel panel-default">
              <div class="panel-heading main-color-bg">
                <h3 class="panel-title">Paginas</h3>
              </div>
              <div class="panel-body">
                <div class="row">
                      <div class="col-md-12">
                          <input class="form-control" type="text" placeholder="Filter Pages..."/>
                      </div>
                </div>
                <br/>
                <table class="table table-striped table-hover">
                      <tr>
                        <th>Titulo</th>
                        <th>Publicado</th>
                        <th>Fecha de creación</th>
                        <th></th>
                      </tr>
                      <tr>
                        <td>Home</td>
                        <td><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>
                        <td>Dec 12, 2016</td>
                        <td><a class="btn btn-default" href="edit.html">Editar</a> <a class="btn btn-danger" href="#">Eliminar</a></td>
                      </tr>
                      <tr>
                        <td>About</td>
                        <td><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>
                        <td>Dec 13, 2016</td>
                        <td><a class="btn btn-default" href="edit.html">Editar</a> <a class="btn btn-danger" href="#">Eliminar</a></td>
                      </tr>
                      <tr>
                        <td>Services</td>
                        <td><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
                        <td>Dec 13, 2016</td>
                        <td><a class="btn btn-default" href="edit.html">Edit</a> <a class="btn btn-danger" href="#">Delete</a></td>
                      </tr>
                      <tr>
                        <td>Contacto</td>
                        <td><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></td>
                        <td>Dec 14, 2016</td>
                        <td><a class="btn btn-default" href="edit.html">Editar</a> <a class="btn btn-danger" href="#">Eliminar</a></td>
                      </tr>
                    </table>
              </div>
              </div>
            

          </div>
        </div>
      </div>
    </section>

    <footer id="footer">
      <p>Copyright SocialCowork, &copy; 2019</p>
    </footer>



    <div class="modal fade" id="addPage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <form>
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Agregar pagina</h4>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label>Titulo</label>
          <input type="text" class="form-control" placeholder="Page Title"/>
        </div>
        <div class="form-group">
          <label>Cuerpo de pagina</label>
          <textarea name="editor1" class="form-control" placeholder="Page Body"></textarea>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox"/> Publicado
          </label>
        </div>
        <div class="form-group">
          <label>Meta Tags</label>
          <input type="text" class="form-control" placeholder="Add Some Tags..."/>
        </div>
        <div class="form-group">
          <label>Descripción</label>
          <input type="text" class="form-control" placeholder="Add Meta Description..."/>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
        <button type="submit" class="btn btn-primary">Guardar cambios</button>
      </div>
    </form>
    </div>
  </div>
</div>

    </Fragment>

    )

}

export default Pages;