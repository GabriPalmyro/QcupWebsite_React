import React, { useContext } from "react"
import * as FaIcons from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi'
import { HeaderContainer, HeaderNav, Toggle, SystemLogo, Leagues, LeagueLabel, Profile, ProfileMobile, Logon, UserName, Logout, Login, Register } from "./styles"
import LOGO from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { TimeContext } from '../../../contexts/time/TimeContext';

export default function Navbar(props) {

    const { logged, time, logout } = useContext(TimeContext);
    // var dimension = Dimensions.get('window');

    async function logoutTime() {
        try {
            var token = localStorage.getItem('token');
            if (!token || token == null)
                return;
            await logout(token, () => { });
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <HeaderContainer>
            <HeaderNav>
                <Toggle onClick={props.drawerToggleClickRender} />
                <Link to="/"><SystemLogo src={LOGO} alt="logo"></SystemLogo></Link>
                <Leagues>
                    <LeagueLabel>LOL</LeagueLabel>
                    <LeagueLabel>CS</LeagueLabel>
                    <LeagueLabel>VALORANT</LeagueLabel>
                    <Link to="rainbow-six"><LeagueLabel>R6</LeagueLabel></Link>
                </Leagues>
                <Profile>
                    {logged ?
                        (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Logon>Equipe:</Logon>
                                <UserName>{time.nome}</UserName>
                                <Logout onClick={logoutTime} ><FaIcons.FaSignOutAlt /></Logout>
                            </div>)
                        :
                        (<div style={{ display: 'flex' }}>
                            <Link to="login"><Login>Login</Login></Link> / <Link to="register"><Register>Registrar-se</Register></Link>
                        </div>)}
                </Profile>
                <Link to={logged ? "" : "login"}>
                    <ProfileMobile> 
                        <BiIcons.BiUser /> 
                    </ProfileMobile>
                </Link>
            </HeaderNav>
        </HeaderContainer>
    )
}