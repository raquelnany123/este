// se crea un arreglo nomral
const arreglo = [1, 2, 3, 4];
// se crea un arreglo con los 3 putnos para clonarlo y agregar el valor de 5
let arreglo2 = [ ...arreglo, 5];
// al llamar al .map estamos creando un nuevo objeto asi es como no se modifica el arreglo para empezar
// map espera una funcion y esa funcion recibe cada valor del arreglo 
// tiene que tener el return porque si no regresa underfine ya que asi es la funcion 
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
})
console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
