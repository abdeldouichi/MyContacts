import React from 'react';
import './App.css';
import Contacts from './components/contacts/Contacts';
import NavBar from './components/shared/navbar/NavBar';
import {Provider} from './components/context';
import EditContact from './components/contacts/EditContact';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from "./components/pages/About";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
    return (
        <Provider>
            <Router>
                <div className="App">
                    <NavBar title="Contacts List"/>
                    <div className="container">
                        <Switch>
                             <Route exact path="/"  component={Contacts} />
                             <Route exact path="/contact/"  component={EditContact} />
                             <Route exact path="/contact/:id"  component={EditContact} />
                             <Route exact path="/about"  component={About} />
                             <Route component={PageNotFound} />
                        </Switch>

                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
