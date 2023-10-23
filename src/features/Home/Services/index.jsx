import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ServiceCard from "../../../components/ServiceCard";
import services from "../../../data/services";
import serviceBg from "../../../assets/images/upholstery-bg.jpg";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section
      id="services"
      style={{ backgroundImage: `url(${serviceBg})` }}
      className="relative z-10 w-full h-[415vh] bg-cover bg-center bg-fixed md:h-[300vh]"
    >
      <div className="absolute inset-0 w-full h-[415vh] px-10 py-20 flex flex-col items-center gap-10 bg-black/50 md:h-[300vh]">
        <div
          data-aos="zoom-in-right"
          className="w-full flex flex-col justify-center items-center gap-5 py-10"
        >
          <h1 className="text-4xl text-center text-stone-200 font-bold">
            What we offer?
          </h1>
          <div data-aos="zoom-in-right" className="flex gap-3">
            <div className="w-20 h-0.5 bg-amber-500"></div>
            <div className="w-5 h-0.5 bg-stone-200"></div>
          </div>
        </div>
        <div className="">
          <ServiceCard services={services} />
        </div>
      </div>
    </section>
  );
};

export default Services;
