import styled from "styled-components";

export const Products = styled.section`
    max-width: 1440px;
    margin: 100px auto;
`
export const TextProduct = styled.section`
    display: flex;
    justify-content: center;
`
export const Texts = styled.div`
    h1{
        text-align: center;
        color: #104086;
        font-size: 2rem;
    }
    p{
        text-align: center;
        margin-top: 20px;
        font-weight: 500;
        line-height: 20px;
        width: 750px;
        color: #104086;
        @media(max-width: 1500px){
            width: 100%;
        }
    }
    @media(max-width: 1024px){
        margin-inline: 50px;
    }
`
export const Cards = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;

    flex-wrap: wrap;
    @media(max-width: 1500px){
        gap: 130px;
        justify-content: center;
    }
`
export const Card = styled.div`
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;

    img{
        width: 100%;
    }
    h2{
        color: #104086;
    }
    @media(max-width: 1500px){
        width: 350px;
        height: 350px;
    }
`