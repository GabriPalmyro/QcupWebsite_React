import React, { useState, useContext } from 'react'
import { SendEmailResetBody, IconeChave, EmailCard, LoginLabel, LoginInput, LoginButton, BackToLogin } from './styles'
import { HiOutlineKey, HiOutlineMail } from 'react-icons/hi'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { TimeContext } from '../../../contexts/time/TimeContext';

function SendEmailConfirmation() {
    const [errorMessage, setErrorMessage] = useState('');

    const { resetPasswordSucess, resetPassword } = useContext(TimeContext);

    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    const email = queryParams.get('email');

    async function confirmEmail(e) {

    }

    return (
        <SendEmailResetBody>
                    <IconeChave>
                        <HiOutlineKey />
                    </IconeChave>
                    <h1>Necessário verificação de e-mail</h1>
                    <h5>Foi enviado em sua caixa postal um e-mail contendo as instruções para que você verifique a sua conta.</h5>
                    <br />
                    {/* <h5>Caso não tenha recebido ainda, clique no botão abaixo para reenviar.</h5> */}
                    <EmailCard>
                        {/* <LoginButton type="submit" value={"Reenviar E-mail"} onClick={confirmEmail} /> */}
                        {
                            errorMessage && (<div className="alert alert-danger" role="alert" style={{marginTop: '12px'}}>
                                {errorMessage}
                            </div>)
                        }
                        <BackToLogin to='/login'><IoMdArrowRoundBack /> Voltar ao login </BackToLogin>
                    </EmailCard>
        </SendEmailResetBody>
    )
}

export default SendEmailConfirmation