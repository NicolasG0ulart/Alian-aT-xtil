import React from "react";
import * as S from "./Styles"

import Banner from "./Banner/Banner";
import AboutUs from "./AboutUs/AboutUs";
import Products from "./Products/Products";
import Contact from "./Contact/Contact";

export default function Main(){

    return(
        <S.Main>
            <Banner/>
            <AboutUs/>
            <Products/>
            <Contact/>
        </S.Main>
    )
}