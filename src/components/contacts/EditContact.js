import React, {Component} from 'react';
import axios from 'axios';
import TextInputGroup from '../helpers/TextInputGroup';
import {connect} from "react-redux";
import {addContact} from '../../actions/contactActions';
import uuid from 'uuid'
class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {},
        isCreate: true,
        id: 0,
    };

    async componentDidMount() {
        if (this.props.match.params.id !== undefined) {
            console.log("edit");
            const id = this.props.match.params.id;

            this.setState({
                isCreate:false,
                id
            });
        } else {
            console.log("create");
            this.setState({isCreate: true});
        }
    }

    onChangeInput = e => this.setState({[e.target.name]: e.target.value});
    submit = async ( e) => {
        e.preventDefault();

        const {name, email, phone, isCreate, id} = this.state;

        if (name === "") {
            this.setState({errors: {name: "the name is Required !"}})
            return;
        }
        if (phone === "") {
            this.setState({errors: {phone: "the phone is Required !"}})
            return;
        }
        if (email === "") {
            this.setState({errors: {email: "the email is Required !"}})
            return;
        }
        const dataContact = {
            name,
            email,
            phone,
        };
        try {
            if (isCreate) {
               dataContact.id = uuid();
               this.props.addContact(dataContact)
            } else {
                // update code
            }
            this.setState({
                name: '',
                email: '',
                phone: '',
                errors: {},
            });
            this.props.history.push('/')
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        const {name, email, phone, errors, isCreate} = this.state;

        return (

                            <div>
                                <form onSubmit={this.submit.bind(this)}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">{(isCreate) ? "Add Contact" : "Edit Contact"}</h4>
                                            <div className="card-body">
                                                <TextInputGroup
                                                    label="Name"
                                                    name="name"
                                                    value={name}
                                                    onChange={this.onChangeInput}
                                                    type="text"
                                                    error={errors.name}
                                                />
                                                <TextInputGroup
                                                    label="Email"
                                                    name="email"
                                                    value={email}
                                                    onChange={this.onChangeInput}
                                                    type="email"
                                                    error={errors.email}
                                                />
                                                <TextInputGroup
                                                    label="Phone"
                                                    name="phone"
                                                    value={phone}
                                                    onChange={this.onChangeInput}
                                                    type="text"
                                                    error={errors.phone}
                                                />

                                                <button
                                                    className="btn btn-primary btn-block">{(isCreate) ? 'Add new' : 'Update'} Contact
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

        );
    }
}

export default connect(null,{addContact})(EditContact);