import React, {useState} from 'react'

const Form =(props)=> {

  const [definition, setDefinition] = useState ('')

  const handleSubmit = (e) => {
      console.log('handleSubmit clicked')
      e.preventDefault()
      props.handleSubmit(definition)
      setDefinition('')
    }

  const handleChange = (e) => {
      const word = e.target.value
      setDefinition(word)
    }
    
    return (
	  <form onSubmit={handleSubmit}>
      <input 
        type='text'
        placeholder='My Word'
        value={definition}
        onChange={handleChange}
        />
      <input 
        type='submit'
        value='Find My Word'
        />
	  </form>
	);
}

export default Form