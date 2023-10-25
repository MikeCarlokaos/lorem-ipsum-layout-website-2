import React from "react";
import Navbar from "../../features/Navbar";
import Hero from "../../features/Home/Hero";
import About from "../../features/Home/About";
import Services from "../../features/Home/Services";
import Contact from "../../features/Home/Contact";
import Footer from "../../features/Footer";
import SubHero from "../../features/Home/SubHero";

const Home = () => {
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <About />
          <Services />
          <SubHero />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Home;
