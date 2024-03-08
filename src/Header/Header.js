import * as S from "./Styles"

import Logo from "../assets/logo.png"
import Banner from "../Main/Banner/Banner"

export default function Header(){

    return(
        <>
            <S.Header>
                <img src={Logo} alt="Logo da empresa Aliança Têxtil."/>
                <ul>
                    <li>INICIO</li>
                    <li>SOBRE NÓS</li>
                    <li>PRODUTOS</li>
                    <li>CONTATO</li>
                </ul>
            </S.Header>

            <S.HeaderMobile>
                <img src={Logo} alt="Logo da empresa Aliança Têxtil."/>
                <S.Burguer>
                    <ul>
                        <li>INICIO</li>
                        <li>SOBRE NÓS</li>
                        <li>PRODUTOS</li>
                        <li>CONTATO</li>
                    </ul>
                </S.Burguer>
            </S.HeaderMobile>
            <Banner/>
        </>
    )
}