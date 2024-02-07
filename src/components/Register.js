import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import './assets/css/Register.css';

export function RegisterForm() {
  return (
    <div className="container-register">
        <div className="box-register">
            <h2 className="title-register">Register</h2>
        <form /*onSubmit={handleSubmit}*/ className="loginform-register">
            <div className="row-register">
                <label htmlFor="username"><FaUser className="icon" /></label>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="row-register">
                <label htmlFor="email"><MdAlternateEmail className="icon-register" /></label>
                <input
                    type="email"
                    id="email"
                    placeholder="email@gmail.com"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="row-register">
                <label htmlFor="password"><FaLock className="icon-register" /></label>
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn-register">SIGN IN</button>
            <div className="register-link-register">
                <p>You have an account? <a href="#">Log in</a></p>
            </div>
        </form>
        </div>
    </div>
  );
}

export default RegisterForm;
