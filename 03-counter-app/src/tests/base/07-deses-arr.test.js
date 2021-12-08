import { retornaArreglo } from "../../base/07-deses-arr";

describe(' Pruebas en desestructuracion', () => {
    test(' debe de retornar un string y un numero', () => {
        
        // desestructuro el arreglo
        const[ letras, numeros ] = retornaArreglo(); //['ABC', 123]

        // esta compara todo el arreglo
        //expect( arr ).toEqual( ['ABC', 123])

        console.log(typeof numeros);


        expect( letras ).toBe('ABC');
        expect( typeof letras ).toBe( 'string' );

        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );
    })
})