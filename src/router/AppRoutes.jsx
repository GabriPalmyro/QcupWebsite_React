import React, { useState } from 'react';
import Layout from '../components/pages/layouts/Layout';
import Navbar from '../components/header/navbar/Navbar';
import Drawer from '../components/header/drawer/Drawer';
import League from '../components/pages/leagues/League'
import LoginPage from '../components/pages/login/Login';
import RegisterPage from '../components/pages/register/Register';
import Backdrop from '../components/backdrop/Backdrop';
import Loading from '../components/common/loading/Loading';
import Leagues from '../components/pages/leagues/League';

import { TimeProvider } from '../contexts/time/TimeContext';
import { LigaProvider } from '../contexts/liga/LigaContext';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ProfileTeam from '../components/pages/profileTeam/ProfileTeam';


function AppRoutes() {

    const [isDrawerOpen, setDrawer] = useState(false);

    function drawerToggleClickRender() {
        setDrawer(!isDrawerOpen);
    };

    function backdropClickRender() {
        setDrawer(false);
    };

    let sideDrawer;
    let backdrop;

    if (isDrawerOpen) {
        backdrop = <Backdrop click={backdropClickRender} />;
    }

    return (
        <BrowserRouter>
            <TimeProvider>
                <LigaProvider>
                    <Navbar drawerToggleClickRender={drawerToggleClickRender} />
                    <Drawer show={isDrawerOpen} />
                    {backdrop}
                    <Loading />
                    <Routes>
                        <Route path="/" element={<Layout />} />
                        <Route path="league" element={<League />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="liga/:id" exact element={<Leagues />} />
                        <Route path="meu-time/:id" exact element={<ProfileTeam />} />
                    </Routes>
                </LigaProvider>
            </TimeProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;
