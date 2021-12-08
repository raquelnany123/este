import {getHeroeById} from './bases/08-imp-exp'
import { heroes } from './data/heroes';



// const promesa = new Promise( (resolver, reject) =>{
//     setTimeout(()=>{

//         //getHeroeById trae un heroe con el id que le pidas
//         //este dato se guarda en p1 y pasa al resolver
//         const p1 = getHeroeById(2);
//         // este es para cuando la promesa si es lo que se esperaba
//         // resolver( p1 )
//         // este es para cuando no 
//         reject('no se pudo encontrar el heroe')
//     }, 2000)
//  } );
 
// // aqui lo envia el resolover lo resiva en heroe
//  promesa.then((heroe)=>{ 
//      //aqui imprime lo que le paso el then 
//      console.log('then de la promesa', heroe)
//  })
//  .catch(err => console.warn( err ));


// la tarea yo la hice
// const getHeroeByIdAsync = (id) =>{
//      return new Promise( (resolver, reject) =>{
//         setTimeout(()=>{
//                 const p1 = getHeroeById(id);
//             if (p1 === undefined){
//             reject(' no jala')
//             }else{
//                 resolver( p1 )}
//      },200 );
     
// });
// }

// este es el que hacen en el video 

const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolver, reject) =>{
       setTimeout(()=>{
               const p1 = getHeroeById(id);
           if (p1){
               resolver( p1 )
           
           }else{
               reject(' no jala')
            }
    },200 );
    
});
}




// getHeroeByIdAsync(4)
// .then(heroe => console.log('heroe', heroe))
// .catch(err => console.warn(err));

// lo mismo que la de arriba pero es mas simple
getHeroeByIdAsync(4)
.then(console.log)
.catch(console.warn);