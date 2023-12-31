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
    const [file, setFile] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');

        if (username.length < 4 || username.length > 12) {
            setErrorMessage('아이디는 4 ~ 12자로 생성 가능합니다.');
            return;
        }

        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/.test(password)) {
            setErrorMessage('비밀번호는 6 ~ 20자의 숫자와 영어로 생성 가능합니다.');
            return;
        }

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
        formData.append('email', email);
        formData.append('photo', file);

        try {
            await axios.post(`${apiUrl}/join`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
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
                        <label>
                            <input type="file" onChange={e => setFile(e.target.files[0])} />
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