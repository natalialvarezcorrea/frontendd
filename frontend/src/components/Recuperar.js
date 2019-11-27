import React,{Fragment} from 'react';
import './css/sb-admin-2.css';


function Recuperar(){

    return(
        <Fragment>


<div className="">

<div className="container">

  <div className="row justify-content-center">

    <div className="col-xl-10 col-lg-12 col-md-9">

      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">

          <div className="row">
            <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
            <div className="col-lg-6">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-2">Olvido su contraseña?</h1>
                  <p className="mb-4">ingrese su dirección de correo electrónico a continuación y le enviaremos un enlace para restablecer su contraseña.</p>
                </div>
                <form className="user">
                  <div className="form-group">
                    <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder=" Email Address..."/>
                  </div>
                  <a href="login.html" className="btn btn-primary btn-user btn-block">
                    Restablecer Contraseña
                  </a>
                </form>
                <hr/>
    
                <div className="text-center">
                  <a className="small" href="/Login">Volver al Login</a>
                </div>
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
export default Recuperar;