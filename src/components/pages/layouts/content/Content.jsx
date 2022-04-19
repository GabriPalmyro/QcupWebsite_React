import React, { useState, useEffect } from "react"
import { MainContent, Banner, GamesMain, GamesOfTheDay, Leagues, League, LeagueLogo } from "./styles"
import banner from '../../../../assets/img/banner_youtube.jpg'
import lolLogo from '../../../../assets/img/lol_logo.png'
import csLogo from '../../../../assets/img/cs_logo.png'
import valorantLogo from '../../../../assets/img/valorant_logo.png'
import r6Logo from '../../../../assets/img/r62_logo.png'

import api from '../../../../config/banco';


function Content() {

    const [times, setTimes] = useState([])

    useEffect(() => {
        api
            .get("/api/times")
            .then((response) => {
                setTimes(response.data)
                console.log(response.data)
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);


    return (
        <>
            <MainContent>
                <a href="https://www.youtube.com/channel/UC-3c2wRjj5EXNr21_F-qbBg" rel="noreferrer"><Banner src={banner} alt="banner" /></a>
            </MainContent>
            <GamesMain>
                <GamesOfTheDay>
                    <h2>TIMES</h2>
                    <table className="table table-striped table-bordered table-hover">
                        <thead>
                            <tr style={{ color: 'white' }}>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Logo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                times &&
                                times.map(time => (
                                    <tr key={time.id}>
                                        <th style={{ color: '#FFF' }}>{time.nome}</th>
                                        <th style={{ color: '#FFF' }}>{time.email}</th>
                                        <th><img src={time.logo} alt={"logo" + time.id} width={150}/></th>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </GamesOfTheDay>
                <Leagues>
                    <h2>LIGAS</h2>
                    <br />
                    <League to={'r6'}><LeagueLogo src={lolLogo} alt="Logo League Of Legends" width={'50%'}/></League>
                    <League to={'r6'}><LeagueLogo src={csLogo} alt="Logo Counter Strike" width={'60%'} /></League>
                    <League to={'r6'}><LeagueLogo src={valorantLogo} alt="Logo Valorant" width={'60%'} /></League>
                    <League to={'r6'}><LeagueLogo src={r6Logo} alt="Logo Rainbow Six Siege"width={'60%'} /></League>
                </Leagues>
            </GamesMain>
        </>
    )
}

export default Content