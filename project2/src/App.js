import React from 'react';
import './App.css';
import Header from "./Header"
import Form from "./Form"
import Dashboard from "./Dashboard"
function App() {
  return (
    <div className="App">
       <Header/>
       <Form />
       <Dashboard />
    </div>
  );
}

export default App;
