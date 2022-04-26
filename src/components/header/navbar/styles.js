import { Link } from "react-router-dom"
import styled from "styled-components"

export const HeaderContainer = styled.header`
    position: fixed;
    width: 100%;
    background-color: #1A1818;
    color: #FFF;
    height: 75px;
    /* padding: 0.2rem calc((100vw - 1000px) / 7); */
    top: 0;
    left: 0;

    link {
        color: #FFF;
        text-decoration: none;
    }

    a {
        color: #FFF;
        text-decoration: none;
    }

    @media screen and (max-width: 767px) {
        padding: 0 auto;
        justify-content: space-between;
    }
`
export const HeaderNav = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;

    @media screen and  (max-width: 768px) {
        justify-content: space-between;
    }
`

export const SystemLogo = styled.img`   
    -ms-flex: 1 0 auto;
    flex: 0 0 auto;
    -webkit-box-flex: 0;
    padding: 10px 0px 0px 30px;
    height: 60px;
    object-fit: contain;
    
    @media screen and (max-width: 768px) {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        display: block;
        padding: 0;
        height: 40px;
    }

`
export const Leagues = styled.div`
    /* -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    -webkit-box-flex: 1;
    box-flex: 1; */
    display: flex;
    width: 70%;
    justify-content: center;

    @media screen and (max-width: 767px) {
        display: none;
    }
`
export const LeagueLabel = styled(Link)`
    font-size: 1.8rem;
    font-weight: 300;
    margin: 0 2%;

    transition: all 100ms ease-in;

    &:hover, &:focus {
        color: #C2C2C2;
        text-decoration: none;
        transform: translateY(5);
        cursor: pointer;
    }
`

export const Toggle = styled.button`
    /* position: fixed; */
    display:inline-block;
    padding: 0 15px;
    font-family: fontAwesome;
    border: none;
    background-color: transparent;
    color: #9A1F23;
    line-height: 2.4;
    transition: all 80ms ease-in;

    &:hover, &:focus {
        color: #9A1F23;;
        text-decoration: none;
        transform: scale(1.1);
    }

    &:before {
        content: "\f0c9";
        font-size: 24px;
    }

    @media screen and  (min-width: 767px) {
       display: none;
    }
`

export const Profile = styled.div`
    /* position: fixed;
    right: 10px; */
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0 24px;
    display: flex;

    @media screen and  (max-width: 768px) {
        display: none;
    }

`

export const UserName = styled.span`
    padding-right: 13px;
    font-weight: 500;
`

export const Logon = styled.span`
    padding-right: 10px;

`

export const ProfileMobile = styled.div`
    color: #B7282F;
    font-size: 1.6rem;
    display: flex;

    @media screen and  (min-width: 768px) {
        display: none;
    }

`

export const Logout = styled.div`
    color: #B7282F;
    text-decoration: none;
    
    cursor: pointer;
`

export const Login = styled.div`
    color: #FFF;
    text-decoration: none;
    margin-right: 5px;
    transition: all 100ms ease-in;

    &:hover, &:focus {
        color: #C2C2C2;
        text-decoration: none;
        transform: translateY(5);
        cursor: pointer;
    }

`

export const Register = styled.div`
    text-decoration: none;
    color: #FFF;
    margin-left: 5px;

    transition: all 100ms ease-in;

    &:hover, &:focus {
        color: #C2C2C2;
        text-decoration: none;
        transform: translateY(5);
        cursor: pointer;
    }
`