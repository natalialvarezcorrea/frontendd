import React,{Fragment} from 'react';



function Formdash(){

    const tamaño={width: '500px'}

    return(

        <Fragment>

<div class="mx-auto" style={tamaño}>
    <div class="container center-block ">
      <div class="row">

        <div class="col">
          <form action="" class="mt-3">
            <h2>Editar información</h2>
            <hr />

            <div class="form-group">
              <h5>Información Básica</h5>
              <label for="precio">Nombre</label>
              <input
                type="text"
                class="form-control"
                name="nombre"
                id="nombre"
              />
            </div>
            <div class="form-group">
              <label for="sector">Apellido</label>
              <input
                type="text"
                class="form-control"
                name="apellido"
                id="apellido"
              />
            </div>
            <div class="form-group">
              <label for="direccion">Usuario</label>
              <input
                type="text"
                class="form-control"
                name="direccion"
                id="direccion"
              />
            </div>

            <div class="form-group">
              <label for="img_principal">Correo</label>
              <input
                type="text"
                class="form-control"
                name="correo"
                id="correo"
              />
              <div class="form-group">
                    <label for="img_principal">Contraseña</label>
                    <input type="text" class="form-control" name="contrasena" id="contrasena"/>
                    <div class="form-group">
                    <label for="img_principal">Modificar Contraseña</label>
                     <input type="text" class="form-control" name="modificar_contrasena" id="modificar_contrasena"/>
              </div>

            <button type="button" class="btn btn-primary">
              Guardar cambios
            </button>
            
            </div>
        </div>
          </form>
        </div>
    
    </div>
    </div>
    </div>
    

        </Fragment>
    )



}

export  default Formdash;