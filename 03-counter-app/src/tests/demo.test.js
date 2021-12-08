

describe('Pruebas en el archivo demo.test.js', ()=>{
    test( 'debe de ser true',  ()=>{
    

    //1inicializacion
    const mensaje = 'Hola mundo';
    //estimulo
    const mensaje2 = `Hola mundo`;
    // observar el comportamiento 
    expect( mensaje ).toBe( mensaje2 );
} )
})


