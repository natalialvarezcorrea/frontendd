import React, { Fragment } from 'react';
import './css/pago.css';




function Pago() {


    return (
        <Fragment>

            <div className="">
                <div className="container">
                    <div className="text-center mt-5">
                        <h2>Fomulario de Pago</h2>
                        <p className="lead"></p>
                    </div>

                    <div className=" row justify-content-center mt-5">


                        <div className="col-md-8 order-md-1 ">
                            <h4 className="mb-3">Billing address</h4>
                            <form className="needs-validation was-validated" novalidate="">
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label for="firstName"> Nombre</label>
                                        <input type="text" className="form-control" id="firstName" placeholder="" value="" required="" />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="lastName">Apellido</label>
                                        <input type="text" className="form-control" id="lastName" placeholder="" value="" required="" />
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                        </div>
                                    </div>
                                </div>


                                <div className="mb-3">
                                    <label for="email">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                      </div>
                                </div>

                                <div className="mb-3">
                                    <label for="address">Telefóno</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                      </div>
                                </div>




                                <h4 className="mb-3">Pago</h4>

                                <div className="d-block my-3">
                                    <div className="custom-control custom-radio">
                                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked="" required="" />
                                        <label className="custom-control-label" for="credit">Targeta De Credito</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                        <label className="custom-control-label" for="debit">Targeta Debito</label>
                                    </div>
                                    <div className="custom-control custom-radio">
                                        <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
                                        <label className="custom-control-label" for="paypal">PayPal</label>
                                    </div>
                                </div>
                                <div>
                                    <i class="fab fa-cc-visa"></i>
                                    <i class="fab fa-cc-mastercard"></i>
                                    <i class="fab fa-cc-paypal"></i>



                                </div>



                                <div className="row">

                                    <div className="col-md-6 mb-3">
                                        <label for="cc-name">Tipo de Documento</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                            </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label for="cc-name">Número</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                              </div>
                                    </div>




                                    <div className="col-md-6 mb-3">
                                        <label for="cc-name">Nombre Targeta</label>
                                        <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label for="cc-number">Número Targeta</label>
                                        <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-3 mb-3">
                                        <label for="cc-expiration">Expiration</label>
                                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Expiration date required
                        </div>
                                    </div>
                                    <div className="col-md-3 mb-3">
                                        <label for="cc-cvv">CVV</label>
                                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
                                        <div className="invalid-feedback">
                                            Security code required
                        </div>
                                    </div>
                                </div>
                                <hr className="mb-4" />
                                <button className="btn btn-primary btn-lg btn-block" type="submit">Continuar</button>

                            </form>
                        </div>
                    </div>


                </div>
                <footer className="my-5 pt-5 text-muted text-center text-small">
                    <p className="mb-1">© 2017-2019 Company Name</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#">Privacy</a></li>
                        <li className="list-inline-item"><a href="#">Terms</a></li>
                        <li className="list-inline-item"><a href="#">Support</a></li>
                    </ul>
                </footer>
            </div>

        </Fragment>

    )
}
export default Pago;