import React from "react";
import "../layout/Home.css";
import Header from '../layout/header';
import Footer from '../layout/footer';

function Home() {
    return (
        <div className="main-container">
            <Header />
            <main className="main-main">
                {/* 예시 데이터 시각화 카드 */}
                <div className="card">
                    <div className="card-header">Card Title 1</div>
                    <div className="card-content">
                        {/* 여기에 데이터 시각화 내용 */}
                    </div>
                </div>
                {/* 추가 카드 구현 */}
                {/* ... */}
            </main>
            <Footer />
        </div>
    );
}

export default Home;