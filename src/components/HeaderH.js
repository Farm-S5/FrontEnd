import React, { useState,useEffect } from 'react';
import './assets/css/Header.css';
import './assets/css/HeaderM.css';
import logo from './assets/img/logo.png';
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export function HeaderForm() {
    const [personne,setPersonne]=useState('');
    const userId = localStorage.getItem("id");

    const navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.clear();
        navigate('/');
    };

    const handleDiscusion = () =>{
        navigate('/Discussion');
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              `https://backend-production-b756.up.railway.app/personne/findPersonneById/${userId}`
            );
    
            if (response.ok) {
              const responseData = await response.json();
              setPersonne(responseData.nameUser);
            } else {
              console.warn("Server responded with an error:", response.status);
              try {
                const errorResponse = await response.json();
                console.error("Server error details:", errorResponse);
              } catch (error) {
                console.error("Failed to parse server error details:", error);
              }
            }
          } catch (error) {
            console.error("An error occurred during the fetch:", error);
          }
        };
    
        fetchData();
      }, [userId]);



  return (
    <div>
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-links">
                <li><a href="#">Historique de {personne}</a></li>
            </ul>
            <div className="navbar-icon">
                <button type="submit" className="history" onClick={handleDiscusion}>DISCUSSION</button>
                <button className="login-button" onClick={handleLogout}> <IoLogOut className="iconM" /> </button>
            </div>
        </nav>
    </div>
  );
}

export default HeaderForm;
