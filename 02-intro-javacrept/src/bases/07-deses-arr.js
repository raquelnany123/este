//desestructura un arreglo
const personajes = ['goku', 'vegeta', 'Trunks'];
//deja una coma por cada indice que quiera ignorar
const [, , p3] = personajes;
console.log( p3 );


//una funcion que retorna un arreglo pero no recibe nada
const retornaArreglo = ()=>{
  return ['abd', 123]
};


//desestrucutra el arreglo
const [letras, numeros] = retornaArreglo();
//lo imprime por separado en  variables individuales
console.log(letras, numeros);

//tarea
//1 el primer valor del arr se llamara nombre
//2 se llamara setNombre

const arr = ( valor ) => {
  return [valor, ()=>{ console.log ('hola mundo')}];
}



const [nombre, setNombre] = arr('goku');
console.log(nombre);
setNombre();