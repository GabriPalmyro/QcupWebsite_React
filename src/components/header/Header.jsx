import React, { Fragment } from "react"
import { HeaderContainer, SystemLogo, Leagues, LeagueLabel, Toggle, Profile, Logon, UserName, Logout } from "./styles"
import LOGO from '../../assets/img/logo.png'
// import { HeaderData } from "./HeaderData";
import LeagueLink from "./LeagueLink";

const Header = ({ onClickToggle }) => {
    return (
        <Fragment>
            <HeaderContainer>
                <SystemLogo src={LOGO} alt="logo" />
                {/* <Toggle onClick={() => {
                    onClickToggle()
                }} /> */}
                <Leagues>
                    <LeagueLabel>LOL</LeagueLabel>
                    <LeagueLabel>CS</LeagueLabel>
                    <LeagueLabel>VALORANT</LeagueLabel>
                    <LeagueLabel>R6</LeagueLabel>
                </Leagues>
                <Profile>
                    <Logon>Equipe: </Logon>
                    <UserName>União Fiasco</UserName>
                    <Logout></Logout>
                </Profile>
            </HeaderContainer>
        </Fragment>
    )
}

export default Header