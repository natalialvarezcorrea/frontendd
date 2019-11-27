import React, { Fragment } from "react";
import FiltroB from "./Filtro_Busqueda/FiltroB";
import FiltrosMas from "./Filtro_Busqueda/FiltrosMas";
import CardPrincipal from "./cards/CardPrincipal";
import CardsFiltros from "./cards/CardsFiltro";

function PropiedadesFiltro() {
  return (
    <Fragment>
      {/* <FiltroB /> */}
      <FiltrosMas />
      <CardsFiltros />
    </Fragment>
  );
}

export default PropiedadesFiltro;
