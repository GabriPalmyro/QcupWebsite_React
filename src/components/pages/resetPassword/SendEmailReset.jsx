import React, { useState, useContext } from 'react'
import { SendEmailResetBody, IconeChave, EmailCard, LoginLabel, LoginInput, LoginButton, BackToLogin } from './styles'
import { HiOutlineKey, HiOutlineMail } from 'react-icons/hi'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { TimeContext } from '../../../contexts/time/TimeContext';

function SendEmailReset() {
    const [email, setEmail] = useState('');

    const { emailSent, sendEmailToResetPassword } = useContext(TimeContext);

    async function sendEmail(e) {
        e.preventDefault();
        await sendEmailToResetPassword(email);
    }

    return (
        <SendEmailResetBody>
            {!emailSent ?
                (
                    <React.Fragment>
                        <IconeChave>
                            <HiOutlineKey />
                        </IconeChave>
                        <h1>Recuperar Senha</h1>
                        <h5>Não se preocupe, nós enviaremos as instruções</h5>
                        <EmailCard>
                            <LoginLabel>E-mail</LoginLabel>
                            <LoginInput type="text" name="email" onChange={e => setEmail(e.target.value)} />
                            <LoginButton type="submit" value={"Enviar E-mail"} onClick={sendEmail} />
                            <BackToLogin to='/login'><IoMdArrowRoundBack /> Voltar ao login </BackToLogin>
                        </EmailCard></React.Fragment>) :

                (<React.Fragment>
                    <IconeChave>
                        <HiOutlineMail />
                    </IconeChave>
                    <h2>Verifique o seu e-mail</h2>
                    <h5>Enviamos um link de recuperação em</h5>
                    <h4>{email}</h4>
                    <EmailCard>
                        <LoginButton type="submit" value={"Abrir E-mail"} onClick={() => { }} />
                        <BackToLogin to='/login'><IoMdArrowRoundBack /> Voltar ao login </BackToLogin>
                    </EmailCard>
                </React.Fragment>)}
        </SendEmailResetBody>
    )
}

export default SendEmailReset