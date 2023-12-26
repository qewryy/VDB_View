import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth  } from "../Auth/AuthContext";
import './LoginForm.css';
import Header from '../layout/header';
import Footer from '../layout/footer';

function LoginForm() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate();
    const { login } = useAuth();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');

        try {
            const response = await axios.post(`${apiUrl}/login`, { username, password });
            const token = response.data;
            
            localStorage.setItem('token', token);
            login(username);
            navigate('/');
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data);
            } else {
                setErrorMessage('An error occurred while processing the request.');
            }
        }
    };

    return (
        <div>
            <Header />
            <main className="LoginForm">
                <div className="form-container">
                    <h2>로그인</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="ID" />
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                        <button type="submit">로그인</button>
                    </form>
                    {errorMessage && <div className="error">{errorMessage}</div>}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default LoginForm;