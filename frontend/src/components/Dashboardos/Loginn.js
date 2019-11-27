import React,{Fragment} from 'react';

function Loginn(){

return (
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

        </div>
      </div>
    </nav>

    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center"> Admin Area <small>Cuenta Login</small></h1>
          </div>
        </div>
      </div>
    </header>

    <section id="main">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <form id="login" action="index.html" className="well">
                  <div className="form-group">
                    <label>Correo</label>
                    <input type="text" className="form-control" placeholder="Correo"/>
                  </div>
                  <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña"/>
                  </div>
                  <button type="submit" className="btn btn-default btn-block">Login</button>
              </form>
          </div>
        </div>
      </div>
    </section>

    <footer id="footer">
      <p>Copyright SocialCowork, &copy; 2019</p>
    </footer>



    </Fragment>
)
    
}
export default Loginn;