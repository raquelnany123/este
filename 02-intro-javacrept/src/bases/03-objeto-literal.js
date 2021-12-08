
// objeto persona
const persona = {
    nombre: 'tony',
    apellido: 'Stark',
    edad: 45,
    direccio:{
        ciudad: ' New york',
        zip: 552323235,
        lat:1402588,
        lng:23.4345
    }
}

//aqui se colocan los 3 puntos para clonar el objeto persona
//  si no si se modifican los valores de persona en persona2
const persona2 ={...persona};
// si aqui no tuviera los 3 puntos modificariamos a tony por peter
persona2.nombre='peter';

console.log( persona );
console.log( persona2 );