import React from 'react'
import { FooterContainer } from './styles'
import { BsInstagram, BsYoutube } from 'react-icons/bs'

function Footer() {
    return (
        <FooterContainer>
            <div class="social">
                <a href="https://www.instagram.com/qcup.2021/" target="_blank"  rel="noopener noreferrer" ><BsInstagram/></a>
                <a href="https://www.youtube.com/channel/UC-3c2wRjj5EXNr21_F-qbBg" target="_blank"  rel="noopener noreferrer"><BsYoutube/></a>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="/" >Início</a></li>
                <li class="list-inline-item"><a href="/" >Services</a></li>
                <li class="list-inline-item"><a href="/" >Sobre</a></li>
                <li class="list-inline-item"><a href="/" >Termos</a></li>
                <li class="list-inline-item"><a href="/" >Contato</a></li>
            </ul>
            <p class="copyright">Quarentena Cup © 2022</p>
        </FooterContainer>
    )
}

export default Footer