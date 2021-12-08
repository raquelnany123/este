import React from "react";
import PropTypes from 'prop-types';
// import { Fragment } from "react/cjs/react.production.min";

// este saludo es una desestructuracion de los props que estan en el index
const PrimeraApp = ({ saludo, subtitulo}) => {


return(
    <>
    <h1> {saludo } </h1>
    <p> {subtitulo} </p>
    </>
)


};

PrimeraApp.propType={
    // es que espera el saludo d tipo string y que sea obligatorio
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {

    subtitulo: 'soy un subtitulo'
}


export default PrimeraApp;
