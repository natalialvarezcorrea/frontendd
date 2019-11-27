import React,{Fragment} from 'react';


function Users(){

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
            <li><a href="posts.html">Publicaciones</a></li>
            <li className="active"><a href="users.html">Usuarios</a></li>
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
            <h1><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Usuarios<small>Manejo de usuarios</small></h1>
          </div>
          <div className="col-md-2">
            <div className="dropdown create">
              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Create Content
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a type="button" data-toggle="modal" data-target="#addPage">Agregar pagina</a></li>
                <li><a href="#">Agregar Publicación </a></li>
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
          <li className="active">Usuarios</li>
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
              <h4>Espacio en disco</h4>
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
                <h3 className="panel-title">Usuarios</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                      <div className="col-md-12">
                          <input className="form-control" type="text" placeholder="Filter Users..."/>
                      </div>
                </div>
                <br/>
                <table className="table table-striped table-hover">
                      <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Fecha de registro</th>
                        <th></th>
                      </tr>
                      <tr>
                        <td>Jill Smith</td>
                        <td>jillsmith@gmail.com</td>
                        <td>Dec 12, 2016</td>
                        <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a></td>
                      </tr>
                      <tr>
                        <td>Eve Jackson</td>
                        <td>ejackson@yahoo.com</td>
                        <td>Dec 13, 2016</td>
                        <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a></td>
                      </tr>
                      <tr>
                       <td>Stephanie Landon</td>
                        <td>landon@yahoo.com</td>
                        <td>Dec 14, 2016</td>
                        <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a></td>
                      </tr>
                      <tr>
                        <td>Mike Johnson</td>
                        <td>mjohnson@gmail.com</td>
                        <td>Dec 15, 2016</td>
                        <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a></td>
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
        <h4 className="modal-title" id="myModalLabel">Agragar pagina</h4>
      </div>
      <div className="modal-body">
        <div className="form-group">
          <label>Titulo</label>
          <input type="text" className="form-control" placeholder="Page Title"/>
        </div>
        <div className="form-group">
          <label>Cuerpode pagina</label>
          <textarea name="editor1" className="form-control" placeholder="Page Body"></textarea>
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox"/> Publicado
          </label>
        </div>
        <div className="form-group">
          <label>Meta Tags</label>
          <input type="text" className="form-control" placeholder="Add Some Tags..."/>
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <input type="text" className="form-control" placeholder="Add Meta Description..."/>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
        <button type="submit" className="btn btn-primary">Guardar cambios</button>
      </div>
    </form>
    </div>
  </div>
</div>

        </Fragment>
    )
}
export default Users;