import React, { createContext, useState, useEffect } from 'react'
// import storage from '../../firebase'
import api from '../../config/banco.js'

const TimeContext = createContext();

function TimeProvider({ children }) {

    // const [currentTime, setCurrentTime] = useState('');
    const [time, setTime] = useState({ nome: '', });
    const [loading, setLoading] = useState(false);
    const [logged, setLogged] = useState(false);

    async function registerNewTime(email, password, nome, logo, voidCallBack) {
        if (logged) {
            voidCallBack()
        } else {
            setLoading(true)
            var imageUrl = nome;

            try {
                // if (!logo)
                //     return;

                // var taskSnapshot = storage.ref(`/times/${logo.name}`).put(logo)

                // taskSnapshot.on('state_changed',
                //     (snapShot) => {
                //         console.log(snapShot);
                //     }, (err) => {
                //         console.log(err);
                //     }, () => {
                //         storage.ref('times').child(logo.name).getDownloadURL()
                //             .then(fireBaseUrl => {
                //                 imageUrl = fireBaseUrl;
                //             });
                //     })

                const response = await api.post(
                    'api/register',
                    { 'nome': nome, 'email': email, 'senha': password, 'logo': imageUrl })

                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    console.log(response.data.time)
                    setTime(response.data.time);
                    setLogged(true);
                    voidCallBack();
                }
                setLoading(false);
            } catch (error) {
                setLoading(false);
                return 'Falha no registro, tente novamente.';
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
                console.log(error.response.data.message);
                return 'Falha no login, tente novamente.'
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

    useEffect(() => {
        login()
    }, [])


    return (
        <TimeContext.Provider value={{ time, loading, logged, setLogged, registerNewTime, loginTime, logout, refreshData }}>
            {children}
        </TimeContext.Provider>
    )
}

export { TimeProvider, TimeContext }