import React, {useState} from 'react'

const Form =(props)=> {
console.log('this is props - ', props)
    const [definition, setDefinition] = useState ('')
    const handleSubmit = e => {
        console.log('handleSubmit clicked')
        e.preventDefault()
        props.handleSubmit(definition)
        setDefinition('')
    }
    const handleChange = e => {
        console.log('handleChange')
        const word = e.target.value
        setDefinition(word)
    }
    return (
		<form onSubmit={handleSubmit}>
            <input 
            type='text'
            placeholder='Your Word'
            value={definition}
            onChange={handleChange}
          />
            <input 
            type='submit'
            value='Find Your Word'
            />
		</form>
		);
}
export default Form