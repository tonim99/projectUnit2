import React, { useState } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"
import Header from "./Header"
import Form from "./Form"
import Dashboard from "./Dashboard"
import WordInfo from './WordInfo';

//useState or useEffect for data rendering? or both? 

function App() {
  	const [wordData, setWordData] = useState([]);
	console.log('this is wordData - ', wordData)


  	const handleSubmit = (word) => {
		  //if word is empty string or "null" or 'undefined' 
			//return nothing
		//else: run this fetch
    	console.log('this is handleSubmit in app')
  
    let dictionaryUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=ded20abd-0943-4f6c-bc39-7a0b56aa660e`;

    fetch(dictionaryUrl)
			.then((res) => res.json())
			.then((data) => {
				//data shows in console.log when I search a word and is passed to WordInfo props
				console.log("this is json data- ", data)
				setWordData(data)})
				
  }

  return (
		<div className='App'>
			<nav className='Header'>
				<Link to='/'>
					<Header />
				</Link>
			</nav>
			<div className='Search'>
				<Form handleSubmit={handleSubmit} />
			</div>
			<main className='Dashboard'>
				<Dashboard />
				{wordData.length <= 0 ? null : <WordInfo wordData={wordData} />}
			</main>
		</div>
	);
}

export default App;
