import React, { useState } from 'react';
import './App.scss';
import { Route, Link, Switch } from "react-router-dom"
import Header from "./Header"
import Form from "./Form"
import Main from './Main'
import WordInfo from './WordInfo'
import Word from './Word'
function App() {
	
	const [wordData, setWordData] = useState([])
	//new state  ?
  	const handleSubmit = (word) => {
	
		let dictionaryUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=ded20abd-0943-4f6c-bc39-7a0b56aa660e`;
		
  		word = '' ? null: 
			fetch(dictionaryUrl)
			.then((res) => res.json())
			.then((data) => {
				// console.log('this is data- ', data);	
				//when setting new setWordData refresh? or redirect to '/'
				setWordData(data)})			
	}	

	// console.log('this is wordData App - ', wordData);
	return (
		<div className='App'>
			{/* clicking on header should clear state and go back to '/' */}
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
