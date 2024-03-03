import React from "react";
import * as S from "./Styles"

import Logo from "../../assets/logo-white.png"
import WhatsApp from "../../assets/whatsapp.png"
import Email from "../../assets/e-mail.png"
import Instagram from "../../assets/instagram.png"
import Localizacao from "../../assets/localizador.png"


export default function Contact(){

    return(
        <S.Contact>
            <S.Content>
                <S.Left>
                    <img src={Logo} alt="logo do site"/>
                    <span></span>
                    <p>
                        O segredo de um grande sucesso está
                        no trabalho de uma grande equipe.
                    </p>
                </S.Left>
                
                <S.Right>
                    <p><img src={WhatsApp} alt="Ícone do whatsapp"/> (32)9999-9999</p>
                    <p><img src={Email} alt="Ícone do email"/>  email.email@gmail.com</p>
                    <p><img src={Instagram} alt="Ícone do instagram"/> @aliancatextilltda</p>
                    <p><img src={Localizacao} alt="Ícone de localização"/> Pequeri-MG</p>
                </S.Right>
            </S.Content>
        </S.Contact>
    )
}