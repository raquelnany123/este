
//si declaras asi la funcion es posible que si una variable le ponesmos saludar la va a sobre escribir
//function saludar( nombre ){
//y si a una variable const le asignamos una funcion no se lo pueden cambiar 
const saludar = function( nombre ){
    return `hola, ${nombre}`;
}

// funcion flecha despues de las parentesis se pone la flecha
const saludar2 = ( nombre ) =>{
    return `Hola, ${ nombre }`;
}

// si la funcion solo tiene un return se puede quitar
const saludar3 = ( nombre ) =>`Hola, ${ nombre }`;



//console.log( saludar('Goku'));
// de este modo solo te imprime como esla funcion
console.log( saludar )
// asi le pasas el valor de nombre 
console.log( saludar2('raquel') )
console.log( saludar3 )

// funciones flecha que retornan objetos 
const getUser = () => ({
    uid: 'abcd13232',
    username:'el_papi'
});

const user= getUser();
console.log(user);


//tarea
const getUserActivo = ( nombre )=>(
    {
        uid: 'abcd',
        username : nombre
    });


const usuarioActivo = getUserActivo('Fernando');
console.log( usuarioActivo );