import styled from "styled-components";

export const Contact = styled.section`
    width: 100%;
    height: 250px;
    background-color: #0b347a;
`
export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1440px;
    height: 100%;
    margin: 0 auto;
`
export const Left = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    max-width: 1440px;
    height: 100%;
    img{
        height: 70px;
    }
    span{
        margin-left: 30px;
        height: 45%;
        border: solid 1px white;
    }
    p{ 
        margin-left: 30px;
        font-size: 1.2rem;
        font-weight: 500;
        width: 360px;
    }
`
export const Right = styled.div`    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    max-width: 1440px;
    height: 100%;

    p{
        width: 270px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1.2rem;
        font-weight: 500;

        img{
            height: 20px;
        }
    }
`