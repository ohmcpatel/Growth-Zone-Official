
import logo from "../images/logo.png"
import "./LogIn.css"
import { useHistory } from "react-router-dom";
import db from "./firebase.js";
import { useState } from 'react'

export default function LogIn(){

    let history = useHistory();

    return (
        <div>
            <nav>

                <div className="headlines">
                    <h1 className="login">Log In</h1>
                    <button 
                        onClick={() => {
                            history.push("/signup")
                        }}className="signup">Sign Up</button>
                </div>

                <img className ="logo" src={logo} alt="Comfy Logo"/>

                <div className = "fields">
                    <input className="email" type="text" placeholder="Email" />
                    <input className="password" type="password" placeholder="Password" />
                </div>

                <h3 className = "fyp"> <a href="https://www.water.com/selfserve/myonlineaccount/forgot-password/email-verification-sent.jsf" target="_blank">Forgot your password?</a></h3>

                <div className="container">
                    <button 
                        onClick={() => {
                            history.push("/dashboard")
                        }}className="log">Login</button>
                </div>

            </nav>
        </div>     
    );
}


