import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './assets/css/Login.css';


export function LoginForm() {
    return(
        <div className="container">
        <div className="box">
            <h2 className="title">Login</h2>
            <form /*onSubmit={handleSubmit}*/ className="loginform">
                <div className="row">
                    <label htmlFor="username"><FaUser className="icon" /></label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="row">
                    <label htmlFor="password"><FaLock className="icon" /></label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn">LOG IN</button>
                {/* <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div> */}
            </form>
        </div>
        </div>
    )
}

export default LoginForm;