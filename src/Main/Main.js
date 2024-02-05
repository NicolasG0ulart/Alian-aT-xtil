import React from "react";
import * as S from "./Styles"

import Banner from "./Banner/Banner";
import AboutUs from "./AboutUs/AboutUs";

export default function Main(){

    return(
        <S.Main>
            <Banner/>
            <AboutUs/>
        </S.Main>
    )
}