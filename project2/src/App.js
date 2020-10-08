import React, { useState } from 'react';
import './App.scss';
import { Route, Link, Switch } from "react-router-dom"
import Header from "./Header"
import Form from "./Form"
import Main from './Main'
import WordInfo from './WordInfo'
function App() {

	//if <input> is empty string do nothing
	//else if word is not found return <input> is not a word
	//else render the definitions
	
	const [wordData, setWordData] = useState([])
	  
  	const handleSubmit = (word) => {
	
		let dictionaryUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=ded20abd-0943-4f6c-bc39-7a0b56aa660e`;
		
  		word = '' ? null: 
			fetch(dictionaryUrl)
			.then((res) => res.json())
			.then((data) => {
				console.log('this is data- ', data);	
				setWordData(data)})
				console.log("this is wordData", wordData)
			}	
				return (
					<div className='App'>
						<Header />
						<Form handleSubmit={handleSubmit} />
						<Switch>
							<Route exact path='/'>
								<Main />
							</Route>
							<Route path='/words'>
								{wordData.length <= 0 ? null : <WordInfo wordData={wordData} />}
							</Route>
						</Switch>
					</div>
				);
}

export default App;
