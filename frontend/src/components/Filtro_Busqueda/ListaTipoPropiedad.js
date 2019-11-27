import React from 'react';

function ListaTipoPropiedadd(props) {
    return(
            <button className="dropdown-item" type="button">
                 {props.tipoPropiedadProp.nombre}
            </button>   
    )
}

export default ListaTipoPropiedadd;