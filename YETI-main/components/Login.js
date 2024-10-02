// src/components/Login.js
import React, { useState } from 'react';
import authService from '../services/authService';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await authService.login(email, password);
            localStorage.setItem('token', response.data.token);
            alert('Connexion réussie !');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Connexion</h2>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Mot de passe" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Se connecter</button>
        </div>
    );
};

export default Login;
