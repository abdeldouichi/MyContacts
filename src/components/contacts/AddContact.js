import React, {Component} from 'react';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };
    onChangeInput = e => this.setState({[e.target.name]: e.target.value});
    submit = e => {
        e.preventDefault();
        console.log(this.state);
    };
    render() {
        const {name, email, phone} = this.state;
        return (
            <div>
                <form onSubmit={this.submit}>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Add Contact</h4>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="">Name</label>
                                    <input name="name" type="text" className="form-control" defaultValue={name}
                                           onChange={this.onChangeInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Email</label>
                                    <input name="email" type="text" className="form-control" defaultValue={email}
                                           onChange={this.onChangeInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Phone</label>
                                    <input name="phone" type="text" className="form-control" defaultValue={phone}
                                           onChange={this.onChangeInput}
                                    />
                                </div>
                                <button className="btn btn-primary btn-block">Add new Contact</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddContact;