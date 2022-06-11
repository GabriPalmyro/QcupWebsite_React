import React, { useState, useContext, useEffect } from 'react'
import { SendEmailResetBody, IconeChave, EmailCard, LoginButton, BackToLogin } from './styles'
import { MdOutlineMarkEmailRead } from 'react-icons/md'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { TimeContext } from '../../../contexts/time/TimeContext';

function ConfirmEmail() {
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()

    const { time, confirmEmail } = useContext(TimeContext);

    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');
    const email = queryParams.get('email');

    const [isConfirmed, setIsConfirmed] = useState(false)

    async function confirmEmailTime() {
        var tokenUser = localStorage.getItem('token')
        console.log(tokenUser)
        var response = await confirmEmail(email, token)
        if(!response) {
            setIsConfirmed(true)
        } else {
            setErrorMessage(response)
        }
    }

    useEffect(() => {
        confirmEmailTime()
    }, [])

    return (
        <SendEmailResetBody>
            {!isConfirmed ? (<React.Fragment>
                <IconeChave>
                    <MdOutlineMarkEmailRead />
                </IconeChave>
                <h1>Confirmar E-mail</h1>
                <h5>Confirmar o seu e-mail é necessário para que a gente possa confiar em você!</h5>
                <EmailCard>
                    {
                        errorMessage && (<div className="alert alert-danger" role="alert" style={{ marginTop: '12px' }}>
                            {errorMessage}
                        </div>)
                    }
                    <BackToLogin to='/login'><IoMdArrowRoundBack /> Voltar ao login </BackToLogin>
                </EmailCard>
            </React.Fragment>) : (<React.Fragment>
                <IconeChave  style={{ backgroundColor: 'rgba(50, 209, 87, 0.3)' }}>
                    <MdOutlineMarkEmailRead />
                </IconeChave>
                <h1>Email Confirmado</h1>
                <h5>Seu e-mail foi confirmado com sucesso, e você já pode acessar a a sua conta!</h5>
                <EmailCard>
                    <LoginButton type="submit" value={"Entrar"} onClick={() => {
                        navigate('/my-team/' + String(time.id))
                    }} />
                    {
                        errorMessage && (<div className="alert alert-danger" role="alert" style={{ marginTop: '12px' }}>
                            {errorMessage}
                        </div>)
                    }
                </EmailCard>
            </React.Fragment>)}
        </SendEmailResetBody>
    )
}

export default ConfirmEmail