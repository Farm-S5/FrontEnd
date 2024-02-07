import React from "react";
import "./assets/css/Header.css";
import logo from "./assets/img/logo.png";
import { FaUser} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function HeaderForm() {
  const history = useNavigate();

  const handleLogin = () => {
    history("/Login");
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#">List of Culture</a>
          </li>
        </ul>
        <div className="navbar-icon">
          <button className="login-button" onClick={handleLogin}> <FaUser className="icon" /> </button>
        </div>
      </nav>
    </div>
  );
}

export default HeaderForm;
