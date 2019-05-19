import React from 'react';
import './App.css';
import Contact from './components/contacts/Contact';
import NavBar from './components/shared/navbar/NavBar';

function App() {
    return (
        <div className="App">
            <NavBar title="Contacts List"/>
            <div className="container">
                <div className={"card-goup row"}>
                    <Contact/>
                    <Contact name="abdel douichi" tel="0633433344" email="abdel.douichi@gmail.com"/>
                    <Contact name="ilias douichi" tel="0633433345" email="ilias.douichi@gmail.com"/>
                    <Contact name="zakaria douichi" tel="0633433346" email="zakaria.douichi@gmail.com"/>
                </div>
            </div>

        </div>
    );
}

export default App;
