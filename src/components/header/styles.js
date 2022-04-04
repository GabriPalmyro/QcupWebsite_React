import styled from "styled-components"

export const HeaderContainer = styled.div`
    background-color: #f55a1d;
    color: #FFF;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    display: flex;
    z-index: 99;
    padding: 8px;
`

export const SystemLogo = styled.div`
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    color: #FFF;
    text-align: center;
    font-family: 'Niconne';
    padding: 0 15px;
    font-size: 26px;
    font-weight: 400;
    line-height: 50px;

    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;

    &:focus {
        color: #FFF;
        text-decoration: none;
        cursor: pointer;
    }
    
    @media (min-width: 768px) {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
        display: block;
        width: 250px;
        background-color: #f55a1d;
    }

`

export const Toggle = styled.div`
    padding: 0 15px;
    font-family: fontAwesome;
    color: #FFF;
    line-height: 2.4;
    -webkit-transition: background-color 0.3s ease;
    -o-transition: background-color 0.3s ease;
    transition: background-color 0.3s ease;

    &:hover, &:focus {
        color: #e2e2e2;
        text-decoration: none;
    }

    &:before {
        content: "\f0c9";
        font-size: 21px;
    }

    @media (min-width: 767px) {
        -webkit-box-ordinal-group: 0;
        -ms-flex-order: -1;
        order: -1;
    }
`

export const Profile = styled.div`

    position: fixed;
    padding-top: 13px;
    right: 0px;
    font-weight: bold;
    font-size: 18px;
    display: flex;

    @media (min-width: 768px) {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 auto;
        flex: 1 0 auto;
    }

`

export const UserName = styled.span`
    padding-right: 13px;
`

export const Logon = styled.span`
    padding-right: 10px;

`

export const Logout = styled.div`
    color: #212529;
    text-decoration: none;
`