import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import Header from "./Header"
import Form from "./Form"
import WordInfo from './WordInfo'
import { fetchWord } from './api/api';

function App() {
	
	const [wordData, setWordData] = useState([])
	const [word, setWord] = useState()
	const [input, setInput] = useState('')
	const [error, setError] = useState();

  	const getWord = useCallback(() => {
		
		if(word !== undefined){
			fetchWord(word)
				.then((data) => {
					setWordData(data)
				})
				.catch((err) => {
					setError(err.message)
				})
		}		
	}, [word])
	
	useEffect(() => {
		getWord()
	}, [getWord])
	return (
		<div className='app'>
			<Header />
			<Form 
				input={input}
				setInput={setInput} 
				setWord={setWord}
			/>
			<WordInfo wordData={wordData} word={word} error={error}/>
			{error && <div>{error}</div>}
		</div>
	);
}

export default App;
