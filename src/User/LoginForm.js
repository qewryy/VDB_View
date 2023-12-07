import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import Header from '../layout/header';
import Footer from '../layout/footer';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const history = useNavigate();  // useHistory 훅을 사용하여 history 객체를 가져옵니다.

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage('');  // 폼 제출 시 에러 메시지를 초기화

        try {
            const response = await axios.post('/login', { username, password });
            const token = response.data;
            
            localStorage.setItem('token', token); // 로컬 스토리지에 토큰 저장

            history.push('/'); // 메인 페이지로 이동
        } catch (error) {
            setErrorMessage(error.response.data); // 서버에서 보낸 에러 메시지를 설정
        }
    };

    return (
        <div>
            <Header />
            <main className="LoginForm">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
                {errorMessage && <div className="error">{errorMessage}</div>}
            </main>
            <Footer />
        </div>
    );
}

export default LoginForm;
