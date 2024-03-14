import React from "react";
import * as S from "./Styles"

import Team from "../../assets/team.PNG"


export default function AboutUs(){

    return(
        <S.AboutUs>
            <S.Texts>
                <h1>SOBRE NÓS</h1>
                <p>
                    Há seis anos, estamos comprometidos em fornecer elasticidade, conforto e qualidade para a indústria de roupas íntimas.
                </p>
                <p>
                    Localizada na cidade de Pequeri - MG, nossa empresa funciona 24 horas por dia, para garantir que nossos clientes sempre tenham acesso aos melhores produtos.
                    Nosso compromisso com a excelência é evidente em cada elástico que produzimos.
                </p>
                <p>
                    Utilizamos materiais da mais alta qualidade e técnicas de fabricação de última geração para garantir que nossos produtos atendam e
                    superem as expectativas dos nossos clientes.
                </p>

                <p>
                    Além disso, nossa equipe é apaixonada por oferecer um serviço excepcional.
                    Estamos aqui para ajudá-lo a encontrar os elásticos perfeitos para suas necessidades específicas e garantir sua satisfação total
                </p>
            
            </S.Texts>

            <img src={Team} alt="Imagem da Equipe"/>
                
        </S.AboutUs>
    )
}