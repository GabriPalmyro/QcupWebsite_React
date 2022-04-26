import styled from "styled-components"

export const League = styled.div`
    height: 100%;
    width: 100%;
    color: white;
    padding-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TabelaClassificacao = styled.table`
    width: 80%;
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
       
`

export const PontosTime = styled.td`
    font-weight: 800;
    font-size: 2.2rem;
`