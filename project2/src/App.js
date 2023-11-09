import React, { useState } from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom"
import Header from "./Header"
import Form from "./Form"
import WordInfo from './WordInfo'
import Word from './Word'

function App() {
	const REACT_APP_API_KEY = `${process.env.REACT_APP_API_KEY}`;
	
	const [wordData, setWordData] = useState([])
	
  	const handleSubmit = (word) => {
	
		let dictionaryUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${REACT_APP_API_KEY}`;
		
  		word = '' ? null: 
			fetch(dictionaryUrl)
			.then((res) => res.json())
			.then((data) => {
				setWordData(data)})	
			.catch((err) => <div>{err}</div>)		
	}	

	return (
		<div className='app'>
			<Header />
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
