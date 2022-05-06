import React, { useContext, useEffect, useState } from "react";
import { TimeContext } from '../../../../contexts/time/TimeContext';
import { Jogadores, AddPlayers, TitlePlayer } from '../styles'
import { useParams } from 'react-router-dom'
import CardJogador from "./Card_jogador";

function MyPlayers() {
    let { id } = useParams();
    const { jogadores } = useContext(TimeContext);

    return (
        <div>
            <TitlePlayer>
                <h1>Seus Jogadores</h1>
                <AddPlayers to="/novo-player" style={{ textDecoration: 'none', color: '#FFF' }}>Adicionar Jogador</AddPlayers>
            </TitlePlayer>
            <Jogadores>{jogadores.map((item, index) => {
                return (
                    <CardJogador
                        key={index}
                        nome={item.nome}
                        funcao={item.funcao}
                        nickname={item.nickname}
                        kills={item.kills}
                        assists={item.assists}
                        deaths={item.deaths}
                    />
                )
            })}</Jogadores>
        </div>
    )
}

export default MyPlayers