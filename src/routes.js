import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";

function CustomRoutes() {
    return (
        <BrowserRouter> {/* Garante o roteamento */}
            <Routes>    {/* Garante que não havera mais de uma rota aberta*/}
                <Route path="/" element={<Login />}></Route> {/* configura a rota */}
            </Routes>
        </BrowserRouter>
    );
}

export default CustomRoutes