import React, { useEffect } from "react";
import aboutBg from "../../../assets/images/upholstery-about.jpg";
import aboutDots from "../../../assets/images/dots.png";
import buildingIcon from "../../../assets/icons/building.svg";
import locationIcon from "../../../assets/icons/location.svg";
import phoneIcon from "../../../assets/icons/phone.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const SubHero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="relative z-20 w-full h-full flex flex-col pt-5 items-center ">
      <div className="relative z-20 w-full flex justify-center py-16 px-10 overflow-hidden">
        <div
          data-aos="zoom-in-left"
          className="absolute z-10 top-10 left-0 w-72 h-56 bg-stone-200 rounded-tr-[4rem] rounded-bl-[4rem] animate-dribble md:w-[30rem] md:h-96"
        ></div>
        <div data-aos="zoom-in-right" className="relative z-20 px-5">
          <img
            src={aboutBg}
            alt="about"
            className="w-[60rem] min-w-60 h-96 rounded-tr-[5rem] rounded-bl-[5rem] md:h-[30rem]"
          />
        </div>
        <div
          data-aos="zoom-in-left"
          className="absolute bottom-0 left-0 animate-slide"
        >
          <img
            src={aboutDots}
            alt="dots"
            className="w-60 h-60 md:w-96 md:h-96"
          />
        </div>
      </div>
      <div className="w-full py-5 px-10">
        <ul className="w-full flex flex-col items-center justify-center gap-5 md:flex-row">
          <li
            data-aos="fade-up"
            className="w-80 h-60 bg-stone-200 shadow-inner shadow-stone-700 rounded-b-2xl"
          >
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full h-full flex flex-col justify-center items-center px-10 gap-2"
            >
              <div className="absolute inset-0 h-0.5 bg-stone-800 rounded-b-2xl transition-all duration-[250ms] ease-out group-hover:h-full"></div>
              <img
                src={buildingIcon}
                alt="building"
                className="relative w-20 h-20 group-hover:invert"
              />
              <span className="relative text-center text-xl font-bold capitalize group-hover:text-white">
                lorem ipsum
              </span>
            </a>
          </li>
          <li
            data-aos="fade-up"
            className="w-80 h-60 bg-stone-200 shadow-inner shadow-stone-700 rounded-b-2xl"
          >
            {" "}
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full h-full flex flex-col justify-center items-center px-10 gap-2"
            >
              <div className="absolute inset-0 h-0.5 bg-stone-800 rounded-b-2xl transition-all duration-[250ms] ease-out group-hover:h-full"></div>
              <img
                src={locationIcon}
                alt="location"
                className="relative w-20 h-20 group-hover:invert"
              />
              <span className="relative text-center text-xl font-bold capitalize group-hover:text-white">
                mount lebanon, pennsylvania 15228
              </span>
            </a>
          </li>
          <li
            data-aos="fade-up"
            className="w-80 h-60 bg-stone-200 shadow-inner shadow-stone-700 rounded-b-2xl"
          >
            {" "}
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full h-full flex flex-col justify-center items-center px-10 gap-2"
            >
              <div className="absolute inset-0 h-0.5 bg-stone-800 rounded-b-2xl transition-all duration-[250ms] ease-out group-hover:h-full"></div>
              <img
                src={phoneIcon}
                alt="phone"
                className="relative w-20 h-20 group-hover:invert"
              />
              <span className="relative text-center text-xl font-bold capitalize group-hover:text-white">
                (000) 000-000
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SubHero;
