import styled from "styled-components"
import { Link } from "react-router-dom"


export const SideDrawer = styled.nav`
    height: 100%;
    background-color: #242121;
    box-shadow: ${props => props.isOpen ? `
        box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.3);
    ` :
        `
        box-shadow: none;
    `};
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    max-width: 400px;
    z-index: 500;
    transition: all 0.3s ease-out;

    ${props => props.isOpen ? `
        transform: translateX(0)
    ` :
        `
        transform: translateX(-100%)
    `}
`

export const SideBarLink = styled(Link)`
    display: flex;
    color: white;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    padding-left: 20px;
    list-style: none;
    height: 50px;
    text-decoration: none;
    font-size: 18px;
    padding-right: 1.5rem;
    transition: 200ms ease;

    &:hover{
        background: #252831;
        border-left: 4px solid rgba(255,0,0,0.6);
        cursor: pointer;
    }
`

export const SideBarLabel = styled.span`
    margin-left: 16px;
`

export const DropdownLink = styled(Link)`
    background: #252831;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #F5F5F5;
    font-size: 18px;
    transition: 200ms ease;

    &:hover{
        background: rgba(255,50,0,0.4);
        cursor: pointer;
    }
`

export const SideBarWrap = styled.div`
    width: 100%;
`