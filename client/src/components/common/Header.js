import React, { Component } from 'react';
import { BrowserRouter as  Route, Link } from "react-router-dom";

import Image_logo from "../../assets/images/logo.png"


class Header extends Component {
    render() {
        return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img className="img-fluid" src={Image_logo} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home
                            <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Sign In</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>);
    }
}

export default Header;