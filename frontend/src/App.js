import React, { Fragment, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home";
import Registro from "./components/Registro";
import Login from "./components/Login";
import Pago from "./components/Pago";
import PropiedadesFiltro from "./components/PropiedadesFiltro";
import PropiedadesInfo from "./components/PropiedadesInfo";
import Formpropiedades from "./components/forms/Formpropiedades";
import Recuperar from "./components/Recuperar";
import Email from "./components/Email/Email";
import Formdash from "./components/forms/Formdash";
import EditarPropiedad from "./components/forms/EditarPropiedad";
// import Propiedad from "./components/forms/EliminarPropiedad";

import "./animated.css";
import "./App.scss";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
const DefaultLayout = React.lazy(() =>
  import("./Dashboard/containers/DefaultLayout")
);

{
  /*Dashboard */
}

// Pages
const Loginn = React.lazy(() => import("./Dashboard/views/Pages/Login"));
const Register = React.lazy(() => import("./Dashboard/views/Pages/Register"));
const Page404 = React.lazy(() => import("./Dashboard/views/Pages/Page404"));
const Page500 = React.lazy(() => import("./Dashboard/views/Pages/Page500"));

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading()}>
          <Router>
            <Fragment>
              <Nav />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Loginn" component={Loginn} />
                <Route exact path="/Registro" component={Registro} />
                <Route exact path="/Recuperar" component={Recuperar} />
                <Route exact path="/Pago" component={Pago} />
                <Route
                  exact
                  path="/PropiedadesFiltro"
                  component={PropiedadesFiltro}
                />
                <Route
                  exact
                  path="/propiedad/:id"
                  component={PropiedadesInfo}
                />
                <Route
                  exact
                  path="/Formpropiedades"
                  component={Formpropiedades}
                />
                <Route exact path="/Email" componet={Email} />
                <Route exact path="/Formdash" component={Formdash} />
                <Route
                  exact
                  path="/EditarPropiedad"
                  component={EditarPropiedad}
                />
                {/* <Route exact path="/EliminarPropiedad" component={Propiedad} /> */}

                {/*Dashboard */}

                <Route
                  exact
                  path="/login"
                  name="Login Page"
                  render={props => <Login {...props} />}
                />
                <Route
                  exact
                  path="/register"
                  name="Register Page"
                  render={props => <Register {...props} />}
                />
                <Route
                  exact
                  path="/404"
                  name="Page 404"
                  render={props => <Page404 {...props} />}
                />
                <Route
                  exact
                  path="/500"
                  name="Page 500"
                  render={props => <Page500 {...props} />}
                />
                <Route
                  path="/"
                  name="Home"
                  render={props => <DefaultLayout {...props} />}
                />
              </Switch>
            </Fragment>
          </Router>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
