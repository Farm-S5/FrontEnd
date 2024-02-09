import React from 'react';
import './assets/css/Header.css';
import './assets/css/HeaderM.css';
import logo from './assets/img/logo.png';
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";


export function HeaderForm() {
    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.clear();
        navigate('/');
    };
    
    const handleHistory = () =>{
        navigate('/History');
    };

  return (
    <div>
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="#">Messagerie</a></li>
            </ul>
            <div className="navbar-icon">
                <button type="submit" className="history" onClick={handleHistory}>HISTORY</button>
                <button className="login-button" onClick={handleLogout}> <IoLogOut className="iconM" /> </button>
            </div>
        </nav>
    </div>
  );
}

export default HeaderForm;
