import React from 'react'
const Form =({setInput, setWord, input})=> {

  const handleSubmit = (e) => {
    try{
		e.preventDefault()
		setWord(input)
	}catch(error) {
		return <div>{error.message}</div>
	}finally {
		setInput('')
	}
  }
  
    return (
		<form onSubmit={handleSubmit}>
			<input
				className='text'
				type='text'
				placeholder='Your Word'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<input className='button' type='submit' value='Find My Word' />
		</form>
		
	);
}

export default Form