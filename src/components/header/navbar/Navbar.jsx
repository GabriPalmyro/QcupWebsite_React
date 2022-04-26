import React, { useContext } from "react"
import * as FaIcons from 'react-icons/fa'
import * as BiIcons from 'react-icons/bi'
import { HeaderContainer, HeaderNav, Toggle, SystemLogo, Leagues, LeagueLabel, Profile, ProfileMobile, Logon, UserName, Logout, Login, Register } from "./styles"
import LOGO from '../../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { TimeContext } from '../../../contexts/time/TimeContext';
import { useNavigate } from 'react-router-dom'

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
                    <LeagueLabel to="liga/2">LOL</LeagueLabel>
                    <LeagueLabel to="liga/3">CS</LeagueLabel>
                    <LeagueLabel to="liga/4">VALORANT</LeagueLabel>
                    <LeagueLabel to="liga/1">R6</LeagueLabel>
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