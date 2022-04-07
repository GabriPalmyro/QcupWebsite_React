import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const SideBarNav = styled.aside`
    background: #15171c;
    width: 22%;
    display: flex;
    justify-content: center;
    position: fixed;
    padding-top: 50 px;
    overflow: auto;
    top: 0;
    left: 0;
    bottom: 0;
    transition: 10;
    z-index: 10;

    @media(max-width: 768px){
       width: 100%;
    }

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