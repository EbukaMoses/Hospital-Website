import React from "react";
import Back from "./../Common/Back/Back";
import img from "/images/hero.jpg";
// import Services from './../Home/Services/Services';


const Services = () => {
  return (
    <div>
      <Back name="Our Services" title="How We Serve You Better" cover={img} />
      <Services />
    </div>
  );
};

export default Services;
