import React, {useState} from 'react'
import {Link} from "react-router-dom"
const Form =(props)=> {
  console.log("this is Form props - ", props)
  const [definition, setDefinition] = useState ('')

  const handleChange = (e) => {
    const word = e.target.value
    setDefinition(word)
    console.log('this is definition- ', definition)
  }
    
  const handleSubmit = (e) => {
		console.log('handleSubmit clicked');
		e.preventDefault();
		props.handleSubmit(definition);
		setDefinition('');
  };
  
  return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='My Word'
				value={definition}
        onChange={handleChange}
			/>
				<input type='submit' value='Find My Word' />
		</form>
	);
}

export default Form