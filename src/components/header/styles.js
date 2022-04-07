import styled from "styled-components"

export const HeaderContainer = styled.div`
    background-color: #1A1818;
    color: #FFF;
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0; */
    display: flex;
    align-items: center;
    /* z-index: 99; */
    padding: 8px;
`

export const SystemLogo = styled.img`   
    -ms-flex: 1 0 auto;
    flex: 0 0 auto;
    -webkit-box-flex: 0;
    padding: 10px 0px 0px 30px;
    height: 70px;
    object-fit: contain;

    transition: transform 80ms ease-in;

    &:hover {
        color: #FFF;
        text-decoration: none;
        cursor: pointer;
        transform: scale(1.02);
    }
    
    @media screen and  (max-width: 768px) {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        display: block;
        height: 60px;
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

    @media screen and (max-width: 1024px) {
        display: none;
    }
`
export const LeagueLabel = styled.h2`
    font-size: 2.2rem;
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
    padding: 0 15px;
    font-family: fontAwesome;
    border: none;
    background-color: transparent;
    color: #FFF;
    line-height: 2.4;
    transition: all 80ms ease-in;

    &:hover, &:focus {
        color: #e2e2e2;
        text-decoration: none;
        transform: scale(1.1);
    }

    &:before {
        content: "\f0c9";
        font-size: 21px;
    }

    @media screen and  (min-width: 767px) {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
    }
`

export const Profile = styled.div`
    /* position: fixed;
    right: 10px; */
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0 24px;
    display: flex;

    @media screen and  (min-width: 768px) {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
    }

`

export const UserName = styled.span`
    padding-right: 13px;
    font-weight: 500;
`

export const Logon = styled.span`
    padding-right: 10px;

`

export const Logout = styled.div`
    color: #212529;
    text-decoration: none;
`