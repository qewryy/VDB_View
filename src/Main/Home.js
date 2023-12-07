import React from "react";
import "../layout/Home.css";
import Header from '../layout/header';
import Footer from '../layout/footer';
function Home() {
    return (
        <div className="main-container">
            <Header />
            <main className="main-main">Main</main>
            <Footer />
        </div>
    );
}

export default Home;
