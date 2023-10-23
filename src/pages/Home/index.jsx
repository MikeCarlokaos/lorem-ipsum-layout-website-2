import React from "react";
import Navbar from "../../features/Navbar";
import Hero from "../../features/Home/Hero";
import About from "../../features/Home/About";
import Services from "../../features/Home/Services";
import Contact from "../../features/Home/Contact";
import Footer from "../../features/Footer";

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
