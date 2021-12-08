
// importa react para poder usar jx y usestate para poder usar ese hook (hook de cambio de estados)
import React, { useState } from 'react'
import { AddCategory } from './componenta/AddCategory'
import {GifGrid} from './componenta/GifGrid'


// exporta y crea el componente
export const GifExpertApp = () => {
    // const categories = ['one Punch', 'Samurai x', 'Dragon Ball']
    // crea el hook tiene categories y las modifica con el set categories es un arreglo
    const [categories, setCategories] = useState(['one Punch'])

    // la funcion que va a activar el onclick una funcion que regresa el cambio del estado del arreglo con el setcategories
    // recibe categorias regresa un arreglo con las categorias con el  operador spreaa (...) y agregqa uno 
    // const handleAdd = () => {
    //     setCategories(cats => [ ...categories, 'raquel']);
    //     // setCategories([ ...categories, 'raquel']);
    //     // esta nno esta bien
    //     // setCategories(categories + 'raquel');
    // }
    return (
        // asi lo regresa en lugar del gramente
        <> 
            {/* etiqueta */}
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            {/* etiqueta */}
            <hr />
            {/* boton con evento onClick */}
            {/* onclick llama a la funcion handleadd */}
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            {/* lista ordenada */}
            <ol>
                {
                    // // aqui llama al map que recore todo el arreglo de categories y regresa la categoria el key solo es un nombre para la etiqueta
                    // categories.map(categoty => {
                    //     // elemento de la lista
                    //     return <li key={ categoty }> { categoty} </li>
                    // })

                    categories.map( category =>(
                        <GifGrid 
                        key={ category }
                        category= { category} />
                    ))
                }
            </ol>
        </>
    )
}