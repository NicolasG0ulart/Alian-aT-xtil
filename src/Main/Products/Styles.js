import styled from "styled-components";

export const Products = styled.section`
    height: 700px;
    max-width: 1440px;
    margin: 70px auto;

    display: flex;
    justify-content: space-between;
`
export const Card = styled.div`
    width: 250px;
    height: 250px;
    background-color: #104086;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;

    img{
        width: 100%;
    }
`