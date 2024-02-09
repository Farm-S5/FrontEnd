import React, { useState,useEffect } from 'react';
import './assets/css/Header.css';
import './assets/css/HeaderM.css';
import logo from './assets/img/logo.png';
import { IoLogOut } from "react-icons/io5";
  import { useNavigate } from 'react-router-dom';

export function HeaderForm() {
    const [personne, setPersonne] = useState(null);
    const idUser =localStorage.getItem('id');
    const navigate = useNavigate();

    const handleDisconnect = () =>{
        localStorage.clear();
        navigate('/');
    };

    
    const handleHistory = () =>{
      navigate('/History');
  };

    useEffect(() => {
        const fetchPersonne = async () => {
          try {
            const response = await fetch('https://backend-production-b756.up.railway.app/personne/findPersonneById/' + idUser);
  
            if (response.ok) {
              const data = await response.json();
              setPersonne(data);
            } else {
              console.warn('Server responded with an error:', response.status);
            }
          } catch (error) {
            console.error('An error occurred during the fetch:', error);
          }
        };
  
        fetchPersonne();
      }, []);



  return (
    <div>
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-links">
            {personne && (
                <li><a href="#">Message de {personne.nameUser}</a></li>
            )}
            </ul>
            <div className="navbar-icon">
                <button type="submit" className="history" onClick={handleHistory}>HISTORY</button>
                <button className="login-button" onClick={handleDisconnect}> <IoLogOut className="iconM" /> </button>
            </div>
        </nav>
    </div>
  );
}

export default HeaderForm;
