import React from 'react';
const Login = ()=>{
    return(
    <>
        <div class="login-wrapper">
            <h1>Login below</h1>
            <label>Email</label>
            <input type="email" placeholder="user email"/>
            <label>Password</label>
            <input type="password" placeholder="XXXXXXXXX"/>

            <button className="btn btn-login" >
                LOGIN
            </button>
        </div>

    </>
    )

};

export default Login;