import React from 'react';

import Header from "../../Header/Header";
import * as S from "./Styles"

// import image1 from '../../assets/banner.jpg';
// import image2 from '../../assets/equipe.jpeg';
// import image3 from '../../assets/logo-white.png';

// const SlideShow = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const images = [image1, image2, image3];
//     const intervalDuration = 4500;
  
//     useEffect(() => {
//       const intervalId = setInterval(() => {
//         nextSlide();
//       }, intervalDuration);
  
//       return () => {
//         clearInterval(intervalId);
//       };
//     }, [currentSlide]);
  
//     const nextSlide = () => {
//       setCurrentSlide((currentSlide + 1) % images.length);
//     };
  
//     const prevSlide = () => {
//       setCurrentSlide((currentSlide - 1 + images.length) % images.length);
//     };
export default function About(){
  
    return (
        <>
            <Header/>
            <S.BannerSlide>
                página de sobre nos
            </S.BannerSlide>
      </>
    );
  };