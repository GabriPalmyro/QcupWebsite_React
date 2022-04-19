import React from "react";
import { FormLabel } from "react-bootstrap";
import { Login, LoginCard, RegistorToCard, ButtonToRegister, LoginInput, LoginTitle, LoginButton, LoginLabel, FormLogin } from './styles';

export default function LoginPage() {
    return (
        <React.Fragment>
            <Login>
                <LoginCard>
                    <LoginTitle>
                        Faça o login com o seu time
                    </LoginTitle>
                    <FormLogin action="">
                        <LoginLabel>E-mail</LoginLabel>
                        <LoginInput type="text" name="email" />
                        <LoginLabel>Senha</LoginLabel>
                        <LoginInput type="text" name="password" />
                        {/* <a href="Esqueci minha senha"></a> */}
                        <LoginButton type="submit" value={"Entrar"} />
                    </FormLogin>
                </LoginCard>
                <RegistorToCard>
                    <h2 style={{ fontWeight: '800' }}>Ainda não tem o cadastro do seu time?</h2>
                    <p style={{ fontWeight: '300' }}>Se inscreva para participar{<br />}dos campeonatos de e-sports</p>
                    <ButtonToRegister>Inscrever</ButtonToRegister>
                </RegistorToCard>
            </Login>
        </React.Fragment>
    )
}