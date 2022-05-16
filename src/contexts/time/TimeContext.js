import React, { createContext, useState, useEffect } from 'react'
import api from '../../config/banco.js'

const TimeContext = createContext();

function TimeProvider({ children }) {

    const [time, setTime] = useState({ nome: '', });
    const [jogadores, setJogadores] = useState([]);
    const [loading, setLoading] = useState(false);
    const [logged, setLogged] = useState(false);

    async function registerNewTime(email, password, nome, logo, voidCallBack) {
        if (logged) {
            voidCallBack()
        } else {
            setLoading(true)
            var imageUrl = nome;

            try {
                const response = await api.post(
                    'api/register',
                    { 'nome': nome, 'email': email, 'senha': password, 'logo': imageUrl })

                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    setTime(response.data.time);
                    setLogged(true);
                    voidCallBack();
                }
                setLoading(false);

            } catch (error) {
                setLoading(false);
                console.log(error.response.data)
                return error.response.data.message;
            }
            setLoading(false)
        }
    }

    async function loginTime(email, password, voidCallBack) {
        if (logged) {
            voidCallBack()
        }
        else {
            setLoading(true)
            try {
                const response = await api.post(
                    'api/login',
                    { 'email': email, 'senha': password })

                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    setTime(response.data.time);
                    setLogged(true)
                    voidCallBack()
                }
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error.response.data)
                return error.response.data.message;
            }
            setLoading(false)
        }
    }

    async function logout(token, voidCallBack) {
        setLoading(true)
        try {
            const response = await api.post(
                'api/logout', {
                'token': token,
            }, {
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
            console.log(error.response.data.message);
            return 'Falha no login, tente novamente.'
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
                setLogged(true)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setLogged(false)
            localStorage.removeItem('token')
            console.log(error.response.data.message);
            return 'Falha no login, tente novamente.'
        }
        setLoading(false)
    }

    async function login() {
        try {
            var token = localStorage.getItem('token');
            if (!token || token === null || token === '')
                console.log("Sem chave armazenada")
            else if (logged)
                console.log("Já logado")
            else
                await refreshData(token);
        } catch (error) {
            console.log(error)
        }
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
                console.log(response.data.jogadores)
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
        console.log(email, nome, nickname, funcao)
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
            console.log(response.data)
            if (response.status === 200) {
                console.log(response.data.message)
                voidCallBack()
                return response.data.message;
            } else if (response.status === 422) {
                setLoading(false)
                throw new Error(response.data.erro);
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.response.sta)
            
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

    useEffect(() => {
        login()
    }, [])


    return (
        <TimeContext.Provider value={{ time, jogadores, loading, logged, setLogged, registerNewTime, loginTime, logout, refreshData, getPlayers, addNewPlayer, registerToLeague }}>
            {children}
        </TimeContext.Provider>
    )
}

export { TimeProvider, TimeContext }