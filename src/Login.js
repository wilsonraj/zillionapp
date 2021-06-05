import React, { useState, useEffect } from 'react';

import './login.css';
import logo from './image/1.jpg';
import {
    Link
  } from "react-router-dom";

function Login() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const { username, password } = inputs;
    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            // get return url from location state or default to home page
            const { from } = location.state || { from: { pathname: "/mainpage" } };
           
        }
    }
    return (
        <div className="login">
           <p>login</p>
           
           <div className="login-border">
               <div className="login-image">
               <img src={logo} alt="logo " id="logo-img"></img>
               </div>
               <div className="login-details">
                   <p id="login-welcome">  Hello Zillionaire!</p>
                   <div className="loginForm">

                       <p id="login-text">
                       STEP INTO UR DREAMS
                       </p>
                       <div className="login-formcontrol">
                           <input type="text" className="username" placeholder="UserName" 
                            name="username" value={username} onChange={handleChange}
                           
                           >  
                           </input>
                           <input type="password" className="password" placeholder="Password"
                           name="password" value={password} onChange={handleChange}
                           > 
                            
                           </input>
                           
                           <button onClick= {handleSubmit}>Login</button>
                       </div>
                       <Link to="/register" style={{textDecoration:'none'}}>
                       <p id="create">Create Account</p>
                       </Link>
                       <p id="forgot">Forgot Password</p>
                   </div>

               </div>
           </div>
        </div>
    )
}

export default Login
