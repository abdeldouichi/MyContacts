import React, {Component} from 'react';
import {Consumer} from '../context';
import axios from 'axios'
import TextInputGroup from '../helpers/TextInputGroup';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {},
    };
    onChangeInput = e => this.setState({[e.target.name]: e.target.value});
    submit = (dispatch, size, e) => {
        e.preventDefault();

        const {name, email, phone} = this.state;

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
        const newContact = {
            name,
            email,
            phone,
        };
        axios.post('https://jsonplaceholder.typicode.com/users', newContact)
            .then(res => dispatch({
                type: 'ADD_CONTACT',
                payload: res.data
            }));

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {},
        })
    };

    render() {
        const {name, email, phone, errors} = this.state;

        return (
            <Consumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div>
                                <form onSubmit={this.submit.bind(this, dispatch, value.contacts.length)}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Add Contact</h4>
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

                                                <button className="btn btn-primary btn-block">Add new Contact
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        )
                    }
                }
            </Consumer>
        );
    }
}

export default AddContact;