import React, {Component} from 'react';
import {Consumer} from '../Context';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };
    onChangeInput = e => this.setState({[e.target.name]: e.target.value});
    submit = (dispatch,size, e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_CONTACT',
            payload: {
                id: size+1,
                name: this.state.name,
                email: this.state.email,
                tel: this.state.phone,
            }
        });
    };

    render() {
        const {name, email, phone} = this.state;

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
                                                <div className="form-group">
                                                    <label htmlFor="">Name</label>
                                                    <input name="name" type="text" className="form-control"
                                                           defaultValue={name}
                                                           onChange={this.onChangeInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">Email</label>
                                                    <input name="email" type="text" className="form-control"
                                                           defaultValue={email}
                                                           onChange={this.onChangeInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="">Phone</label>
                                                    <input name="phone" type="text" className="form-control"
                                                           defaultValue={phone}
                                                           onChange={this.onChangeInput}
                                                    />
                                                </div>
                                                <button className="btn btn-primary btn-block">Add new Contact</button>
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