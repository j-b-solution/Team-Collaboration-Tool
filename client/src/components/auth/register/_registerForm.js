import React from 'react';
import PropTypes from 'prop-types';


const RegisterForm = ({ onChange, onSubmit }) => {
    return (
        <form className="Register_form" onSubmit={onSubmit}>
            <input className="inputTextBox" name="username" type="text" placeholder="username" onChange={onChange}/>
            <input className="inputTextBox" name="firstName" type="text" placeholder="First Name" onChange={onChange}/>
            <input className="inputTextBox" name="lastName" type="text" placeholder="Last Name" onChange={onChange}/>
            <input className="inputTextBox" name="email" type="email" placeholder="E-mail address" onChange={onChange}/>
            <input className="inputTextBox" name="password" type="password" placeholder="password" onChange={onChange}/>
            <input className="inputTextBox" name="confirmPassword" type="password" placeholder="Confirm Password" onChange={onChange}/>
   

            <button className="btnRegister" type="submit">Register now</button>
        </form>
    )
}

RegisterForm.propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
}

RegisterForm.defaultProps = {
    onChange: console.warn('function onChange has not defined...'),
    onSubmit: console.warn('function onSubmit has not defined...')
}

export default RegisterForm;