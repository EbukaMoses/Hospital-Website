import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Consultation from "./Consultation/Consultation";
import Youtube from "./Youtube/Youtube";
import Mission from "./Mission/Mission";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Consultation />
      <Mission />
      <Youtube embedId="Pnd7OSSCmG4" />
    </>
  );
};

export default Home;
