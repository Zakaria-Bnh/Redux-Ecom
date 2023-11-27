import {HeroSlider} from "../utilities/index";
import { laptop, furniture, clothsDisplay } from "../assets";
import { useState } from "react";


const Hero = () => {
  const [isSlide, setisSlide] = useState(false)


  const heroslidedata = [
    {
      img: laptop,
      alt: "laptop",
      heading: "Cutting-Edge Electronics",
      description:
        "Explore the latest innovations in technology. From powerful laptops to smart gadgets, we've got what you need to stay connected and ahead of the curve.",
    },
    {
      img: clothsDisplay,
      alt: "clothing",
      heading: "Fashion Forward Apparel",
      description:
        "Discover the latest trends in clothing. Our curated collection includes everything from casual wear to elegant outfits, designed to suit every occasion.",
    },
    {
      img: furniture,
      alt: "furniture",
      heading: "Transform Your Space with Quality Furniture",
      description:
        "Elevate your living space with our stylish and comfortable furniture. From cozy sofas to elegant dining sets, we have the perfect pieces to suit your taste and lifestyle.",
    },
  ];

  return (
    <div className="pt-8 sm:pt-0 pb-12">
      <HeroSlider setisSlide={setisSlide} isSlide={isSlide}>
        {heroslidedata.map((slide, index) => {
          return (
            <div key={index} className="relative overflow-hidden max-h-[500px]">
            <img className={`${isSlide ? 'animate-scale-110' : ''} w-full `} src={slide.img} alt={slide.alt} />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
              <div className="absolute w-[80%] m-auto inset-0 flex flex-col text-center justify-center p-4 text-white z-10">
                <h1 className="font-primary uppercase tracking-widest  text-2xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">{slide.heading}</h1>
                <p className="text-xl hidden tablet:block">{slide.description}</p>
              </div>
            </div>
          );
        })}
      </HeroSlider>
    </div>
  );
};

export default Hero;
