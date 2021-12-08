// Functional Component

//sniper rafcp funcional component con proptyupes

import React, { useState }from 'react';
import PropTypes from 'prop-types';



const CounterApp = ({value = 10}) => {

    const [counter, setCounter] = useState( value );

    const handleAdd = () => {
        setCounter ( counter + 1 );
        // setCounter (c) => c + 1);
    }

    const handleSub = () => {
        setCounter ( counter - 1);
    }

    const handleReset = () =>{
        setCounter ( value );
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter }</h2>
        {/* <h2> { value } </h2> */}
        <button onClick={ handleAdd }>+1</button>
        <button onClick={handleReset} >Reset</button>
        <button onClick={handleSub}>-1</button>
        </>
    )
}

CounterApp.propType={
    value: PropTypes.number
}

export default CounterApp;