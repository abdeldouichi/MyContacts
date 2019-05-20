import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './contact.css';

/**
 * Icones material-ui
 */
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import DeleteIcon from '@material-ui/icons/Delete';


class Contact extends Component {
    state = {
        showContactToggle: true
    };


    showContact(myMessage) {
        console.log(myMessage);
        this.setState({
            showContactToggle: !this.state.showContactToggle,
        })
    };
    onDeleteAction = () =>{
        this.props.deleteContactFromChild();
    };
    render() {
        let {data} = this.props;
        let {name, tel, email} = data;

        let colors = ["00A9D8", "0D9EDF", "259B9A", "292930", "3EB650", "FCC133", "E12B38", "7F8688", "929D9E", "F3E367", "18181E", "DEC79B", "F7F7F7", "7DA2A9", "4BFFA5", "040F3D", "C6C4C5", "34421E", "F1F1EF", "C19434", "FB8122", "1D2228", "E1E2E2", "D48166", "373A36", "", "E6E2DD", "151617", "090A0A", "151516", "000000", "181818", "2CCCC3", "FACD3D", "5626C4", "E60576", "32064A", "E56B1F", "FCD02C", "E42C6A"];
        return (

            <div className="card col-8 col-md-5 mx-auto mt-4 mb-auto p-3 rounded">
                <div className="row mb-3">
                    <img
                        className="col-4 m-auto rounded-circle"
                        src={"https://ui-avatars.com/api/?name=" + name.toLowerCase().split(" ").join("+") + "&color=" + colors[Math.floor(Math.random() * (colors.length - 1))]}
                        alt={name.toLowerCase()}/>

                    <div className="col-7 my-auto mr-0 ml-auto">
                        <div className="col-7 my-auto mr-0 ml-auto">
                            {
                                (this.state.showContactToggle)
                                    ? (
                                        <KeyboardArrowDown className="b-icon text-primary"
                                                           onClick={this.showContact.bind(this, name)}/>
                                    )
                                    : (
                                        <KeyboardArrowUp className="b-icon text-primary"
                                                         onClick={this.showContact.bind(this, name)}/>
                                    )
                            }

                            <DeleteIcon className="b-icon text-danger" onClick={this.onDeleteAction} />
                        </div>
                    </div>
                </div>
                <div className="card-body p-2 col-12">
                    <h3 className="card-title text-right">{name}</h3>
                    {
                        (this.state.showContactToggle)
                            ? (<div className="row">
                                    <div className="card-text col-4 text-left">Email:</div>
                                    <a className="card-link col-8 text-left p-0" href={"mailto:" + email}>{email}</a>

                                    <div className="card-text col-4 text-left">Tel:</div>
                                    <a className="card-link col-8 text-left p-0" href={"tel:" + tel}>{tel}</a>
                                </div>
                            )
                            : null
                    }
                </div>

            </div>
        );

    }
}

Contact.defaultProps = {
    data: null
};

/*System  validation  proprieties*/
Contact.propTypes = {
    data: PropTypes.object.isRequired,
    deleteContactFromChild: PropTypes.func.isRequired
};

export default Contact;

