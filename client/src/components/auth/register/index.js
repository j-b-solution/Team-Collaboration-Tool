import React, { Component } from 'react'
import RegisterForm from './_registerForm';
import { BrowserRouter as  Route, Link } from "react-router-dom";

class Register extends Component {
    state={
        username: '',
        password:'',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        email: ''
    }

    _submitForm = () => {

    }
    render() {
        return (
            <div className="Register_Container">
                <p className="register_title">Start your first group here</p>
                <RegisterForm onChange={e => this.setState({[e.target.name]: e.target.value})} onSubmit={this._submitForm}/>

                <p className="login_link_title">Already a member?</p>
                <Link className="login_link_register" to='/login'>Go to log in</Link>
            </div>
        )
    }
}

export default Register;