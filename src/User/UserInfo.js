import React from 'react';
import { useAuth } from '../Auth/AuthContext';
import Header from '../layout/header';
import Footer from '../layout/footer';
import './UserInfo.css'; // Import the CSS file

function UserInfo() {
    const { authenticated } = useAuth();

    return (
        <div >
            <Header/>
            <main className="userInfo-container">
            <h2 className="userInfo-header">사용자 정보</h2>
            {authenticated.status ? (
                <div className="userInfo-details">
                    <p>User ID: {authenticated.userId}</p>
                    {/* Display additional user information as needed */}
                </div>
            ) : (
                <p className="not-logged-in">로그인 시 확인 가능합니다.</p>
            )}
            </main>
            <Footer/>
        </div>
    );
}

export default UserInfo;