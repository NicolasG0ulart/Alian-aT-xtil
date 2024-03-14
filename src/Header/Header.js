import * as S from "./Styles"

import Logo from "../assets/logo.png"

export default function Header(){

    return(
        <>
            <S.Header>
                <img src={Logo} alt="Logo da empresa Aliança Têxtil."/>
                <ul>
                    <li><S.LinkS to="/">INICIO</S.LinkS></li>
                    <li><S.LinkS to="/sobre-nos">SOBRE NÓS</S.LinkS></li>
                    <li><S.LinkS to="/produtos">PRODUTOS</S.LinkS></li>
                    <li><S.LinkS to="/contato">CONTATO</S.LinkS></li>
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
        </>
    )
}