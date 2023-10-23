import React from "react";
import { HashLink } from "react-router-hash-link";
import SlideCarousel from "../../../components/SlideCarousel";
import slides from "../../../data/slides";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen">
      <div>
        <SlideCarousel slides={slides} />
      </div>
      <div className="absolute z-10 inset-0 w-full h-full bg-gradient-to-br from-stone-200/10 via-stone-600/70 to-stone-800 blur"></div>
      <div className="absolute z-20 inset-0 w-full h-full flex items-center justify-center p-10 md:pt-20">
        <div className="text-white w-[98vw] h-96 flex flex-col items-center justify-center gap-10 p-5 md:w-96">
          <div className="w-full flex flex-col items-center md:w-[60vw]">
            <div className="w-full p-10 border-t-8 border-l-8 border-white rounded-3xl">
              {/* border left and top with h3 on top right corner */}
            </div>

            <h1 className="text-center text-5xl font-bold capitalize whitespace-nowrap md:text-6xl">
              lorem ipsum
            </h1>

            <div className="w-full p-10 border-b-8 border-r-8 border-white rounded-3xl">
              {/* border right an bottom with */}
              <h3 className="text-2xl text-end ">upholstery</h3>
            </div>
          </div>
          <div className="flex items-center justify-center bg-stone-900 px-6 py-4 rounded-xl">
            <HashLink smooth to="/#about">
              Get to know us
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
