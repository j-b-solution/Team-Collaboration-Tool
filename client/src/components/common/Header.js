import React, { Component } from 'react';
import { BrowserRouter as  Route, Link } from "react-router-dom";

import Image_logo from "../../assets/images/logo_main.png"
import { isLoggedIn  }  from '../../helpers/auth';

class Header extends Component {
    state={
        user: sessionStorage.getItem('user')
    }

    _userLogout = () => {
        fetch ('http://localhost:8080/api/auth/logout', {
            method: 'GET'
        }).then(res => {
                res.json();
        }).then(res => {
            sessionStorage.clear();
            this.setState({
                user: ''
            })
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        const { user } = this.state;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light static-top">
                <div className="container">
                    <Link className="navbar-brand" to='/'>
                        <img className="img-fluid logo" src={Image_logo} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <Link className="nav-link" to='/'>Product
                                <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/consult">Contact Sales</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/download">Download</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/main">Main</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            { isLoggedIn() ? 
                                (
                                    <li class="nav-item dropdown right">
                                        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Hello, {user}</a>
                                        <div class="dropdown-menu">
                                        <Link class="dropdown-item" to='/'>View Profile</Link>
                                        
                                        <div class="dropdown-divider"></div>
                                        <Link class="dropdown-item" to="/dashboard">Go to Dashboard</Link>
                                        <Link class="dropdown-item" onClick={this._userLogout}>Logout</Link>
                                        </div>

                                    </li>
                                ) 
                                :
                                (
                                    <li className="nav-item right">
                                        <Link className="nav-link signin" to="/login">Sign In</Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;