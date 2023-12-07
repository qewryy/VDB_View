import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginForm from './User/LoginForm';
import Home from './Main/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    )
}


export default Router;