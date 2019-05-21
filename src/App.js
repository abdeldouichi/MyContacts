import React from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import NavBar from './components/shared/navbar/NavBar';
import {Provider} from './components/Context';
import AddContact from './components/contacts/AddContact';


function App() {
    return (
        <Provider>
            <div className="App">
                <NavBar title="Contacts List"/>
                <div className="container">
                    <AddContact />
                    <Contacts info="liste de contact static"/>
                </div>
            </div>
        </Provider>
    );
}

export default App;
