import React, { useState } from 'react';
import Layout from '../components/pages/layouts/Layout';
import Navbar from '../components/header/navbar/Navbar';
// import Footer from '../components/footer/Footer';
import Drawer from '../components/header/drawer/Drawer';
import LoginPage from '../components/pages/login/Login';
import RegisterPage from '../components/pages/register/Register';
import Backdrop from '../components/backdrop/Backdrop';
import Loading from '../components/common/loading/Loading';
import Leagues from '../components/pages/leagues/League';
import ProfileTeam from '../components/pages/profileTeam/ProfileTeam';
import AddNewPlayer from '../components/pages/profileTeam/addNewPlayer/AddNewPlayer';
import PageNotFound from '../components/pages/PageNotFound/PageNotFound';
import SendEmailReset from '../components/pages/resetPassword/SendEmailReset';
import SetNewPassword from '../components/pages/resetPassword/SetNewPassword';
import ConfirmEmail from '../components/pages/confirmEmail/ConfirmEmail';
import SendEmailConfirmation from '../components/pages/confirmEmail/SendEmailConfirmation';

import { TimeProvider } from '../contexts/time/TimeContext';
import { LigaProvider } from '../contexts/liga/LigaContext';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";



function AppRoutes() {

    const [isDrawerOpen, setDrawer] = useState(false);

    function drawerToggleClickRender() {
        setDrawer(!isDrawerOpen);
    };

    function backdropClickRender() {
        setDrawer(false);
    };

    // let sideDrawer;
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
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="league/:id" exact element={<Leagues />} />
                        <Route path="my-team/:id" exact element={<ProfileTeam />} />
                        <Route path="my-team/confirm-email" exact element={<ConfirmEmail />} />
                        <Route path="new-player" exact element={<AddNewPlayer />} />
                        <Route path="send-confirmation-email" exact element={<SendEmailConfirmation />} />
                        <Route path="forgot-password" exact element={<SendEmailReset />} />
                        <Route path="reset-password" exact element={<SetNewPassword />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                    {/* <Footer/> */}
                </LigaProvider>
            </TimeProvider>
        </BrowserRouter>
    )
}

export default AppRoutes;
