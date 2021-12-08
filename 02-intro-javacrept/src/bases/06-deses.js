// desestructuracion
// asignacion desestructurante

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Ironman'
};

// extrañendo 
// const {edad, clave, nombre}= persona;

// funcion normla retorna persona
// const retornaPersona = (usuario) => {

    // console.log(usuario)
// }

// desestructuracion
// const retornaPersona = (usuario) => {
// extrañendo del argumento que le entra (acaba siendo persona)
    // const {edad, clave, nombre}= usuario;
    // console.log(edad, clave, nombre)
// }


// desestructuracion desde el argumento
//se pueden agregar cosas al objeto pero si el objeto lo tuviera muestra el del objeto
// const retornaPersona = ({nombre, rango = 'capitan'}) => {
  
        // console.log( nombre, rango);
    // }

// retornaPersona( persona );


// tarea

const us = ({clave, nombre, edad, rango = 'capitan'}) => {
  
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1212,
            lng: -521458
        }
    }
}

//desestructurar atributos anidados 
const {nombreClave, anios, latlng:{lat}} = us ( persona );
console.log(nombreClave, anios, lat)