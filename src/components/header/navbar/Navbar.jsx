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
    const navigate = useNavigate()
    // var dimension = Dimensions.get('window');

    async function logoutTime() {
        try {
            var token = localStorage.getItem('token');
            if (!token || token == null)
                return;
            await logout(token, () => {
                navigate('/', { replace: true })
            });
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
                    <LeagueLabel to="league/1">LOL</LeagueLabel>
                    <LeagueLabel to="league/2">CS</LeagueLabel>
                    <LeagueLabel to="league/3">VALORANT</LeagueLabel>
                    <LeagueLabel to="league/4">R6</LeagueLabel>
                </Leagues>
                <Profile>
                    {logged ?
                        (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Logon>Equipe:</Logon>
                                <UserName to={"my-team/" + time.id}>{time.nome}</UserName>
                                <Logout onClick={logoutTime} ><FaIcons.FaSignOutAlt /></Logout>
                            </div>)
                        :
                        (<div style={{ display: 'flex' }}>
                            <Link to="login"><Login>Login</Login></Link> / <Link to="register"><Register>Registrar-se</Register></Link>
                        </div>)}
                </Profile>
                    <ProfileMobile to={ logged ? "my-team/" + time.id : "login"}>
                        <BiIcons.BiUser color="#b82c33"/>
                    </ProfileMobile>
            </HeaderNav>
        </HeaderContainer>
    )
}