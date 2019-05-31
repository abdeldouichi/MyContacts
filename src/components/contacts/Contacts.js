import React, {Component} from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'Mohamed IDBRAHIM',
                email: 'idbrahimdev@gmail.com',
                phone: '0650303315'
            },
            {
                id: 2,
                name: 'Basma IDBRAHIM',
                email: 'basma@gmail.com',
                phone: '0650303316'
            },
            {
                id: 3,
                name: 'Walid IDBRAHIM',
                email: 'walid@gmail.com',
                phone: '0650303317'
            }
        ]
    };

    render() {
        const {info} = this.props;
        const {contacts} = this.state;
        return (

            <div className={"card-goup"}>
                <h1>{info}</h1>
                <div className="row">
                    {contacts.map((contact) =>
                        (
                            <Contact
                                data={contact}
                                key={contact.id}
                            />
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default Contacts;