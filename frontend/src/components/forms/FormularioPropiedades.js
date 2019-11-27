import React,{Fragment} from 'react';
import './form.css';


function Formulariopropiedades(){

    const ancho={width:'500px'}
    const color={backgroundColor='#f5f5f5'}

    return(
        <Fragment>
        <div className="mx-auto" style={ancho}style={color}>
          <div className="container center-block " >
            <div className="row" style={color} >
                <div className="col">
                <form action="" className="mt-3">
                    <h1>Registra tu inmueble</h1>
                    <hr />
                    <div className="row">
                            <div className="col">
                                    <label for="banios">Tipo</label>
                                    <select name="" id="titulo" className="custom-select mb-3" >
                                        <option value="1"> Casa</option>
                                        <option value="2"> Oficina </option>
                                        <option value="3"> Auditorio</option>
                                        <option value="4"> Otro</option>
                                    </select>
                                
                            </div>
                            </div>
                            </form>
                        
                        


                    <div className="form-group">
                            <label for="precio">Precio</label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Indicanos el valor de alquiler del inmueble"
                            name="precio"
                            id="precio"
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
                            />
                        </div>

                        <div className="row">
                            <div className="col">
                                    <label for="banios">Baños</label>
                                    <select name="" id="banios" className="custom-select mb-3" >
                                        <option value="1"> 1 </option>
                                        <option value="2"> 2 </option>
                                        <option value="3"> Más de dos </option>
                                    </select>
                            </div>
                        </div>
                    <div className="form-group">
                    <label for="img_principal">Imagen principal</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Sube la imagen principal"
                        name="img_principal"
                        id="img_principal"
                    />
                    <div className="form-group">
                            <label for="img_sec">Imagen dos</label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Sube otra imagen"
                            name="img_sec"
                            id="img_sec"
                            />
                        </div>
                        <div className="row">
                                <div className="col">
                                    <label for="habitaciones">Habitaciones</label>
                                        <select name="" id="habitaciones" className="custom-select mb-3" >
                                            <option value="1"> 1 </option>
                                            <option value="2"> 2 </option>
                                            <option value="3"> Más de dos </option>
                                        </select>
                            
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="descripcion">Descripción</label>
                                <textarea name="descripcion" id="descripcion" className="form-control"></textarea>
                            </div>


                    
                    <div className="custom-control">
                        <label className="form-check-label" ></label>
                        <input type="checkbox" name="terminos" id="terminos" className="form-check-input mr-2"/>Acepto Terminos y Condiciones
                    
                    </div>
                    <button type="button" className="btn btn-primary">Enviar</button>
                
        </div>
      </div>
    </div>
    </div>
    </div>
    


        </Fragment>

    )
}


export default Formulariopropiedades;


