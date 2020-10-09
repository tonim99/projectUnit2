import React, { useState } from 'react';
import './App.scss';
import { Route, Switch } from "react-router-dom"
import Header from "./Header"
import Form from "./Form"
import Main from './Main'
import WordInfo from './WordInfo'
import Word from './Word'
function App() {
	
	const [wordData, setWordData] = useState([])
	
  	const handleSubmit = (word) => {
	
		let dictionaryUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=ded20abd-0943-4f6c-bc39-7a0b56aa660e`;
		
  		word = '' ? null: 
			fetch(dictionaryUrl)
			.then((res) => res.json())
			.then((data) => {
				setWordData(data)})			
	}	

	return (
		<div className='App'>
			<Header /> 
			<Main />
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
