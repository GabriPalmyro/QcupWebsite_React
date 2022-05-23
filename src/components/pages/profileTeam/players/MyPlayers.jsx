import React, { useContext, useEffect, useState } from "react";
import { TimeContext } from '../../../../contexts/time/TimeContext';
import { Jogadores, TabelaJogadores, AddPlayers, TitlePlayer } from '../styles'
import { useParams } from 'react-router-dom'
import { FiEdit } from 'react-icons/fi'
import { MdDeleteOutline } from 'react-icons/md'

function MyPlayers() {
    let { id } = useParams();
    const { jogadores } = useContext(TimeContext);

    return (
        <Jogadores>
            <TitlePlayer>
                <h1>Seus Jogadores</h1>
                <AddPlayers to="/novo-player" style={{ textDecoration: 'none', color: '#FFF' }}>Adicionar Jogador</AddPlayers>
            </TitlePlayer>
            <TabelaJogadores>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Nickname</th>
                            <th>Função</th>
                            <th>Kill</th>
                            <th>Assists</th>
                            <th>Deaths</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jogadores.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td data-label="Nome">
                                        {item.nome}
                                    </td>
                                    <td data-label="Nicname">
                                        {item.nickname}
                                    </td>
                                    <td data-label="Função">
                                        {item.funcao}
                                    </td>
                                    <td data-label="Kills">
                                        {item.kills}
                                    </td>
                                    <td data-label="Assists">
                                        {item.assists}
                                    </td>
                                    <td data-label="Deaths">
                                        {item.deaths}
                                    </td>
                                    <td data-label="Ações" className="acoes">
                                        <a href="/#" className="col-md botao-editar">
                                            <FiEdit />
                                        </a>
                                        <a href="/#" className="col-sm botao-excluir">
                                            <MdDeleteOutline />
                                        </a>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </TabelaJogadores>
        </Jogadores>
    )
}

export default MyPlayers