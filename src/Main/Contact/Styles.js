import styled from "styled-components";

export const Contact = styled.section`
    width: 100%;
    height: 400px;
    border-top: solid 2px #0b347a;
`
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 100px;
    max-width: 1440px;
    margin: 0 auto;
`
export const Left = styled.div`
    display: flex;
    width: 50%;
    align-items: center;

    max-width: 1440px;
    margin: 0 auto;
    height: 300px;
    img{
        height: 55px;
    }
    span{
        margin-left: 50px;
        height: 45%;
        border: solid 1px #0b347a;
    }
    p{ 
        margin-left: 50px;
        color: #0b347a;
        font-size: 1.2rem;
        font-weight: 500;
        width: 360px;
    }
`
export const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    max-width: 1440px;
    margin: 0 auto;
    height: 300px;

    p{
        color: #0b347a;
        font-size: 1.2rem;
        font-weight: 500;
    }
`