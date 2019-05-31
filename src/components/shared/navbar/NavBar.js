import React from 'react';
import './navbar.css';
import {Link} from "react-router-dom";
/**
 * Icones material-ui
 */
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';

const NavBar = (props) => {
    let {title} = props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light  ">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">MyContacts</Link>

                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" >{title} <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">MyProfile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About us</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Add contact <AddCircleOutline /></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            
        );
};
NavBar.defaultProps = {
    title : "default title"
}

export default NavBar