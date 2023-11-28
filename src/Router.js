import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginForm from './LoginForm';
import Main from './Main';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router;