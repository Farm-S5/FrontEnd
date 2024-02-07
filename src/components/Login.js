import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './assets/css/Login.css';
import { useNavigate } from 'react-router-dom';

export function LoginForm() {
    const [nameUser, setNameUser] = useState("");
    const [passUser, setPassUser] = useState("");

    const navigate = useNavigate();

    function saveId(userId) {
        localStorage.setItem('id', userId);
    }

    async function checkPersonne(e) {
        e.preventDefault(); // Empêcher le comportement par défaut du formulaire

        let item = { nameUser, passUser };

        console.log(nameUser, passUser);

        try {
            let response = await fetch("https://backend-production-b756.up.railway.app/personne/checkPersonne", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(item),
            });

            if (response.ok) {
                let responseBody = await response.json();
                if (responseBody === 0) {
                    console.warn('Invalid credentials');
                    alert('Invalid credentials. Please try again.');
                } else {
                    console.log('User ID:', responseBody);
                    saveId(responseBody);
                    navigate("/Discussion");
                }
            } else {
                console.warn('Server responded with an error:', response.status);
            }
        } catch (error) {
            console.error('An error occurred during the fetch:', error);
        }
    }

    return (
        <div className="container">
            <div className="box">
                <h2 className="title">Login</h2>
                {/* Utilisez onSubmit pour intercepter le soumission du formulaire */}
                <form className="loginform" onSubmit={checkPersonne}>
                    <div className="row">
                        <label htmlFor="username"><FaUser className="icon" /></label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            value={nameUser}
                            onChange={(e) => setNameUser(e.target.value)}
                        />
                    </div>
                    <div className="row">
                        <label htmlFor="password"><FaLock className="icon" /></label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={passUser}
                            onChange={(e) => setPassUser(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn">LOG IN</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
