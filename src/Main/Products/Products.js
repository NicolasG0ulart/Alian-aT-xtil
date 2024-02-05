import React from "react";
import * as S from "./Styles"

import ImageTest from "../../assets/profit-40mm.PNG"

export default function Products(){

    return(
        <S.Products>
            <S.Card>
                <img src={ImageTest} alt="imagem de um elástico"/>
                <h2>Elástico 40mm</h2>
            </S.Card>

            <S.Card>
            <img src={ImageTest} alt="imagem de um elástico"/>
            <h2>Elástico 40mm</h2>
            </S.Card>

            <S.Card>
            <img src={ImageTest} alt="imagem de um elástico"/>
            <h2>Elástico 40mm</h2>
            </S.Card>

            <S.Card>
            <img src={ImageTest} alt="imagem de um elástico"/>
            <h2>Elástico 40mm</h2>
            </S.Card>
        </S.Products>
    )
}