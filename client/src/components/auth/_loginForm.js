import React from 'react';

const LoginForm = ({onChange, onSubmit}) => {
    return (
        <form className="login_form" onSubmit={onSubmit}>
            <input className="inputTextBox" name="username" type="text" placeholder="username" onChange={onChange}/>
            <input className="inputTextBox" name="password" type="password" placeholder="password" onChange={onChange}/>
            <button className="btnLogin" type="submit">Log in</button>
        </form>
    )
}

export default LoginForm;