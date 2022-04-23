import { Link } from "react-router-dom";
import styled from "styled-components";
import InputBase from "@material-ui/core/Input";

export const Register = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    font-family: 'Open Sans', sans-serif;
    background-color: #383838;
    color: #fff;

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: auto;
    }
`


export const FormRegister = styled.div`
    width: 50%;

    @media screen and (max-width: 768px){
       width: 100%;
    }
`

export const RegisterTitle = styled.h2`
    padding-top: 1%;
    font-weight: 800;
    font-size: 2.2rem;

    @media screen and (max-width: 768px){
        font-weight: bold;
        font-size: 1.6rem;
    }
`

export const RegisterLabel = styled.div`
    padding-top: 3%;
    padding-bottom: 5px;
    font-weight: 300;
    font-size: 1.2rem;

    @media screen and (max-width: 768px){
        padding-top: 5%;
    }
`

export const RegisterCard = styled.div`
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

`

export const RegisterPassInput = styled(InputBase)`
    width: 100%;
    border-radius: 10px;
    padding: 4px 20px;
    background-color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    border: none;
    outline: none;
    font-weight: 400;
    box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.2);

    @media screen and (max-width: 768px){
        width: 100%;
    }

`
export const RegisterButton = styled.button`
    width: 40%;
    border-radius: 10px;
    padding: 10px 20px;
    margin-top: 38px;
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

export const LoginToCard = styled.div`
    height: calc(100vh - 85px);
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
        padding: 30px 40px;
        border-radius: 0;
        width: 100%;
    }
`

export const ButtonToLogin = styled(Link)`
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

export const Loader = styled.div`
    margin-top: 6%;
    margin-left: 2%;
    border: 7px solid #F3F3F3;
    border-top: 7px solid #B7282F;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s ease infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`


