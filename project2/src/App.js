import React, { useState } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom"
import Header from "./Header"
import Form from "./Form"
import WordInfo from './WordInfo';
import Main from './Main'
function App() {

	//if <input> is empty string do nothing
	//else if word is not found return <input> is not a word
	//else render the definitions
	
	const [wordData, setWordData] = useState([])
	  
  	const handleSubmit = (word) => {
	
		let dictionaryUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=ded20abd-0943-4f6c-bc39-7a0b56aa660e`;
		
  		word = '' ? null : 
		fetch(dictionaryUrl)
			.then((res) => res.json())
			.then((data) => {
				console.log('this is data- ', data);	
				setWordData(data)})
			}	
				return (
					<div className='App'>
						<nav className='Header'>
							{/* <Link to='/'> */}
								<Header />
							{/* </Link> */}
						</nav>
						<div className='Search'>
							<Form handleSubmit={handleSubmit} />
						</div>
						<main className='Dashboard'>
							<Main />
							{wordData.length <= 0 ? null : <WordInfo wordData={wordData} />}
						</main>
					</div>
				);
}

export default App;
