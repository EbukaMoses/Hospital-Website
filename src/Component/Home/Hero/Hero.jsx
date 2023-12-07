import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero_text">
          <h1>Seraphic Hospital</h1>
          <p>
            Kelina Hospital is an Endoscopic and Laser Surgery specialist
            hospital with focus on Minimal Access Surgeries.
          </p>
          <div className="hero_button">
            <a href="/contact" class="btn btn_bg btn-primary">
              About Us
            </a>
            <a href="/contact" class="btn btn_outline btn-primary">
              Facilities
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
