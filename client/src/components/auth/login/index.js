import React, { Component } from 'react';
import { BrowserRouter as  Route, Link } from "react-router-dom";

import LoginForm from './_loginForm';
import ForgetPassword from './_forgetPassword';


class Login extends Component {
    
    state ={
        username: '',
        password: '',
        openModal: false
    }
    _onOpenModal = () => {
        this.setState({ openModal: true });
    };
    
    _onCloseModal = () => {
        this.setState({ openModal: false });
    };
    _onSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(res => {
            return res.json();
        }).then(res => {
            if(res.success){
                sessionStorage.setItem("user", this.state.username);
                sessionStorage.setItem("token", res.token);

                this.props.history.push('/main');
            }else {
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="Login_Container">
                <p className="login_title">Log in</p>
                <LoginForm onChange={e => this.setState({[e.target.name]: e.target.value})} onSubmit={this._onSubmit}/>
                <p className="login_forgot_pw" onClick={this._onOpenModal}>Did you forget your password?</p>
                <ForgetPassword open={this.state.openModal} onClose={this._onCloseModal} />
                <p className="login_link_title">Haven't registered your account?</p>
                <Link className="login_link_register" to='/register'>Go register</Link>
            </div>
        )
    }
}

export default Login;