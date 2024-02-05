import Header from "./Header/Header"
import Main from "./Main/Main"

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
  
}
h1, h2, h3, h4, h5, p, button, li{
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
  }
}
`


export default function App(){


  return(
    <div>
      <GlobalStyle/>
      <Header/>
      <Main/>
    </div>
  )
}