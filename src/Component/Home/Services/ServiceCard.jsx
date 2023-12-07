import React from "react";

const ServiceCard = ({ icon, title, text }) => {
  return (
    <>
      {/* <div className="servicecard "> */}
      <div className="box grid3">
        <div>
          <span className="icon">{icon}</span>
          <h3>{title}</h3>
          <p>{text.slice(0, 150)}</p>
          <a href="">
            Learn More&nbsp; <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ServiceCard;
