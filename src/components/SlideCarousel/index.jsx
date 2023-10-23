import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SlideCarousel = ({ slides }) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    cssEase: "linear",
  };

  return (
    <section className="w-full h-screen">
      <Slider {...settings} className="w-full h-screen">
        {slides.map((slide) => (
          <div key={slide.id} className="w-full h-screen">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SlideCarousel;
