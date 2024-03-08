import styled from "styled-components";
import BannerImg from "../../assets/banner.jpg"
export const BannerSection = styled.section`
    height: 370px;
    width: 100%;
    display: flex;
    align-items: center;

    background: 
    linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)),
    url(${BannerImg});

`
export const Text = styled.div`
    max-width: 1440px;
    margin: 0 auto;

    h1{
        font-size: 2.1rem;
        font-family: 'Inter', sans-serif;
    }
    @media(max-width: 1500px){
        margin-inline: 50px;
    }
`