import React, { useState } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom"
import Header from "./Header"
import Form from "./Form"
import Dashboard from "./Dashboard"



function App() {
  const [wordData, setWordData] = useState({});

  const handleSubmit = async (word) => {
    console.log('this is handleSubmit in app')
  
    let dictionaryUrl = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=ded20abd-0943-4f6c-bc39-7a0b56aa660e`;

    fetch(dictionaryUrl)
			.then((res) => res.json())
			.then((data) => setWordData(data));

    // const res = await fetch(dictionaryUrl)
    // const json = await res.json()
    // setWordData(data)
    
  }

  return (
		<div className='App'>
			<nav className='Header'>
				<Link to='/'>
					<Header />
				</Link>
			</nav>
			<div className='Search'>
				<Form handleSubmit={handleSubmit}/>
			</div>
			<main className='Dashboard'>
				<Dashboard />
			</main>
		</div>
	);
}

export default App;
