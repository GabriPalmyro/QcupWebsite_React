import React, { Fragment } from "react"
import { MainContent, Banner, GamesMain, GamesOfTheDay, Leagues, League } from "./styles"
import BANNER from '../../assets/img/banner_youtube.jpg'

const Content = () => {
    return (
        <Fragment>
            <MainContent>
                <a href="https://www.youtube.com/channel/UC-3c2wRjj5EXNr21_F-qbBg" rel="noreferrer"><Banner src={BANNER} alt="banner" /></a>
            </MainContent>
            <GamesMain>
                <GamesOfTheDay>
                    <h2>PROXIMAS PARTIDAS</h2>
                </GamesOfTheDay>
                <Leagues>
                    <h2>LIGAS</h2>
                    <League>League Of Legends</League>
                    <League>Counter Strike Global Offensive</League>
                    <League>Valorant</League>
                    <League>Rainbow Six Siege</League>
                </Leagues>
            </GamesMain>
        </Fragment>
    )
}

export default Content