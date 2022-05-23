import React, { useState, useContext } from 'react'
import { SendEmailResetBody, IconeChave, EmailCard, LoginLabel, LoginInput, LoginButton, BackToLogin } from './styles'
import { HiOutlineKey } from 'react-icons/hi'
import { IoMdArrowRoundBack, IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { TimeContext } from '../../../contexts/time/TimeContext';

function SetNewPassword() {
    const [errorMessage, setErrorMessage] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { resetPasswordSucess, resetPassword } = useContext(TimeContext);

    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    const email = queryParams.get('email');

    async function sendPasswordWithToken(e) {
        e.preventDefault();
        var response = await resetPassword(email, token, password, confirmPassword, () => { })
        setErrorMessage(response)
    }


    return (
        <SendEmailResetBody>
            {!resetPasswordSucess ?
                (<React.Fragment>
                    <IconeChave>
                        <HiOutlineKey />
                    </IconeChave>
                    <h1>Recuperar Senha</h1>
                    <h5>Sua nova senha deve ser diferente das suas senhas anteriores</h5>
                    <EmailCard>
                        <LoginLabel>Senha</LoginLabel>
                        <LoginInput type="password" name="password" onChange={e => setPassword(e.target.value)} />
                        <LoginLabel>Recuperar Senha</LoginLabel>
                        <LoginInput type="password" name="confirm-password" onChange={e => setConfirmPassword(e.target.value)} /> 
                        <LoginButton type="submit" value={"Enviar E-mail"} onClick={sendPasswordWithToken} />
                        {
                            errorMessage && (<div className="alert alert-danger" role="alert" style={{marginTop: '12px'}}>
                                {errorMessage}
                            </div>)
                        }
                        <BackToLogin to='/login'><IoMdArrowRoundBack /> Voltar ao login </BackToLogin>
                    </EmailCard>
                </React.Fragment>) :
                (<React.Fragment>
                    <IconeChave style={{ backgroundColor: 'rgba(50, 209, 87, 0.3)' }}>
                        <IoMdCheckmarkCircleOutline />
                    </IconeChave>
                    <h1>Senha Atualizada com Sucesso</h1>
                    <h5>Sua senha foi atualizada. Clique no botão abaixo para retornar ao login</h5>
                    <EmailCard>
                        <BackToLogin to='/login'><IoMdArrowRoundBack /> Voltar ao login </BackToLogin>
                    </EmailCard>
                </React.Fragment>)}
        </SendEmailResetBody>
    )
}

export default SetNewPassword