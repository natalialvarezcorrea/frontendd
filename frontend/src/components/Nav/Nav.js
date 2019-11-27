import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';


class Nav extends React.Component {



    componentDidUpdate() {
        let isLogged = localStorage.getItem('logged')
        if (isLogged === true) document.querySelector('#login_nav_item').classList.add('.login_nav_item')
    }

    render() {

        const NuncaExpandirse = {
            verticalAlign: 'inherit',
            color: 'black'
        }

        const nav = {
            backgroundColor: '#000'
        }

        const login = false;

        return (
            <Fragment>

                <div className="text-center">
                    <div className=" cover-container d-flex w-100 h-100 p-3 mx-auto flex-column navegar">

                        <main role="main">


                            <section className="text-center ml-5">
                                <nav className="navbar navbar-expand-sm ml-5">

                                    <a className="navbar-brand" href="#">
                                        <font style={NuncaExpandirse}>
                                            <font className="nombre" style={NuncaExpandirse}>Social-Cowork</font>
                                        </font>
                                    </a>



                                    <button className="navbar-toggler collapsed navbar-dark " style={nav}
                                        type="button" data-toggle="collapse" data-target="#navbarsExample01"
                                        aria-controls="navbarsExample01" aria-expanded="false"
                                        aria-label="Navegación de palanca">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>

                                    <div className="navbar-collapse collapse mt-2" id="navbarsExample01" >
                                        <ul className="navbar-nav mr-auto">
                                            <li className="nav-item active">
                                                <Link className="nav-link" to={"/"}>
                                                    <font style={NuncaExpandirse}>
                                                        <font style={NuncaExpandirse}>Inicio </font>
                                                    </font><span className="sr-only">
                                                        <font style={NuncaExpandirse}>
                                                            <font style={NuncaExpandirse}>(actual)</font>
                                                        </font>
                                                    </span>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/PropiedadesFiltro"}>
                                                    Explorar
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to={"/Registro"}>
                                                    Registro
                                                </Link>
                                            </li>
                                            <li className="nav-item" id="login_nav_item">
                                                <Link className="nav-link " to={"/Login"}>

                                                    Login
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <Link className="nav-link " to={"/Pago"} id="dropdown01" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    Pago
                                                </Link>

                                            </li>
                                        </ul>
                                        <form className="form-inline mr-5 ">
                                            <input className="form-control form-control-sm mr-5" type="text" placeholder="Buscar" aria-label="Buscar" />
                                        </form>
                                    </div>
                                </nav>

                            </section>
                        </main>

                    </div>
                </div>

            </Fragment>

        );
    }
}

export default Nav;