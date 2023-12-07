import React from "react";
import "./Doctors.css";
import DoctorsCard from "./DoctorsCard";
import Back from "./../Common/Back/Back";
import img from "/images/hero.jpg";

const Doctors = () => {
  return (
    <>
      <Back name="Our Doctors" title="Know Who Serves you" cover={img} />
      <DoctorsCard />
    </>
  );
};

export default Doctors;
