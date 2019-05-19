import React from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import NavBar from './components/shared/navbar/NavBar';

function App() {
    return (
        <div className="App">
            <NavBar title="Contacts List"/>
            <div className="container">
                <Contacts />
            </div>


        </div>
    );
}

export default App;
