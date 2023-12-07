import React from "react";
import Back from "./../Common/Back/Back";
import img from "/images/hero.jpg";
import AboutDetail from "./AboutDetail/AboutDetail";
import Mission from './Mission/Mission';

const About = () => {
  return (
    <>
      <Back name="About us" title="About Us - Who We Are?" cover={img} />
      <AboutDetail />
      <Mission />
    </>
  );
};

export default About;
