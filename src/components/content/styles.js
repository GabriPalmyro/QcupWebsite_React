import styled from "styled-components"

export const MainContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Banner = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    -webkit-transform: scale(1.0);
	transform: scale(1.0);
	-webkit-transition: .3s ease-in-out;
	transition: all .3s ease-in-out;

    &:hover {
        -webkit-transform: scale(1.01);
	    transform: scale(1.01);
        cursor: pointer;
    }
`

export const GamesMain = styled.div`
    display: flex;
    width: 100%;

    @media screen and (max-width: 768px){
        flex-direction: column;
        flex-wrap: wrap;
    }
`

export const GamesOfTheDay = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;

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

    @media screen and (max-width: 768px){
        width: 100%;
    }
`
export const League = styled.div`
    width: 60%;
    height: 70px;
    margin-bottom: 30px;
    padding: 5px 10px;
    border-radius: 10px;
    display: flex;
    background-color: #9A1F23;
    color: #fff;
    font-size: 1.5rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    align-items: center;
    justify-content: center;

    transition: background-color 200ms ease-out 100ms;

    &:hover {
        cursor: pointer;
        background-color:  #ad2b30;
    }
`
