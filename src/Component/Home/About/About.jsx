import React from "react";
import "./About.css";
import Heading from "./../../Common/Heading";

const About = () => {
  return (
    <>
      <section className="Habout padding">
        <div className="container">
          <div className="left">
            <img src="/images/abt.jpg" alt="" />
            <img src="/images/abt2.jpg" alt="" />
          </div>

          <div className="Hright">
            <Heading title="Seraphic Hospital" subtitle="Welcome to" />
            <p>
              Kelina Hospital is a Surgical Hospital where a patient can have a
              major surgery today and go home same day or less than 24 hours
              after surgery. Surgery is our primary work in Kelina. Our theatres
              have the latest brands of equipment from the best companies in the
              world. We have been consistently selected above other hospitals by
              foreign medical missions in Nigeria.
            </p>
            <a href="/services" className="btn_bg">
              Our Services
            </a>
          </div>
        </div>
        <br />
        <br />
      </section>
    </>
  );
};

export default About;
