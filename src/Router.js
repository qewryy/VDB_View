import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginForm from './User/LoginForm';
import JoinForm from './User/JoinForm';
import Home from './Main/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/join" element={<JoinForm />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router;