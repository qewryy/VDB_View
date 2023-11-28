import { Link } from 'react-router-dom';

function Main() {
    return (
        <div>
            <h1>Welcome!</h1>
            <Link to="/login">Go to Login</Link>
        </div>
    );
}

export default Main;
