import React from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import NavBar from './components/shared/navbar/NavBar';
import {Provider} from './components/Context';
import AddContact from './components/contacts/AddContact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./components/pages/About";

function App() {
    return (
        <Provider>
            <Router>
                <div className="App">
                    <NavBar title="Contacts List"/>
                    <div className="container">
                        <Switch>
                             <Route exact path="/"  component={Contacts} />
                             <Route exact path="/contact/add"  component={AddContact} />
                             <Route exact path="/about"  component={About} />
                        </Switch>

                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
