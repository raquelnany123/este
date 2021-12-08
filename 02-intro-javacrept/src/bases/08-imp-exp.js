import {heroes} from '../data/heroes'





// el .find recorre el arreglo hasta allar lo que le pides
export const getHeroeById = (id)=> {
    return heroes.find(k => k.id === id);
}

//console.table( getHeroeById (3));

// el.filter  recorre el arreglo de todos los elementos que tienen lo que buscas  

export const getHeroeByOwner = (owner)=> {
    return heroes.filter(heroes => heroes.owner === owner);
}

//console.log( getHeroeByOwner ('Marvel'));