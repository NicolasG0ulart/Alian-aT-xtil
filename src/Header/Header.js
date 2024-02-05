import * as S from "./Styles"

import Logo from "../assets/logo.png"

export default function Header(){

    return(
        <S.Header>
            <img src={Logo} alt="Logo da empresa Aliança Têxtil."/>
            <ul>
                <li>INICIO</li>
                <li>SOBRE NÓS</li>
                <li>PRODUTOS</li>
                <li>CONTATO</li>
            </ul>
        </S.Header>
    )
}