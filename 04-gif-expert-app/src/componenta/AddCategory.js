import React, { useState } from "react";
import PropTypes from 'prop-types';




// aqui esta recibiendo el set categoties pero desestructurado
// ya que esta adentro de props y para usarlo seria prorps como parametro
// y despues en la funcion props.setCategories
export const AddCategory = ( { setCategories }) => {
  const [inputValue, setInputValue] = useState('');
  
    
  const handleInputChange = (e) => {
      setInputValue( e.target.value );
  }
  
  const handleSubmit = (e ) => {
    e.preventDefault();
    
    if ( inputValue.trim().length > 2){
       setCategories(cats => [ inputValue, ...cats ] ); 
       setInputValue('');
    }


    
    // console.log(setCategories)
  }
  
  return (
    <form onSubmit={ handleSubmit }>

      <input 
      type="text" 
      value={ inputValue } 
      onChange={ handleInputChange } 
      />
    
    </form>
  )
}

AddCategory.protoType = {
    setCategories: PropTypes.func.isRequired
}