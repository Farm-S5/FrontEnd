import React from 'react';
import './assets/css/Header.css';
import logo from './assets/img/logo.png';
import { FaUser, FaSearch} from "react-icons/fa";


export function HeaderForm() {
  return (
    <div>
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="#">List of Culture</a></li>
            </ul>
            <div className="navbar-icon">
                {/* <div className="search-container">
                    <input type="search" placeholder="Search" className="search" />
                    <button className="search-button" onClick={handleSearch}>
                        <FaSearch className="iconSearch" />
                    </button>
                </div>      */}
                <button className="login-button" /*onClick={handleLogout}*/> <FaUser className="icon" /> </button>
            </div>
        </nav>
    </div>
  );
}

export default HeaderForm;
