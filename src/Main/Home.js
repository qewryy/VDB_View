import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
    return (
        <div className="main-container">
            <header className="main-header">
            <Link className='home-link' to ="/">ViViD</Link>
            <Link className="login-link" to="/login">Login</Link>
            </header>
            <main className="main-main">Main</main>
            <footer className="main-footer">Footer</footer>
        </div>
    );
}

export default Home;
