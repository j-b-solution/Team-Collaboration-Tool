import React, { Component } from 'react';
import { BrowserRouter as  Route, Link } from "react-router-dom";

import LoginForm from './_loginForm';

class Login extends Component {
    state ={
        username: '',
        password: ''
    }

    _onSubmit = (e) => {
        e.preventDefault();
        let { username, password } = this.state;
        this.setState({
            auth: {
                username: '',
                password: ''
            }
        })
    }

    render() {
        console.log(this.state)
        return (
            <div className="Login_Container">
                <p className="login_title">Log in</p>
                <LoginForm onChange={e => this.setState({[e.target.name]: e.target.value})} onSubmit={this._onSubmit}/>
                <p className="login_forgot_pw">Did you forget your password?</p>

                <p>Haven't registered your account?</p>
                <Link className="login_link_register" to='/register'>Go register</Link>
            </div>
        )
    }
}

export default Login;