import React, { useEffect, useContext, useState } from "react"
import { MainContent, Banner, GamesMain, GamesOfTheDay, Leagues, League, LeagueLogo, Divider, CardsLeagues, RegisterButton} from "./styles"
import banner from '../../../../assets/img/banner_youtube.jpg'
import lolLogo from '../../../../assets/img/lol_card.png'
import csLogo from '../../../../assets/img/cs_card.jpg'
import valorantLogo from '../../../../assets/img/valorant_card.png'
import r6Logo from '../../../../assets/img/r6_card.png'
import { qcupAbout } from '../../../../constants/AppTexts'

import { TimeContext } from '../../../../contexts/time/TimeContext';

function Content() {

    const { logged } = useContext(TimeContext);

    return (
        <React.Fragment>
            <MainContent>
                <a href="https://www.youtube.com/channel/UC-3c2wRjj5EXNr21_F-qbBg" rel="noreferrer"><Banner src={banner} alt="banner" /></a>
            </MainContent>
            <GamesMain>
                <GamesOfTheDay>
                    <h2>O que é a QCUP2022?</h2>
                    <p>{qcupAbout}</p>
                    {!logged ? (<RegisterButton to="/register" >Crie o seu time</RegisterButton>) : (<div></div>)}
                </GamesOfTheDay>
                <Divider />
                <Leagues>
                    <h2>LIGAS</h2>
                    <CardsLeagues>
                        <League to={'liga/1'}>
                            <LeagueLogo src={lolLogo} alt="Logo League Of Legends" />
                            <p>League Of Legends</p>
                        </League>
                        <League to={'liga/2'}>
                            <LeagueLogo src={csLogo} alt="Logo Counter Strike" />
                                <p>Counter Strike</p>
                            </League>
                        <League to={'liga/3'}>
                            <LeagueLogo src={valorantLogo} alt="Logo Valorant" />
                            <p>Valorant</p>
                        </League>
                        <League to={'liga/4'}>
                            <LeagueLogo src={r6Logo} alt="Logo Rainbow Six Siege"/>
                            <p>Rainbow Six</p>
                        </League>
                    </CardsLeagues>
                </Leagues>
            </GamesMain>
        </React.Fragment>
    )
}

export default Content