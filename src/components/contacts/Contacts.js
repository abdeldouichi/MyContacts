import React, {Component} from 'react';
import Contact from './Contact';

class Contacts extends Component {
    state = {
        contacts: [
            {id: 1, name: "abdel douichi", email: "abdel.douichi@gmail.com", tel: "0669541001"},
            {id: 2, name: "ilias douichi", email: "ilias.douichi@gmail.com", tel: "0669541051"},
            {id: 3, name: "zakria douichi", email: "zakria.douichi@gmail.com", tel: "0669541041"}
        ]
    };

    render() {
        const {info} = this.props
        const {contacts} = this.state;
        return (

            <div className={"card-goup"}>
                <h1>{info}</h1>
                <div className="row">
                    {contacts.map((contact) =>
                        (
                            <Contact data={contact} key={contact.id}/>
                        )
                    )}
                </div>
            </div>
        );
    }
}

export default Contacts;