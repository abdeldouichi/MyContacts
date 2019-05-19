import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './contact.css';
class Contact extends Component {
    render() {
        let {name, tel, email} = this.props.data;
        let colors= ["6c757d","007bff","28a745","ffc107"];
        return (

                <div className="card col-8 col-md-5 mx-auto mt-4 mb-auto">
                    <img
                        className="w-70 m-auto"
                        src={"https://ui-avatars.com/api/?name="+name.toLowerCase().split(" ").join("+")+"&color="+colors[Math.floor(Math.random() * 3)]}
                        alt={name.toLowerCase()} />

                        <div className="card-body p-0">
                            <div className="card-title ">{name}</div>
                            <div className="row">
                                <div className="card-text col-4 text-left">Email: </div>
                                <a className="card-link col-8 text-left p-0" href={"mailto:"+email}>{email}</a>

                                <div className="card-text col-4 text-left">Tel:</div>
                                <a className="card-link col-8 text-left p-0" href={"tel:"+tel}>{tel}</a>
                            </div>
                        </div>
                </div>
        );
    }

}
Contact.defaultProps = {
    email: "defaut@mail.com",
    name: "defaut name",
    tel: "000000000",
}

/*System  validation  proprieties*/
Contact.propTypes = {
    email: PropTypes.string.isRequired,
    name: PropTypes.string,
    tel: PropTypes.string
}

export default Contact;

