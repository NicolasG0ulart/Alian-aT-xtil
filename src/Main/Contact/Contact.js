import React from "react";
import * as S from "./Styles"

import Logo from "../../assets/logo.png"


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
                    {/* <p>(32)9999-9999</p>
                    <p>email.email@gmail.com</p>
                    <p>@aliancatextilltda</p> */}
                </S.Right>
            </S.Content>
        </S.Contact>
    )
}