import { Link } from "react-router-dom";
import styled from "styled-components";

export const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px 50px 10px;

    .link {
        color: #FFF;
        text-decoration: none;
    }

    @media screen and (max-width: 768px){
        padding: 15px 20px;
    }
`;

export const PerfilHeader = styled.div`
    width: 100%;
    display: flex;
    padding: 85px 0px 0px;

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
    }
`;

export const TeamLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: #C4C4C4;
    border-radius: 50%;
`;

export const TeamInfos = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2%;
    justify-content: space-around;
    color: white;

    @media screen and (max-width: 768px){
        text-align: center;
        margin-top: 15px;
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 0.5px;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.6);
`;

export const MenuPerfil = styled.div`
    width: 100%;
    margin-top: 2%;
    display: flex;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const MenuTabs = styled.div`
    width: 20%;
    
    .list-group {
        border: none;
    }

    .list-group-item.list-group-item-action {
        border: none;
        overflow: hidden;
        margin-top: 5%;
        border-radius: 5px;
        text-align: center;
        color: #fff;
        /* transition: all 100ms ease-in;

        &:hover {
            color: #6D6D6D;
        } */
    }

    .list-group-item.list-group-item-action.active {
        background-color: #F13232;
    }
    
    .list-group-item.list-group-item-action {
        background-color: transparent;
        border: #F13232 solid 1px;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        margin-bottom: 5%;
    }
    `;

export const MenuPages = styled.div`
    width: 80%;
    margin-left: 3%;
    color: #fff;

    @media screen and (max-width: 768px){
        margin-left: 0%;
        width: 100%;
    }
`;

//* MENUPAGES

export const ErrorPlayers = styled.div`
    max-width: 420px;
    background-color: rgba(241, 50, 50, 0.4);
    padding: 10px 15px;
    border-radius: 5px;
`;

export const TitlePlayer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const AddPlayers = styled(Link)`
    border: none;
    outline: inherit;
    color: #fff;
    max-width: 240px;
    background-color: rgba(241, 50, 50, 0.6);
    padding: 10px 15px;
    border-radius: 5px;
    transition: all 200ms ease-in;
    
    &:hover {
        background-color: rgba(241, 50, 50, 0.8);
    }
    
`;

export const FormNewPlayer = styled.div`
    padding: 105px 50px 10px;
    color: #FFF;
`;

export const RegisterInput = styled.input`
    width: 100%;
    border-radius: 10px;
    padding: 8px 20px;
    background-color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    border: none;
    outline: none;
    font-weight: 400;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
    
    @media screen and (max-width: 768px){
        width: 100%;
    }
    
`;

export const Jogadores = styled.div`
    width: 100%;

    a {
        color: #FFF;
        cursor: pointer;
    }
    
    /* .table tbody tr:nth-child(even) {
        background-color: #A2A2A2;
    } */
    /* display: grid;
    margin-top: 10px;
    grid-gap: 15px 30px;
    grid-template-columns: repeat(auto-fill, 220px);
    */

    /* @media screen and (max-width: 768px){ */
        /* justify-content: center;
        grid-gap: 20px 0px;
        margin-top: 25px;
        grid-template-columns: repeat(auto-fill, 320px); */
    /* }  */
`;

export const TabelaJogadores = styled.div`
    width: 100%;
    
    .table{
        color: #FFF;
        width: 100%;
        border-collapse: collapse;
    }

    .table td,
    .table th {
        padding: 12px 15px;
        /* border: 0.2px solid #DDD; */
        text-align: center;
        font-size: 16px;
    }

    .table th {
        color: #FFF;
    }

    .acoes {
        display: flex;
    }

    @media screen and (max-width: 768px){

        margin-top: 1.5rem;

        .table thead{
            display: none;
        }

        .table, .table tbody, .table tr, .table td{
            display: block;
            width: 100%;
        }

        .table td:last-child {
            border: none;
        }

        .table tr{
            margin-top: 15px;
            margin-bottom: 15px;
            border: 2px solid red;
            border-radius: 10px;
        }
        .table td{
            text-align: right;
            padding-left: 50%;
            text-align: right;
            position: relative;
        }

        .table td::before{
            content: attr(data-label);
            position: absolute;
            left:0;
            width: 50%;
            padding-left:15px;
            font-size:15px;
            font-weight: bold;
            text-align: left;
        }

        .botao-excluir {
            margin-left: 12px;
        }
    }
`;


export const JogadorCard = styled.div`
    height: 240px;
    max-width: 100%;
    background-color: #C4C4C4;
    padding: 20px 10px;
    justify-content: space-around;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;

`;

export const InfosJogador = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px){
         justify-content: center;
    }
`;

export const ImgJogador = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #868686;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NomeJogador = styled.div`
    margin-left: 15px;
    width: 70%;
    font-weight: 400;

    @media screen and (max-width: 768px){
        margin-left: 20px;
    }
`;

export const StatsJogador = styled.div`
    height: 70%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .stats-container {
        display: flex;

        @media screen and (max-width: 768px){
            justify-content: center;
        }
    }
    
`;

export const Label = styled.div`
    color: #000;
    font-size: 14px;
    font-weight: 400;
`;

export const Stats = styled.div`
    color: #FFF;
    margin-left: 5px;
    font-size: 14px;
    font-weight: 600;
`;


