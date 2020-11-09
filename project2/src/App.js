import React, { useState } from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom"
import Header from "./Header"
import Form from "./Form"
import WordInfo from './WordInfo'
import Word from './Word'

function App() {
	const key = `${process.env.REACT_APP_API_KEY}`;
	
	const [wordData, setWordData] = useState([])
	
  	const handleSubmit = (word) => {
	
		let dictionaryUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`;
		
  		word = '' ? null: 
			fetch(dictionaryUrl)
			.then((res) => res.json())
			.then((data) => {
				setWordData(data)})			
	}	

	return (
		<div className='app'>
			<Header />
			<p>
				Welcome to My Dictionary! Search for a word to see definitions, parts of
				speech, pronunciations, and alternate uses.
			</p>
			<Form handleSubmit={handleSubmit} />
			<Switch>
				<Route
					path='/words/:definition'
					render={(routerProps) => <Word {...routerProps} words={wordData} />}
				/>
				<Route path='/'>
					{wordData.length <= 0 ? null : <WordInfo wordData={wordData} />}
				</Route>
			</Switch>
		</div>
	);
}

export default App;
