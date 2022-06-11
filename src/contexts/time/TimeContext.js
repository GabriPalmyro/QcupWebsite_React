import React, { createContext, useState, useEffect } from 'react'
import api from '../../config/banco.js'

const TimeContext = createContext();

function TimeProvider({ children }) {

    const [time, setTime] = useState({ nome: '', });
    const [jogadores, setJogadores] = useState([]);
    const [loading, setLoading] = useState(false);
    const [logged, setLogged] = useState(false);
    const [emailSent, setEmailSent] = useState(false)
    const [resetPasswordSucess, setResetPasswordSucess] = useState(false)

    async function registerNewTime(email, password, nome, logo, voidCallBack) {
        if (logged) {
            voidCallBack()
        } else {
            setLoading(true)
            var imageUrl = nome;

            try {
                const response = await api.post(
                    'api/register',
                    { 'nome': nome, 'email': email, 'password': password, 'logo': imageUrl })

                setTime(response.data.time);
                setLoading(false);
                voidCallBack();

            } catch (error) {
                setLoading(false);
                return error.response.data.message;
            }
            setLoading(false)
        }
    }

    async function loginTime(email, password, voidCallBack, errorCallBack) {
        if (logged) {
            voidCallBack()
        }
        else {
            setLoading(true)
            try {
                const response = await api.post(
                    'api/login',
                    { 'email': email, 'password': password })

                localStorage.setItem('token', response.data.token)
                setTime(response.data.time)
                setLogged(true)
                setLoading(false)
                voidCallBack()
            } catch (error) {
                if (error.response.status === 401) {
                    setLoading(false)
                    setLogged(false)
                    console.log(error.response.data, ' 401 error')
                    localStorage.setItem('token', error.response.data.token)
                    errorCallBack()
                } else {
                    setLoading(false)
                    return error.response.data.message;
                }

            }
        }
    }

    async function logout(token, voidCallBack) {
        setLoading(true)
        try {
            const response = await api.get(
                'api/logout', {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json'
                }
            })
            if (response.status === 200) {
                localStorage.removeItem('token')
                setTime({ nome: '', });
                setLogged(false)
                voidCallBack()
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            return 'Falha no logout, tente novamente mais tarde.'
        }
        setLoading(false)
    }

    async function refreshData(token) {
        setLoading(true)
        try {
            const response = await api.get(
                'api/refresh', {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json'
                }
            })

            if (response.status === 200) {
                setTime(response.data.time);
                localStorage.setItem('token', response.data.token);
                setLogged(true)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setLogged(false)
            localStorage.removeItem('token')
            return 'Falha no login, tente novamente.'
        }
        setLoading(false)
    }

    async function login() {
        var token = localStorage.getItem('token');
        if (token && token !== '')
            await refreshData(token);
    }

    async function getPlayers(id) {
        setJogadores([]);
        setLoading(true)
        var token = localStorage.getItem('token')
        try {
            const response = await api.post(
                'api/jogadores', {
                'id_time': id
            }, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json'
                }
            })
            if (response.status === 200) {
                setJogadores(response.data.jogadores);
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            return 'Falha no login, tente novamente.';
        }
        setLoading(false)
    }

    async function addNewPlayer(email, nome, nickname, funcao, voidCallBack) {
        setLoading(true)
        var token = localStorage.getItem('token')
        try {
            const response = await api.post(
                'api/times/novo-jogador', {
                'id_time': String(time.id),
                'nome': nome,
                'email': email,
                'nickname': nickname,
                'funcao': funcao
            }, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json'
                }
            })
            if (response.status === 200) {
                voidCallBack()
                return response.data.message;
            } else if (response.status === 422) {
                setLoading(false)
                throw new Error(response.data.erro);
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            if (error.response.status === 422) {
                throw error.response.data.erro;
            }

            throw error.response.data.erro
        }
        setLoading(false)
    }

    async function registerToLeague(idLiga) {
        setLoading(true)
        var token = localStorage.getItem('token')
        try {
            const response = await api.post(
                'api/times/participar-liga', {
                'id_time': String(time.id),
                'id_liga': idLiga
            }, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json'
                }
            })
            if (response.status === 200) {
                setLoading(false)
                // alert(response.data.message)
                return response.data.message;
            } else if (response.status === 422) {
                setLoading(false)
                alert(response.data.erro)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            alert(error.response.data.erro)
            return error.response.data.erro
        }
        setLoading(false)
    }

    async function sendEmailToResetPassword(email) {
        setLoading(true)
        try {
            const response = await api.post(
                'api/forgot-password', {
                'email': email,
            })
            if (response.status === 200) {
                setLoading(false)
                setEmailSent(true)
                return response.data.message;
            } else if (response.status === 422) {
                setLoading(false)
                setEmailSent(false)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setEmailSent(true)
            return error.response.data.message
        }
        setLoading(false)
    }

    async function resetPassword(email, token, password, confirmPasword, voidCallBack) {
        if (confirmPasword.length === 0 || password.length === 0) return 'Campos não podem ser vazios.'
        else if (confirmPasword != password) return 'Senhas precisam ser idênticas.'
        setLoading(true)
        try {
            const response = await api.post(
                'api/reset-password', {
                'email': email,
                'token': token,
                'password': password,
                'password_confirmation': confirmPasword
            })
            if (response.status === 200) {
                setLoading(false)
                setResetPasswordSucess(true)
                voidCallBack()
            } else if (response.status === 422) {
                setLoading(false)
                setResetPasswordSucess(false)
                return response.data.message;
            }
        } catch (error) {
            setLoading(false)
            setResetPasswordSucess(false)
            return error.response.data.message
        }
    }

    async function confirmEmail(email, tokenEmail) {
        setLoading(true)
        var token = localStorage.getItem('token');
        console.log('token: ', token, 'token email: ', tokenEmail, 'email: ', email)
        try {
            const response = await api.post(
                'api/times/confirm-email', {
                'email': email,
                'token': tokenEmail
            }, {
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Accept': 'application/json'
                }
            })
            if (response.status === 200) {
                setLogged(true)
                setTime(response.data.time);
                setLoading(false)
            }
        } catch (error) {
            //mostrar modal
            setLoading(false)
            console.log('error')
            console.log(error.response.data.message)
            return error.response.data.message
        }
    }

    useEffect(() => {
        login()
    }, [])


    return (
        <TimeContext.Provider
            value={{
                time,
                jogadores,
                loading,
                logged,
                emailSent,
                resetPasswordSucess,
                setLogged,
                registerNewTime,
                loginTime,
                logout,
                refreshData,
                getPlayers,
                addNewPlayer,
                registerToLeague,
                sendEmailToResetPassword,
                resetPassword,
                confirmEmail
            }}>
            {children}
        </TimeContext.Provider>
    )
}

export { TimeProvider, TimeContext }