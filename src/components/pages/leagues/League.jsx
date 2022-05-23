import React, { useState, useContext, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { League, LeagueHeader, LeagueLogo, TabelaClassificacao, TabelaHeader, TabelaCorpo, Position, PontosTime, HeaderPos, HeaderTitle, TitleTime } from './styles';
import { LigaContext } from '../../../contexts/liga/LigaContext';
import { TimeContext } from '../../../contexts/time/TimeContext';
import ConfirmModal from './modal/ConfirmModal';
import { useNavigate } from 'react-router-dom'
import './styles'

export default function Leagues(props) {

    let { id } = useParams();
    const navigate = useNavigate()
    const { liga, times, buscarLigaPorId } = useContext(LigaContext);
    const { logged, registerToLeague } = useContext(TimeContext);

    const [modalShow, setModalShow] = useState(false);
    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);
    
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        goToTop()
        buscarLigaPorId(id)
    }, [id])


    return (
        <League>
            <ConfirmModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                onSubmit={async () => {
                    setModalShow(false)
                    if (!logged) {
                        alert("Você não está logado, clique aqui para entrar")
                        navigate('/login');
                    } else {
                        await registerToLeague(String(liga.id))
                        buscarLigaPorId(id)
                    }
                }}
            />
            <LeagueHeader className=''>
                <LeagueLogo src={liga.logo} alt=""/>
                <div className='info-leagues'>
                    <h1>{liga.jogo}</h1>
                    <p>Período de inscrição: de {liga.data_inicio} até {liga.data_limite_insc}</p>
                    <p>Inscritos: {times.length}/12</p>
                </div>
                <div className="button-add" onClick={handleShow}>
                    <button type="submit" className="btn btn-danger">Participar dessa liga</button>
                </div>
            </LeagueHeader>
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
                                <img src={time.logo} alt="" width={'60px'} height={'60px'} style={{ marginRight: '20px' }} loading="lazy" />
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