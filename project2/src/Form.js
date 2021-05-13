import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Form = (props) => {
	const [definition, setDefinition] = useState('');

	const handleChange = (e) => {
		const word = e.target.value;
		setDefinition(word);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.handleSubmit(definition);
		setDefinition('');
	};

	return (
		<div className='form__container'>
			<form className='form' onSubmit={handleSubmit}>
				<input
					className='text'
					type='text'
					placeholder='Type to search'
					value={definition}
					onChange={handleChange}
				/>
				<FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
			</form>
		</div>
	);
};

export default Form;
