import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './JoinForm.css';
import Header from '../layout/header';
import Footer from '../layout/footer';

function JoinForm() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');


        try {
            const response = await axios.post(`${apiUrl}/join`, { username, password, email });
            navigate('/login');
        } catch (error) {
            console.log(error);
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
            <main className="JoinForm">
                <div className="form-container">
                    <h2>회원가입</h2>
                    <form onSubmit={handleSubmit}>
                        <label>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="ID"/>
                        </label>
                        <label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                        </label>
                        <label>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email"/>
                        </label>
                        <button type="submit">가입하기</button>
                    </form>
                    {errorMessage && <div className="error"><strong>{errorMessage}</strong></div>}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default JoinForm;