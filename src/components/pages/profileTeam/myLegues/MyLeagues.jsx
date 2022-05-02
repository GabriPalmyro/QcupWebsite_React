import React, { useContext } from "react";
import { TimeContext } from '../../../../contexts/time/TimeContext';
import { ErrorPlayers } from '../styles'

function MyLeagues() {

    const { jogadores } = useContext(TimeContext);
    return (
        <div>
            <h1>Sua próximas partidas</h1>
            <p>Você não está inscrito em nenhum campeonato</p>
            {
                jogadores.length < 5 ?
                    (<ErrorPlayers>Complete a inscrição dos seus jogadores para se inscrever em uma liga</ErrorPlayers>)
                    : (<div></div>)
            }
        </div>
    )
}

export default MyLeagues