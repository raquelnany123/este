import '@testing-library/jest-dom'

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {

    test('getSaludo debe de retorna Hola Fernando!', () => {
        const nombre = 'Fernando';

        const saludo = getSaludo( nombre)
        expect( saludo ).toBe( 'Hola ' + nombre + '!' );

    })
})

describe('Pruebas en 02-template-string.js de tarea', () => {

    test('getSaludo debe de retorna Hola Carlos! si no tiene argumento', () => {
        // const nombre = 'Fernando';

        const saludo = getSaludo()
        expect( saludo ).toBe( 'Hola carlos!' );

    })
})