import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/contacts/Contact';
import NavBar from './components/shared/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Contact />
      <Contact />
      <Contact />
    </div>
  );
}

export default App;
