import React, {Component} from 'react';
import Contact from './Contact';
import {connect} from "react-redux";

class Contacts extends Component {
    componentDidMount()  {
        // eslint-disable-next-line no-unused-expressions
        // eslint-disable-next-line no-unused-expressions
        this.props.getContacts();
    }
    render() {
        const {info, contacts} = this.props;
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
const mapStateToProps = (state) =>
{
    return {
        contacts: state.myContacts.contacts
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getContacts: () => {
            dispatch(
                {
                    type:'GET_CONTACTS',
                    action:'',
                }
            )
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);