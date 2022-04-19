import React from 'react';
import Layout from '../components/pages/layouts/Layout';
import Navbar from '../components/header/Navbar';
import RainbowSix from '../components/pages/leagues/rainbowSix/RainbowSix'
import LoginPage from '../components/login/Login';

import { TimeProvider } from '../contexts/time/TimeContext';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function AppRoutes() {
    return (
        <BrowserRouter>
            <TimeProvider>
                <Navbar />
            </TimeProvider>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="r6" element={<RainbowSix />} />
                <Route path="login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
