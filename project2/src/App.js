import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom"
import Header from "./Header"
import Form from "./Form"
import WordInfo from './WordInfo'
import Word from './Word'
import { fetchWord } from './api/api';

function App() {
	
	const [wordData, setWordData] = useState()
	const [word, setWord] = useState('')
	const [input, setInput] = useState()
	const [error, setError] = useState();

  	const getWord = useCallback(() => {
		if(word){
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
			<Switch>
				<Route
					path='/words/:definition'
					render={(routerProps) => <Word {...routerProps} wordData={wordData}/>}
				/>
				<Route path='/'>
					{wordData && <WordInfo wordData={wordData} />}
				</Route>
			</Switch>
			{error && <div>{error}</div>}
		</div>
	);
}

export default App;
