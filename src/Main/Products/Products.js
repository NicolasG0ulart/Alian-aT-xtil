import React from "react";
import * as S from "./Styles"

import imageProduct from "../../assets/doce-morena.jpg"

export default function Products(){

    return(
        <S.Products>
            <S.TextProduct>
                <S.Texts>
                    <h1>PRODUTOS</h1>
                    <p>
                        Aqui, você encontrará uma variedade de elásticos de 25, 30, 35 e 40 milímetros, projetados especificamente para
                        atender às necessidades de confecção de roupas íntimas.
                    </p>
                    <p>
                        Nosso compromisso com a excelência significa que cada elástico que fabricamos é cuidadosamente produzido para garantir
                        elasticidade ideal, durabilidade e suavidade contra a pele. 
                    </p>
                    <p>
                        Além disso, estamos prontos para personalizar os elásticos de acordo com as suas preferências e especificações. Seja adicionando
                        detalhes exclusivos ou incorporando o logotipo da sua marca, estamos aqui para garantir que seus produtos se destaquem no mercado.
                    </p>
                    <p>
                        Explore nossa coleção de elásticos para roupa íntima hoje mesmo e descubra por que somos a escolha preferida de designers e fabricantes que buscam qualidade, conforto e personalização em cada peça.
                        Estamos ansiosos para colaborar com você e ajudar a trazer à vida suas criações de lingerie com elásticos de alta qualidade.
                    </p>
                </S.Texts>
            </S.TextProduct>
            
            <S.Cards>
                <S.Card>
                    <img src={imageProduct} alt="imagem de um elástico"/>
                    <h2>Elástico 25mm</h2>
                </S.Card>

                <S.Card>
                    <img src={imageProduct} alt="imagem de um elástico"/>
                    <h2>Elástico 30mm</h2>
                </S.Card>

                <S.Card>
                    <img src={imageProduct} alt="imagem de um elástico"/>
                    <h2>Elástico 35mm</h2>
                </S.Card>

                <S.Card>
                    <img src={imageProduct} alt="imagem de um elástico"/>
                    <h2>Elástico 40mm</h2>
                </S.Card>
            </S.Cards>
        </S.Products>
    )
}