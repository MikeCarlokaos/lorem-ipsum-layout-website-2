import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const genericHamburgerLine = `h-1 w-8 my-0.5 rounded-full bg-stone-200 transition ease transform duration-300`;
  const [navBg, setNavBg] = useState("transparent");

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const listenScrollEvent = () => {
    window.scrollY > 20 ? setNavBg("#1c191780") : setNavBg("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <section className="fixed z-30 top-0 left-0 w-full h-20 text-stone-100">
      <nav
        style={{
          backgroundColor: navBg,
          transition: "all 1s",
        }}
        className="relative w-full h-full flex justify-between items-center px-5 py-5 bg-transparent backdrop-blur-sm md:static"
      >
        <div className="w-full h-full">
          <HashLink smooth to="/#home">
            <h1 className="w-full h-full text-3xl font-bold uppercase whitespace-nowrap">
              losum ipsum
            </h1>
          </HashLink>
        </div>
        <div className="w-full h-full flex justify-end items-center md:hidden">
          <button
            className="flex flex-col h-12 w-12 rounded justify-center items-center group "
            onClick={handleMenu}
          >
            <div
              className={`${genericHamburgerLine} ${
                openMenu
                  ? "rotate-45 translate-y-2 opacity-70 group-hover:opacity-100"
                  : "opacity-90 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                openMenu ? "opacity-0" : "opacity-80 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                openMenu
                  ? "-rotate-45 -translate-y-2 opacity-70 group-hover:opacity-100"
                  : "opacity-70 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>

        <div
          className={`absolute -bottom-20 left-0 w-full h-full md:block md:static ${
            openMenu ? "" : "hidden"
          }`}
        >
          <ul className="w-full h-60 flex flex-col items-center gap-5 pt-5 font-semibold bg-stone-900/80  whitespace-nowrap md:flex-row md:gap-10 md:h-full md:bg-transparent md:pt-0">
            <li className="ease-in-out duration-150 border-stone-300 hover:border-b-2 active:text-black">
              <HashLink smooth to="/#about" className="w-full h-full">
                Who are we
              </HashLink>
            </li>
            <li className="ease-in-out duration-150 border-stone-300 hover:border-b-2 active:text-black">
              <HashLink smooth to="/#services" className="w-full h-full">
                What we offer
              </HashLink>
            </li>
            <li className="ease-in-out duration-150 border-stone-300 hover:border-b-2 active:text-black">
              <HashLink smooth to="/#contact" className="w-full h-full">
                Contact us
              </HashLink>
            </li>
            <li className="">
              <HashLink
                smooth
                to="/#contact"
                className="w-full h-full bg-stone-500 rounded-full p-4 hover:bg-stone-500 active:bg-stone-900 md:bg-stone-800"
              >
                Get an estimate
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
