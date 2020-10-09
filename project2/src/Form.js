import React, {useState} from 'react'
import {Link} from "react-router-dom"
const Form =(props)=> {
  const [definition, setDefinition] = useState ('')

  const handleChange = (e) => {
    const word = e.target.value
    setDefinition(word)
  }
    
  const handleSubmit = (e) => {
		e.preventDefault();
		props.handleSubmit(definition);
		setDefinition('');
  };
  
  return (
		<form className = "form" onSubmit={handleSubmit}>
			<input
				className= 'text'
				type='text'
				placeholder='My Word'
				value={definition}
  	      		onChange={handleChange}
			/>
			<input className= 'button' type='submit' value='Find My Word' />
		</form>
	);
}

export default Form