import React from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from './components/contacts/Contact';
import NavBar from './components/shared/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavBar title="Contacts List"/>
      <Contact />
      <Contact name="abdel douichi" tel="0633433344" email="abdel.douichi@gmail.com"/>
      <Contact name="ilias douichi" tel="0633433345" email="ilias.douichi@gmail.com"/>
      <Contact name="zakaria douichi" tel="0633433346" email="zakaria.douichi@gmail.com"/>


    </div>
  );
}

export default App;
