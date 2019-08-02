import React from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({onChange, onSubmit}) => {
    return (
        <form className="login_form" onSubmit={onSubmit}>
            <input className="inputTextBox" name="username" type="text" placeholder="username" onChange={onChange}/>
            <input className="inputTextBox" name="password" type="password" placeholder="password" onChange={onChange}/>
            <button className="btnLogin" type="submit">Log in</button>
        </form>
    )
}

LoginForm.propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func
}

LoginForm.defaultProps = {
    onChange: console.warn('function onChange has not defined...'),
    onSubmit: console.warn('function onSubmit has not defined...')
}

export default LoginForm;