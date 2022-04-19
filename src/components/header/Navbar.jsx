import React, { Fragment, useContext } from "react"
import { HeaderContainer, SystemLogo, Leagues, LeagueLabel, Profile, Logon, UserName, Logout, Login, Register } from "./styles"
import LOGO from '../../assets/img/logo.png'
import { Link } from 'react-router-dom'
import { useTime } from '../../contexts/time/TimeContext';

export default function Navbar() {

    const { logged, setLogged } = useTime();

    return (
        <Fragment>
            <HeaderContainer>
                <Link to="/"><SystemLogo src={LOGO} alt="logo"></SystemLogo></Link>
                <Leagues>
                    <LeagueLabel>LOL</LeagueLabel>
                    <LeagueLabel>CS</LeagueLabel>
                    <LeagueLabel>VALORANT</LeagueLabel>
                    <Link to="r6"><LeagueLabel>R6</LeagueLabel></Link>
                </Leagues>
                <Profile>
                    {false ?
                        (
                            <div>
                                <Logon>Equipe: </Logon>
                                <UserName>União Fiasco</UserName>
                                <Logout></Logout>
                            </div>)
                        :
                        (<div>
                            <Link to="login"><Login>Login</Login></Link> / <Register>Registrar-se</Register>
                        </div>)}
                </Profile>
            </HeaderContainer>
        </Fragment >
    )
}