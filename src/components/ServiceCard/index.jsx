import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ services }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-5">
      {services.map((service) => (
        <div
          data-aos="zoom-in-right"
          key={service.id}
          className="w-96 h-[120vh] bg-stone-200 border-4 border-stone-800 md:w-[80vw] md:flex md:h-[80vh]"
        >
          <div className="w-full h-2/5 md:w-1/2 md:h-full">
            <img
              src={service.image}
              alt={service.alt}
              className="w-full h-full border-b-4 border-stone-800 md:border-b-0"
            />
          </div>
          <div className="flex flex-col items-center gap-2 px-5 md:w-1/2 md:justify-center">
            <h2 className="py-5 text-xl font-semibold capitalize">
              {service.title}
            </h2>
            <p className="text-justify">{service.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
