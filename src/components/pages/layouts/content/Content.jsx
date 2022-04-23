import React, { useEffect, useContext, useState } from "react"
import { MainContent, Banner, GamesMain, GamesOfTheDay, Leagues, League, LeagueLogo } from "./styles"
import banner from '../../../../assets/img/banner_youtube.jpg'
import lolLogo from '../../../../assets/img/lol_logo.png'
import csLogo from '../../../../assets/img/cs_logo.png'
import valorantLogo from '../../../../assets/img/valorant_logo.png'
import r6Logo from '../../../../assets/img/r62_logo.png'

import api from '../../../../config/banco';

function Content() {

    // const [times, setTimes] = useState([])

    // async function registeredTimes() {
    //     const response = await api.get('api/times')
    //     setTimes(response.data)
    //     console.log(response.data)
    // }

    useEffect(() => {
        // registeredTimes()
    }, [])

    return (
        <>
            <MainContent>
                <a href="https://www.youtube.com/channel/UC-3c2wRjj5EXNr21_F-qbBg" rel="noreferrer"><Banner src={banner} alt="banner" /></a>
            </MainContent>
            <GamesMain>
                <GamesOfTheDay>
                </GamesOfTheDay>
                <Leagues>
                    <h2>LIGAS</h2>
                    <br />
                    <League to={'rainbow-six'}><LeagueLogo src={lolLogo} alt="Logo League Of Legends" width={'50%'} /></League>
                    <League to={'rainbow-six'}><LeagueLogo src={csLogo} alt="Logo Counter Strike" width={'60%'} /></League>
                    <League to={'rainbow-six'}><LeagueLogo src={valorantLogo} alt="Logo Valorant" width={'60%'} /></League>
                    <League to={'rainbow-six'}><LeagueLogo src={r6Logo} alt="Logo Rainbow Six Siege" width={'60%'} /></League>
                </Leagues>
            </GamesMain>
        </>
    )
}

export default Content