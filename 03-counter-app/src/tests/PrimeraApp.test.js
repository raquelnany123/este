import React from 'react';
import { shallow } from 'enzyme'
import PrimeraApp from "../PrimeraApp";


describe('Pruebas en <PrimeraAPP />>', () => {

    // test(' debe de estar el mensaje "Hola, Soy Goku" ', () => {
        
    //     const saludo = 'Hola, soy Goku';


    //     // wrapper = producto rendemizado de lo que se quiere mostrar
    //     const {getByText} = render( <PrimeraApp saludo = { saludo } />)

    //     expect( getByText(saludo) ).toBeInTheDocument();

    // });

    test('debe de mostrar <PrimeraApp /> correctamente', () =>{

        const saludo = 'Hola, Soy goku';
        const wrapper = shallow( <PrimeraApp />)
    
        expect( wrapper ).toMatchSnapshot();

    });
    

    
})
