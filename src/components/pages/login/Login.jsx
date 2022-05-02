import React, { useState, useContext, useEffect } from "react";
import { Login, LoginCard, RegistorToCard, ButtonToRegister, LoginInput, LoginTitle, LoginButton, LoginLabel, FormLogin, ErrorMessage } from './styles';

import { useNavigate } from 'react-router-dom'
import { TimeContext } from '../../../contexts/time/TimeContext';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const { logged, loginTime } = useContext(TimeContext);
    const navigate = useNavigate()

    async function login(e) {
        e.preventDefault();
        try {
            var response = await loginTime(email, senha, () => {
                navigate('/', { replace: true })
            });
            setErrorMessage(response)
        } catch (error) {
            setErrorMessage(error)
        }
    }

    async function verifyAuth() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(logged)
        if (logged) {
            navigate('/');
        }
    }

    useEffect(() => { verifyAuth() }, [])

    return (
        <React.Fragment>
            <Login>
                <LoginCard>
                    <LoginTitle>
                        Faça o login com o seu time
                    </LoginTitle>
                    <FormLogin action="">
                        {
                            errorMessage && (<div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>)
                        }
                        <LoginLabel>E-mail</LoginLabel>
                        <LoginInput type="text" name="email" onChange={e => setEmail(e.target.value)} />
                        <LoginLabel>Senha</LoginLabel>
                        <LoginInput type="password" name="password" onChange={e => setSenha(e.target.value)} />
                        <LoginButton type="submit" value={"Entrar"} onClick={login} />
                    </FormLogin>
                </LoginCard>
                <RegistorToCard>
                    <h2 style={{ fontWeight: '800' }}>Ainda não tem o cadastro do seu time?</h2>
                    <p style={{ fontWeight: '300' }}>Se inscreva para participar{<br />}dos campeonatos de e-sports</p>
                    <ButtonToRegister to="/register">Inscrever</ButtonToRegister>
                </RegistorToCard>
            </Login>
        </React.Fragment>
    )
}