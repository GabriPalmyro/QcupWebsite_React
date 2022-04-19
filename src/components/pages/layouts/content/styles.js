import { Link } from "react-router-dom"
import styled from "styled-components"


export const MainContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #1f1f1f;
`

export const Banner = styled.img`
    min-width: 100%;
    height: 300px;
    object-fit: cover;
	-webkit-transition: .3s ease-in-out;
	transition: all .3s ease-in-out;

    &:hover {
        cursor: pointer;
    }
    
    @media screen and (max-width: 767px) {
        height: 200px;
    }
`

export const GamesMain = styled.div`
    display: flex;
    width: 100%;
    background-color: #1f1f1f;
    color: #FFF;
    padding-top: 25px;
    
    @media screen and (max-width: 768px){
        flex-wrap: wrap;
    }
`

export const GamesOfTheDay = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;

    h2 {
        font-weight: 300;
    }
    

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const Leagues = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;

    h2 {
        font-weight: 300;
    }


    @media screen and (max-width: 768px){
        width: 100%;
    }
`
export const League = styled(Link)`
    width: 60%;
    height: 70px;
    margin-bottom: 30px;
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    background-color: #9A1F23;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    align-items: center;
    justify-content: center;

    transition: background-color 200ms ease-out 100ms;

    &:hover {
        cursor: pointer;
        background-color:  #ad2b30;
    }
`

export const LeagueLogo = styled.img`
    padding: 40px 20px;
    color: white;
`
