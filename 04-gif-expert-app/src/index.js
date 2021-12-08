import React from 'react';
import ReactDOM from 'react-dom';
// importa el componenete 
import { GifExpertApp } from './GifExpertApp';
// importa los estilos
import './index.css';


// el documento html que renderisa el componentente
ReactDOM.render(
    <GifExpertApp />,
    // aqui se renderisa
  document.getElementById('root')
);