import React, { createContext, useState, useEffect } from 'react'
import api from '../../config/banco.js'
import { START_LIGA } from '../../models/Liga'

const LigaContext = createContext();

function LigaProvider({ children }) {

    const [liga, setLiga] = useState(START_LIGA);
    const [times, setTimes] = useState([]);
    const [loadingliga, setLoadingLiga] = useState(false);

    async function buscarTimeLigaPorId(id) {
        setLoadingLiga(true)

        try {
            api.post('api/liga/times', { 'id_liga': id }).then((response) => {
                setTimes(response.data)
                console.log(response.data.times)
            })
        } catch (error) {
            console.log(error)
        }

        setLoadingLiga(false)
    }

    async function buscarLigaPorId(id) {
        setTimes([])
        setLoadingLiga(true)
        setLiga(START_LIGA)

        try {
            api.post('api/liga', { 'id_liga': id }).then((response) => {
                setTimes(response.data.times)
                setLiga(response.data.liga)
                console.log(response.data)
            })
        } catch (error) {
            console.log(error)
        }

        setLoadingLiga(false)
    }

    return (
        <LigaContext.Provider value={{ loadingliga, liga, times, buscarTimeLigaPorId, buscarLigaPorId }}>
            {children}
        </LigaContext.Provider>
    )
}

export { LigaProvider, LigaContext }