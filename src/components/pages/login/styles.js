import { Link } from "react-router-dom"
import styled from "styled-components"


export const Login = styled.div`
    height: calc(100vh);
    width: 100%;
    display: flex;
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    padding-top: 75px;

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: auto;
    }
`


export const FormLogin = styled.form`
    width: 50%;

    @media screen and (max-width: 768px){
       width: 100%;
    }
`

export const LoginTitle = styled.h2`
    padding-top: 5%;
    font-weight: 800;
    font-size: 3rem;
    padding-bottom: 2%;

    @media screen and (max-width: 768px){
        font-weight: bold;
        font-size: 1.6rem;
    }
`

export const LoginLabel = styled.div`
    margin-top: 0.5rem;
    padding-bottom: 5px;
    font-weight: 300;
    font-size: 1.5rem;

    @media screen and (max-width: 768px){
        padding-top: 5%;
    }
`

export const LoginCard = styled.div`
    height: 100%;
    width: 70%;
    padding: 20px 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    
    @media screen and (max-width: 768px){
        height: auto;
        padding: 0 25px 0px;
        width: 100%;
        margin-bottom: 10%;
    }
    `

export const LoginInput = styled.input`
    width: 100%;
    border-radius: 10px;
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    border: 0;
    outline: none;
    font-weight: 400;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
    
    @media screen and (max-width: 768px){
        width: 100%;
    }
    
    `

export const ForgotPassword = styled(Link)`

        margin-top: 1rem;
        font-size: 0.8rem;
        color: #c5c5c5;
        text-decoration: none;
        display: flex;

    &:hover {
        color: #A2a2a2;
    }
`


export const LoginButton = styled.input`
    width: 40%;
    border-radius: 10px;
    padding: 10px 20px;
    margin-top: 2rem;
    background-color: #B7282F;
    color: #FFF;
    text-decoration: none;
    border: none;
    font-weight: 800;
    font-size: 1.2rem;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
    transition: all 500ms ease 100ms;
    
    &:hover {
        box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.25);
    }

    @media screen and (max-width: 1200px){
        width: 100%;
    }

`

export const RegistorToCard = styled.div`
    height: 100%;
    width: 30%;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: #B7282F;
    border-radius: 80px 0px 0px 80px;
    box-shadow: -5px 4px 20px 2px rgba(0, 0, 0, 0.2);
    text-align: center;

    @media screen and (max-width: 768px){
        box-shadow: none;
        height: auto;
        padding: 50px 40px;
        border-radius: 20px 20px 0px 0px;
        width: 100%;
    }
`

export const ButtonToRegister = styled(Link)`
    width: 75%;
    border-radius: 50px;
    padding: 10px 0;
    background-color: white;
    text-decoration: none;
    border: none;
    font-weight: bold;
    color: #000;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);
    transition: all 500ms ease 100ms;

    &:hover {       
    color: #000;
    box-shadow: 0px 5px 20px 5px rgba(0, 0, 0, 0.25);
}
`

export const ErrorMessage = styled.div`
`

