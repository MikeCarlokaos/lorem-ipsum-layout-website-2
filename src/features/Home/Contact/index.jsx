import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="contact" className="w-full h-full bg-stone-100 md:h-screen">
      <div className="w-full h-full flex flex-col p-10 divide-y-4 divide-stone-800 md:flex-row md:divide-y-0 md:divide-x-4">
        <div
          data-aos="zoom-in-right"
          className="w-full h-full flex flex-col items-center py-28 gap-5 md:w-1/2 md:py-10 md:gap-10"
        >
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <h1 className="text-4xl text-center font-bold">
              Get in touch with us
            </h1>
            <div className="flex gap-3">
              <div className="w-20 h-0.5 bg-amber-800"></div>
              <div className="w-5 h-0.5 bg-black"></div>
            </div>
          </div>
          <div className="text-center py-5 text-lg font-semibold">
            <div>
              <h3>Feel free to stop by at our store</h3>
            </div>
            <div className="py-5 space-y-5">
              <p className="text-xl font-bold">
                Mount Lebanon, Pennsylvania 15228.
              </p>
              <p>open on weekdays 8am to 5pm</p>
            </div>
          </div>
          <div className="text-center space-y-5 text-lg font-semibold">
            <div>
              <h3>or contact us</h3>
            </div>
            <div>
              <a href="tel:+000000000" className="text-xl font-bold">
                000 000 000
              </a>
            </div>
            <div>
              <a href="mailto:" className="text-xl font-bold">
                email
              </a>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in-left"
          className="w-full h-full flex flex-col items-center md:w-1/2"
        >
          <h1 className="py-10 text-3xl text-center font-semibold capitalize">
            get a free estimate
          </h1>
          <form className="w-full flex flex-col gap-5 md:px-10">
            <input
              type="text"
              placeholder="Name*"
              className="px-5 py-2 rounded-lg border shadow-inner placeholder:text-md placeholder:font-semibold placeholder:text-black/60"
            />
            <input
              type="text"
              placeholder="Phone(optional)"
              className="px-5 py-2 rounded-lg border shadow-inner placeholder:text-md placeholder:font-semibold placeholder:text-black/60"
            />
            <input
              type="email"
              placeholder="Email*"
              className="px-5 py-2 rounded-lg border shadow-inner placeholder:text-md placeholder:font-semibold placeholder:text-black/60"
            />
            <textarea
              cols="30"
              rows="5"
              placeholder="Your message (Minimum 5 Characters)"
              className="px-5 py-2 rounded-lg border shadow-inner placeholder:text-md placeholder:font-semibold placeholder:text-black/60"
            ></textarea>
            <button
              type="submit"
              className="group relative p-2 w-32 self-center overflow-hidden bg-stone-300 text-lg shadow"
            >
              <div className="absolute inset-0 w-1.5 bg-stone-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative text-black text-lg font-semibold capitalize group-hover:text-white">
                send
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
