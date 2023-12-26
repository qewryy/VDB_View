import React from 'react';
import { useAuth } from '../Auth/AuthContext';
import Header from '../layout/header';
import Footer from '../layout/footer';

function UserInfo() {
const { authenticated } = useAuth();

return (
    <div>
    <Header/>
    <h2>사용자 정보</h2>
    {authenticated.status ? (
        <div>
        <p>User ID: {authenticated.userId}</p>
          {/* Display additional user information as needed */}
        </div>
    ) : (
        <p>로그인 시 확인 가능합니다.</p>
    )}
    <Footer/>
    </div>
);
}

export default UserInfo;