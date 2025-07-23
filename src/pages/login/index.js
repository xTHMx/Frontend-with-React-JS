import React from "react";
import "./styles.css"

import logo from "../../assets/logo.svg"
import padlock from "../../assets/padlock.png"

export default function Login(){ 
    return (
        <div className="login-container">
        <section className="form">
            <img src={logo}></img>
            <form>
                <h1>Access Your Account</h1>
                <input placeholder="Username" />
                <input type="password" placeholder="password" />
                <button className="button" type="submit" >Login</button>
            </form>
        </section>
        <img src={padlock}></img>

        </div>
    );
}