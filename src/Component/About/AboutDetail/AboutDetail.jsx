import React from "react";
import "./AboutDetail.css";
import image from "/images/hero.jpg";

const AboutDetail = () => {
  return (
    <>
      <section className="AboutDetail padding">
        <div className="container flex">
          <div className="img">
            <img src={image} alt="" />
          </div>
          <div className="details">
            <h2>About Seraphic Hospital</h2>
            <p>
              Kelina Hospital opened in Abuja in February 2008. Lagos branch
              became necessary because of the high volume of patients that were
              visiting Abuja from Lagos in preference for the specialized
              services Kelina was offering. The hospital’s core values recognize
              the principle that helping our fellow man is service to God, and
              we commit to this service knowing that each patient satisfactorily
              cared for is a testimony to the effectiveness of our stewardship.
              This is our motivation for joining hands with you in ‘taking your
              health to heart’.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutDetail;
