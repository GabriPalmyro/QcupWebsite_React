import React from 'react'
import { JogadorCard, InfosJogador, ImgJogador, NomeJogador, StatsJogador, Label, Stats} from '../styles'

function CardJogador(props) {
    return (
        <JogadorCard>
            <InfosJogador>
                <ImgJogador>
                    {props.nome.charAt(0)}
                </ImgJogador>
                <NomeJogador>
                    {props.nome}
                </NomeJogador>
            </InfosJogador>
            <StatsJogador>
                <div className='stats-container'><Label>Nickname: </Label><Stats>{props.nickname}</Stats></div>
                <div className='stats-container'><Label>Função: </Label><Stats>{props.funcao}</Stats></div>
                <div className='stats-container'><Label>Kills: </Label><Stats>{props.kills}</Stats></div>
                <div className='stats-container'><Label>Assists: </Label><Stats>{props.assists}</Stats></div>
                <div className='stats-container'><Label>Deaths: </Label><Stats>{props.deaths}</Stats></div>
            </StatsJogador>
        </JogadorCard>
    )
}

export default CardJogador