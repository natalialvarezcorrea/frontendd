import React,{Fragment} from 'react';
import './css/style.css';

function Posts(){

const tamaño1={width:' 60%'}
const tamaño2={width: '40%'}


   return(
       <Fragment>

<nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Administrador</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li><a href="index.html">Dashboard</a></li>
            <li><a href="pages.html">Paginas</a></li>
            <li className="active"><a href="posts.html">Publicaciones</a></li>
            <li><a href="users.html">Usuarios</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Bienvenido, Admin</a></li>
            <li><a href="login.html">Salir</a></li>
          </ul>
        </div>

      </div>
    </nav>

    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h1><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Publicaciones<small>Manejo de propiedades</small></h1>
          </div>
          <div className="col-md-2">
            <div className="dropdown create">
              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Create contenido
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a type="button" data-toggle="modal" data-target="#addPage">Add Page</a></li>
                <li><a href="#">Agregar Publicación</a></li>
                <li><a href="#">Agregar Usuario</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="breadcrumb">
      <div className="container">
        <ol className="breadcrumb">
          <li><a href="index.html">Dashboard</a></li>
          <li className="active">Publicaciones</li>
        </ol>
      </div>
    </section>

    <section id="main">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <a href="index.html" className="list-group-item active main-color-bg">
                <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
              </a>
              <a href="pages.html" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Paginas <span className="badge">12</span></a>
              <a href="posts.html" className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Publicaciones <span className="badge">33</span></a>
              <a href="users.html" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Usuarios <span className="badge">203</span></a>
            </div>

            <div className="well">
              <h4>Espacio usado en disco</h4>
              <div className="progress">
                  <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={tamaño1}>
                      60%
              </div>
            </div>
            <h4>Bandwidth Used </h4>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={tamaño2}>
                    40%
            </div>
          </div>
            </div>
          </div>
          <div className="col-md-9">
         

            <div className="panel panel-default">
              <div className="panel-heading main-color-bg">
                <h3 className="panel-title">Publicaciones</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                      <div className="col-md-12">
                          <input className="form-control" type="text" placeholder="Filter Posts..."/>
                      </div>
                </div>
                <br/>
                <table className="table table-striped table-hover">
                      <tr>
                        <th>Titulo</th>
                        <th>Publicado</th>
                        <th>Creado</th>
                        <th></th>
                      </tr>
                      <tr>
                        <td>Publicación 1</td>
                        <td><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></td>
                        <td>Dec 12, 2016</td>
                        <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Eliminar</a></td>
                      </tr>
                      <tr>
                        <td>Publicación 2</td>
                        <td><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></td>
                        <td>Dec 13, 2016</td>
                        <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Eliminar</a></td>
                      </tr>
                      <tr>
                        <td>Publicación  3</td>
                        <td><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></td>
                        <td>Dec 13, 2016</td>
                        <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Eliminar</a></td>
                      </tr>
                      <tr>
                        <td>Publicación 4</td>
                        <td><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></td>
                        <td>Dec 14, 2016</td>
                        <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Eliminar</a></td>
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

  

    <div className="modal fade" id="addPage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <form>
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 className="modal-title" id="myModalLabel">Add Page</h4>
      </div>
      <div className="modal-body">
        <div className="form-group">
          <label>Page Title</label>
          <input type="text" className="form-control" placeholder="Page Title"/>
        </div>
        <div className="form-group">
          <label>Page Body</label>
          <textarea name="editor1" className="form-control" placeholder="Page Body"></textarea>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox"/> Published
          </label>
        </div>
        <div className="form-group">
          <label>Meta Tags</label>
          <input type="text" className="form-control" placeholder="Add Some Tags..."/>
        </div>
        <div className="form-group">
          <label>Meta Description</label>
          <input type="text" className="form-control" placeholder="Add Meta Description..."/>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Save changes</button>
      </div>
    </form>
    </div>
  </div>
</div>




       </Fragment>
   )

}

export default Posts;