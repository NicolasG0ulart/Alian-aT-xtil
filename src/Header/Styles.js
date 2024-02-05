import styled from "styled-components";

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
`