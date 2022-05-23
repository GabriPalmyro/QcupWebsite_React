import { Link } from "react-router-dom"
import styled from "styled-components"


export const MainContent = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #1f1f1f;
`

export const Banner = styled.img`
    min-width: 100%;
    height: 300px;
    margin-top: 75px;
    object-fit: cover;
	-webkit-transition: .3s ease-in-out;
	transition: all .3s ease-in-out;

    &:hover {
        cursor: pointer;
    }
    
    @media screen and (max-width: 767px) {
        height: 150px;
        width: 100%;
    }
`

export const GamesMain = styled.div`
    display: flex;
    height: auto;
    width: 100%;
    background-color: #1f1f1f;
    color: #FFF;
    padding-top: 25px;
    
    @media screen and (max-width: 768px){
        flex-wrap: wrap;
        text-align: center;
        height: auto
    } 
`

export const GamesOfTheDay = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 30px 50px;

    h2 {
        font-weight: 800;
        font-size: 1.8rem;
    }

    p {
        font-weight: 400;
        font-size: 1.2rem;
    }
    
    @media screen and (max-width: 768px){
        width: 100%;
        margin: 20px 40px;
        align-items: center;

        h2 {
            font-size: 1.5rem;
        }

        p {
            font-size: 1rem;
        }
    }
`

export const Leagues = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    margin: 20px 0;

    h2 {
        font-weight: 800;
    }

    @media screen and (max-width: 768px){
        width: 100%;
    }
`

export const CardsLeagues = styled.div`
    width: 100%;
    margin: 20px 0;
    display: grid;
    grid-gap: 10px 30px;
    grid-template-columns: repeat(auto-fill, 320px);
    justify-content: center;

    
    @media screen and (max-width: 768px){
        grid-gap: 0px 20px;
    }
`

export const League = styled(Link)`
    text-decoration: none;
    border-radius: 10px;
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    
    background-position: center;
    background-size: cover;

    transition: all 0.7s ease;

    p {
        color: transparent;
        font-size: 1.2rem;
        font-weight: 600;
        transition: all 0.7s ease;
        transform: translateY(-25px);
    }

    &:hover {
        filter: none;
        -webkit-filter: grayscale(0);
        transform: scale(1.2);
        transform: translateY(-10px);

        p {
            transform: translateY(10px);
            color: white;
        }
    }
`

export const LeagueLogo = styled.img`
    /* padding: 10px 20px; */
    width: 100%;
    border-radius: 10px;
`

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    margin: 0px 20px;
    background-color: white;
    border-radius: 10px;

    @media screen and (min-width: 768px){
        height: 500px;
        width: 3px;
    }
`

export const RegisterButton = styled(Link)`
    width: 100%;
    border-radius: 10px;
    padding: 10px 20px;
    margin-top: 24px;
    background-color: #B7282F;
    color: #FFF;
    text-align: center;
    text-decoration: none;
    border: none;
    font-weight: 600;
    font-size: 1.4rem;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
    transition: all 500ms ease 100ms;
    
    &:hover {
        color: #FFF;
        box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.3);
    }

    @media screen and (min-width: 768px){
        margin-top: 12px;
    }

`