import React,{Fragment} from 'react';



function form(){


    return(
        <Fragment>
             
             <form className=".col-0 .col-sm-0 ">
                                                <h4 className="text mt-2 d-flex flex-column">Reserva Ahora</h4>
                                            <div class="form-group mt-4 d-flex flex-column .col-0 .col-sm-0 ">
                                              <label for="exampleInputEmail1" className="ml-3">Lugar</label>
                                                <input type="email" class="form-control ml-3 w-100" id="lugar" aria-describedby="emailHelp" placeholder="Lugar Deseado"/>
                                            </div>
                                            <div class="form-group mt-4 ml-3" id="lugar">
                                            
                                              <label for="exampleFormControlSelect1">Tipo</label>
                                                <select class="form-control" id="exampleFormControlSelect1 ">
                                                <option>Auditorio</option>
                                                <option>Sala Reunion</option>
                                                <option>Inmueble tipo Finca</option>
                                                <option>Oficina</option>
                                                <option>Salon</option>
                                                </select>
                                            </div>

                                            <div class="form-group mt-4">
                                              <label for="exampleInputEmail1" className="ml-3">Desde</label>
                                                <input type="date" class="form-control ml-3 lugar1 " id="date"  aria-describedby="emailHelp" placeholder="Lugar Deseado"/>
                                                <label for="exampleInputEmail1" className="ml-3">Hasta</label>
                                                <input type="date" class="form-control ml-3 lugar1 " id="date" aria-describedby="emailHelp" placeholder="Lugar Deseado"/>
                                            </div>
                                            <div className="align-items-center hol">
                                            <button type="submit" className="btn-warning btn ml-3">Buscar</button>
                                            </div>
                                            </form>



        </Fragment>
    )
}

export default form;