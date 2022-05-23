import { Link } from "react-router-dom";
import styled from "styled-components";

export const SendEmailResetBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 120px;
    color: #FFF;

    h1 {
        font-size: 3rem;
        font-weight: 800;
        margin-top: 1%;
    }

    h5 {
        font-weight: 200;
        font-size: 0.9rem;
    }

    h4 {
        font-weight: 400;
        font-size: 0.8rem;
        color: #ababab
    }

    @media screen and (max-width: 768px){
        text-align: center;
    }

`

export const IconeChave = styled.div`
    font-size: 2rem;
    size: 30;
    color: #FFF;
    background-color: rgba(230, 54, 41, 0.3);
    border-radius: 50%;
    padding: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const EmailCard = styled.div`
    width: 40%;
    min-width: 480px;
    justify-content: flex-start;

    @media screen and (max-width: 768px){
        min-width: 120px;
        width: 90%;
    }

`

export const LoginLabel = styled.div`
    margin-top: 1rem;
    padding-bottom: 5px;
    font-weight: 300;
    font-size: 1.2rem;

    @media screen and (max-width: 768px){
        padding-top: 5%;
    }
`

export const LoginInput = styled.input`
    width: 100%;
    border-radius: 5px;
    padding: 10px 20px;
    text-decoration: none;
    border: 0;
    outline: none;
    font-weight: 400;
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.2);
    
    @media screen and (max-width: 768px){
        width: 100%;
    }
`
export const LoginButton = styled.input`
    width: 100%;
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
`

export const BackToLogin = styled(Link)`
        height: 40px;
        margin-top: 0.5rem;
        font-size: 0.8rem;
        color: #c5c5c5;
        display: flex;
        align-items: center;
        text-decoration: none;

    &:hover {
        color: #A2a2a2;
        cursor: pointer;
    }
`