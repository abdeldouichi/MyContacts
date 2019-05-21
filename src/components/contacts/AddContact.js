import React, {Component} from 'react';

class AddContact extends Component {
    state ={
        name :'',
        email:'',
        phone:''
    };
    render() {
        const {name, email, phone } = this.state;
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">Add Contact</h4>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <input type="text" className="form-control"  value={name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <input type="text" className="form-control" value={email}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Phone</label>
                                <input type="text" className="form-control" value={phone}/>
                            </div>
                            <button className="btn btn-primary btn-block">Add new Contact</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddContact;