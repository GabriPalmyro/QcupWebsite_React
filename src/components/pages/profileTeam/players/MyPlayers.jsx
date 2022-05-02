import React, { useContext, useEffect, useState } from "react";
import { TimeContext } from '../../../../contexts/time/TimeContext';
import { AddPlayers, TitlePlayer } from '../styles'


function MyPlayers() {
    const { jogadores } = useContext(TimeContext);

    return (
        <div>
            <TitlePlayer>
                <h1>Seus Jogadores</h1>
                <AddPlayers>Adicionar Jogador</AddPlayers>
            </TitlePlayer>
            {jogadores.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.nome}</p>
                        <p>{item.funcao}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MyPlayers