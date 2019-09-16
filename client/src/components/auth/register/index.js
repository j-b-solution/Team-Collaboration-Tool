import React, { Component } from 'react'
import RegisterForm from './_registerForm';
import { BrowserRouter as  Route, Link } from "react-router-dom";
import { withAlert } from 'react-alert'

class Register extends Component {
    state={
        username: '',
        password:'',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        email: ''
    }

    _submitForm = (event) => {
        event.preventDefault();
        if(this.state.password !== this.state.confirmPassword){
            alert('Passwords do not match');
        }else{
            fetch('https://jb-solutions.herokuapp.com/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': '*'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password
                })
            }).then(res =>{
                return res.json();
            }).then(res => {
                if(res.success) {
                    this.props.alert.success(res.msg);
                    this.props.history.push('/login');
                }else {
                    this.props.alert.error(res.msg);
                }
            }).catch(err =>{
                console.log(err);
            })
        }
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

export default withAlert()(Register);