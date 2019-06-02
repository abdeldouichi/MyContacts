import React, {Component} from 'react';
import Contact from './Contact';
import {connect} from "react-redux";
import {getContacts} from '../../actions/contactActions'
class Contacts extends Component {
    componentDidMount() {
        // eslint-disable-next-line no-unused-expressions
        // eslint-disable-next-line no-unused-expressions
        this.props.getContacts();
    }

    render() {
        const {info, contacts} = this.props;
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.myContacts.contacts
    }
};

export default connect(mapStateToProps, {getContacts})(Contacts);