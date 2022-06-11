import React, { useState, useEffect, useContext } from "react";
import MyPlayers from "./players/MyPlayers";
import MyLeagues from "./myLegues/MyLeagues";
import { TimeContext } from '../../../contexts/time/TimeContext';
import { useNavigate, useParams } from 'react-router-dom'
import { Perfil, PerfilHeader, TeamInfos, TeamLogo, Divider, MenuPerfil, MenuTabs, MenuPages } from './styles';


export default function ProfileTeam() {

    let { id } = useParams();
    const { time, getPlayers, logged} = useContext(TimeContext);
    const [page, setPage] = useState(1)
    const classes = ["list-group-item list-group-item-action", "list-group-item list-group-item-action active"]
    const navigate = useNavigate()

    const [menuComponent, setMenuComponent] = useState(<MyPlayers />);

    function changePage(newPage) {
        if (newPage === 0 && page !== 0) {
            setPage(0);
            setMenuComponent(<MyLeagues />);
        } else if (newPage === 1 && page !== 1) {
            setPage(1);
            setMenuComponent(<MyPlayers />);
        } else if (newPage === 2 && page !== 2) {
            setPage(2);
            setMenuComponent(<div></div>);
        }
    }

    async function verifyAuth() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (!logged) {
            navigate('/');
        }
    }

    useEffect(() => {
        verifyAuth()
        getPlayers(id)
    }, [])

    return (
        <Perfil>
            <PerfilHeader>
                <TeamLogo>G</TeamLogo>
                <TeamInfos>
                    <p>Nome: {time.nome}</p>
                    <p>E-mail: {time.email}</p>
                    <p>Desde de: {time.created_at}</p>
                </TeamInfos>
            </PerfilHeader>
            <Divider />
            <MenuPerfil>
                <MenuTabs>
                    <div className="list-group">
                        <button onClick={() => { changePage(0) }} className={page === 0 ? classes[1] : classes[0]}>Minhas Ligas</button>
                        <button onClick={() => { changePage(1) }} className={page === 1 ? classes[1] : classes[0]}>Jogadores</button>
                        <button onClick={() => { changePage(2) }} className={page === 2 ? classes[1] : classes[0]}>Minha Conta</button>
                    </div>
                </MenuTabs>
                <MenuPages>
                    {menuComponent}
                </MenuPages>
            </MenuPerfil>
        </Perfil>
    )
}