import React, {Component} from 'react';

class Contact extends Component {
    render() {
        let {name, tel, email} = this.props;
        return (
            <div>
                <h1>Contact : {name}</h1>
                <ul>
                    <li>Tel: {tel}</li>
                    <li>Email: {email}</li>
                </ul>
            </div>
        );
    }

}
Contact.defaultProps = {
    email: "defaut@mail.com",
    name: "defaut name",
    tel: "000000000",
}



export default Contact;