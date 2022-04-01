import React, { Fragment } from "react"
import { HeaderContainer, SystemLogo, Toggle, Profile, Logon, UserName, Logout} from "./styles"

const Header = () => {
    return (
        <Fragment>
            <HeaderContainer>
                <SystemLogo>Sistema</SystemLogo>
                <Toggle>

                </Toggle>
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