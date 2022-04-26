import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { League, TabelaClassificacao, TabelaHeader, TabelaCorpo, Position, PontosTime, HeaderPos, HeaderTitle, TitleTime } from './styles';
import api from '../../../config/banco';
import { START_LIGA } from '../../../models/Liga'
import { LigaContext } from '../../../contexts/liga/LigaContext';

import './styles'

export default function Leagues() {

    let { id } = useParams();
    const { liga, times, buscarLigaPorId } = useContext(LigaContext);

    useEffect(() => {
        buscarLigaPorId(id)
    }, [])

    return (
        <League>
            <h1>Tabela: {liga.nome}</h1>
            <TabelaClassificacao>
                <TabelaHeader>
                    <tr>
                        <HeaderPos>POS.</HeaderPos>
                        <HeaderTitle>TIME</HeaderTitle>
                        <th>P</th>
                        <th>VIT</th>
                        <th>EMP</th>
                        <th>DER</th>
                    </tr>
                </TabelaHeader>
                <TabelaCorpo>
                    {
                        times && times.map((time, index) =>
                        (<tr key={time.id}>
                            <Position>{index + 1}</Position>
                            <TitleTime>
                                <img src={time.logo} alt={"logo_" + index} width={'60px'} height={'60px'} style={{ marginRight: '20px' }} />
                                {time.nome}
                            </TitleTime>
                            <PontosTime>{time.pivot.pontos}</PontosTime>
                            <td>{time.pivot.empates}</td>
                            <td>{time.pivot.derrotas}</td>
                            <td>{time.pivot.vitorias}</td>
                        </tr>)
                        )
                    }
                </TabelaCorpo>
            </TabelaClassificacao>
        </League>
    )
}