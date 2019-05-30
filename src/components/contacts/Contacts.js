import React, {Component} from 'react';
import Contact from './Contact';
import {Consumer} from '../context';

class Contacts extends Component {


    render() {
        const {info} = this.props;
        return (
            <Consumer>
                {value => (
                    <div className={"card-goup"}>
                        <h1>{info}</h1>
                        <div className="row">
                            {value.contacts.map((contact) =>
                                (
                                    <Contact
                                        data={contact}
                                        key={contact.id}
                                    />
                                )
                            )}
                        </div>
                    </div>
                )}
            </Consumer>
        )
    }
}

export default Contacts;