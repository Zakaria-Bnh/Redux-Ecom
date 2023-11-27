import Slider from "react-slick"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const HeroSlider = ({children, isSlide, setisSlide}) => {
  


    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        afterChange: () => setisSlide(true),
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000, 
        fade: true
      };

  return (
    <Slider {...settings}>
        {children}
    </Slider>
  )
}

export default HeroSlider