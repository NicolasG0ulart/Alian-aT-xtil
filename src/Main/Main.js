import React from "react";
import * as S from "./Styles"

import AboutUs from "./AboutUs/AboutUs";
import Products from "./Products/Products";
import Contact from "./Contact/Contact";

export default function Main(){

    return(
        <S.Main>
            <AboutUs/>
            <Products/>
            <Contact/>
        </S.Main>
    )
}