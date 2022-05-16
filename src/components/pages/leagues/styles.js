import styled from "styled-components"

export const League = styled.div`
    height: 100%;
    width: 100%;
    color: white;
    padding-top: 55px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const LeagueHeader = styled.div`
    background-color: #d4d4d4;
    color: #000;
    width: 100%;
    height: 160px;
    margin: 20px 0px;
    padding: 0 20px 0 50px;
    display: flex;
    align-items: center;

    .info-leagues {
        display: flex;
        width: 70%;
        justify-content: flex-start;
        flex-direction: column;
        margin-left: 35px;
    }

    .button-add {
        width: 20%;
        display: flex;
        align-self: flex-end;
        justify-content: flex-end;
        font-size: 12px;
        margin-bottom: 10px;
    }

    p {
        margin: 0;
        padding: 0;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        height: 50vh;
        padding: 20px 40px;

        .info-leagues {
            width: 100%;
            margin-left: 0px;
        }

        .button-add {
            width: 100%;
            align-self: center;
            justify-content: center;
        }

    }
    
`

export const LeagueLogo = styled.img`
    width: 12%;

    @media screen and (max-width: 768px){
        width: 200px;
    }
`

export const TabelaClassificacao = styled.table`
    width: 96%;
    color: white;
    margin-left: 2%;
`

export const TabelaHeader = styled.thead`


    text-align: center;
    vertical-align: middle;
    letter-spacing: -1px;

    th {
        font-size: 1.2rem;
        font-weight: 300;
    }

`
export const HeaderPos = styled.th`
    text-align: start;
    vertical-align: baseline;
    font-weight: 300;
`
export const HeaderTitle = styled.th`
        align-self: start;
        text-align: start;
        vertical-align: baseline;
`
export const TabelaCorpo = styled.tbody`
        text-align: center;
        vertical-align: middle;
        font-weight: 400;
        text-transform: uppercase;
        font-size: 1.2rem;
`
export const Position = styled.td`
    width: 50px;
    height: 50px;
    margin: 10px 0px;
    background-color: #B7282F;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 600;
`
export const TitleTime = styled.td`
    width: 50%;
    align-self: center;
    text-align: start;
    vertical-align: baseline;

    @media screen and (max-width: 768px){
        img {
            display: none;
        }
    }
       
`

export const PontosTime = styled.td`
    font-weight: 800;
    font-size: 2.2rem;
`