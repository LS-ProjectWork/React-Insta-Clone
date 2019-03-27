import React from 'react';

const LoginPage = props => {
    return (
        <div>
            <form onSubmit={props.submit} >
                <input name="username" placeholder='username' />
                <input name="password" placeholder='password' />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;