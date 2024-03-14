//react router
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

//pages
import Home from "./Pages/Home/Home"
import AboutUsPage from "./Pages/AboutUsPage/About"
import ProductsPage from "./Pages/Products/Products"
import ContactPage from "./Pages/Contact/Contact"

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
    <>
    <GlobalStyle/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre-nos" element={<AboutUsPage/>}/>
        <Route path="/produtos" element={<ProductsPage/>}/>
        <Route path="/contato" element={<ContactPage/>}/>
        <Route path="*" element={<AboutUsPage/>}/>
      </Routes>
    </Router>
    </>
  )
}