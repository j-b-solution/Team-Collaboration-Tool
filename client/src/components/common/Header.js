import React, { Component, Fragment } from 'react';
import { BrowserRouter as  Route, Link } from "react-router-dom";
import { withAlert } from 'react-alert'

import Image_logo from "../../assets/images/logo_main.png"

class Header extends Component {
    state={
        user: sessionStorage.getItem('user'),
        userProfile: this.props.userProfile,
        isLoggedIn: this.props.isLoggedIn
    }

    componentDidUpdate(nextProps) {

        if(nextProps.isLoggedIn !== this.props.isLoggedIn) {
            this.setState({ 
                isLoggedIn: this.props.isLoggedIn,
                userProfile: this.props.userProfile,
                user: sessionStorage.getItem('user')
            })
        }
    }

    _userLogout = (e) => {
        fetch ('http://localhost:8080/api/auth/logout', {
            method: 'GET'
        }).then(res => {
            return res.json();
        }).then(res => {
            if(res.success) {
                this.props.alert.success(res.msg);
                sessionStorage.clear();
                this.setState({
                    user: sessionStorage.getItem('user'),
                    isLoggedIn: false,
                    userProfile: null
                })
            }

        }).catch(err => {
            console.log(err);
        })
    }
    render() {
        const { user, userProfile, isLoggedIn } = this.state;
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

                            { isLoggedIn ? 
                                (
                                    <Fragment>
                                        <li className="nav-item">
                                            <Link className="nav-link" to={{pathname: `/${userProfile.id}/main`, component: '../main'}}> Main</Link>
                                        </li>
                                        <li className="nav-item dropdown right">
                                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Hello, {user}</a>
                                            <div className="dropdown-menu">
                                            <Link className="dropdown-item" to={{pathname: `/${userProfile.id}/edit`, component: '../user/edit'}}>Edit Profile</Link>
                                            
                                            <div className="dropdown-divider"></div>
                                            <Link className="dropdown-item" to={{pathname: `/${userProfile.id}/main`}} >Go to team list</Link>
                                            <Link className="dropdown-item" onClick={this._userLogout} to='/'>Logout</Link>
                                            </div>

                                        </li>
                                    </Fragment>
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

export default withAlert()(Header);