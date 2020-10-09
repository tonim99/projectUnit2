import React, {useState} from 'react'
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
		<div className='Form'>
			<form onSubmit={handleSubmit}>
				<input
					className='text'
					type='text'
					placeholder='My Word'
					value={definition}
					onChange={handleChange}
				/>
				<input className='button' type='submit' value='Find My Word' />
			</form>
		</div>
	);
}

export default Form