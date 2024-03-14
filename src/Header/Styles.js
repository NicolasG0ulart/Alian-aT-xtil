import styled from "styled-components";
import { Link } from "react-router-dom"

export const LinkS = styled(Link)`
    text-decoration: none;
    color: #181818;
`

export const Header = styled.header`
    max-width: 1440px;
    margin: 0 auto;
    height: 75px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        height: 55px;
    }

    ul{
        display: flex;
        gap: 35px;
        list-style: none;
        li{
            color: #181818;
            font-family: 'Inter', sans-serif;
            font-weight: 500;
            position: relative;

            &:after{
                content: "";
                position: absolute;
                background-color: #104086;
                height: 3px;
                width: 0%;
                left: 0;
                bottom: -3px;
                transition: 0.5s;
              }
              &:hover{
                cursor: pointer;
              }
                &:hover:after{
                    width: 100%;
                }
        }
    }

    @media(max-width: 1500px){
        margin-inline: 50px;
    }
    @media(max-width: 768px){
        display: none;
    }
`
export const HeaderMobile = styled.header`
    display: none;
    height: 100vh;
    margin-inline: 50px;
    gap: 100px;
    flex-direction: column;
    align-items: center;
    img{
        margin-top: 40px;
        height: 70px;
    }
    ul{
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 35px;
        list-style: none;
        li{
            color: #104086;
            font-family: 'Inter', sans-serif;
            font-size: 2rem;
            font-weight: 500;
            position: relative;

            &:after{
                content: "";
                position: absolute;
                background-color: green;
                height: 3px;
                width: 0%;
                left: 0;
                bottom: -3px;
                transition: 0.5s;
              }
              &:hover{
                cursor: pointer;
              }
                &:hover:after{
                    width: 100%;
                }
        }
    }

    @media(max-width: 768px){
        display: flex;
    }
`
export const Burguer = styled.div`
    
`