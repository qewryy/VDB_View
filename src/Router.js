import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LoginForm from './User/LoginForm';
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