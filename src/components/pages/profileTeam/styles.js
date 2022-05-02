import styled from "styled-components";

export const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 105px 50px 10px;
`;

export const PerfilHeader = styled.div`
    width: 100%;
    display: flex;
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
`;

export const MenuPages = styled.div`
    width: 80%;
    margin-left: 3%;
    color: #fff;
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
`;

export const AddPlayers = styled.button`
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