import styled from "styled-components";

export const AboutUs = styled.section`
    max-width: 1440px;
    margin: 100px auto;
    
    display: flex;
    justify-content: space-between;

    h1{
        color: #104086;
        font-size: 2rem;
    }

    img{
        width: 45%;
        border-radius: 10px;
    }
    @media(max-width: 1500px){
        margin-inline: 50px;
    }
    @media(max-width: 1024px){
        text-align: center;
        flex-direction: column;
        align-items: center;
    }
`
export const Texts = styled.div`
    border: solid red;
    p{
        margin-top: 20px;
        font-weight: 500;
        line-height: 20px;
        width: 450px;
        color: #104086;
        @media(max-width: 1024px){
            width: 100%;
        }
    }
`