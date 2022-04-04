import React, { Fragment } from "react"
import { HeaderContainer, SystemLogo, Toggle, Profile, Logon, UserName, Logout} from "./styles"

const Header = ({ onClickToggle }) => {
    return (
        <Fragment>
            <HeaderContainer>
                <SystemLogo>Sistema</SystemLogo>
                <Toggle onClick={() => {
                    onClickToggle()
                }} />
                <Profile>
                    <Logon>Nome: </Logon>
                    <UserName>Gabriel Palmyro</UserName>
                    <Logout></Logout>
                </Profile>
            </HeaderContainer>
        </Fragment>
    )
}

export default Header