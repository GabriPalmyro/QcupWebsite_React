import styled from "styled-components"


export const FooterContainer = styled.footer`
    width: 100%;
    padding:40px 0;
    background-color:#1A1818;
    color: #FFFFFF;

    ul {
        padding:0;
        list-style:none;
        text-align:center;
        font-size:18px;
        line-height:1.6;
        margin-bottom:0;
    }

    li {
        padding:0 10px;
    }

    ul a {
        color:inherit;
        text-decoration:none;
        opacity:0.8;
    }

    ul a:hover {
    opacity:1;
    }

    .social {
    text-align:center;
    padding-bottom:25px;
    }

    .social > a {
    font-size:24px;
    width:40px;
    height:40px;
    line-height:35px;
    display:inline-block;
    text-align:center;
    border-radius:50%;
    border:1px solid #ccc;
    margin:5px 12px;
    padding: 5px auto;
    color:inherit;
    opacity:0.75;
    }

    .social > a:hover {
    opacity:0.9;
    }

    .copyright {
    margin-top:15px;
    text-align:center;
    font-size:13px;
    color:#aaa;
    margin-bottom:0;
    }
`