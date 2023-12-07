import React from "react";

const DoctorsCard = () => {
  return (
    <>
      <div className="doctorCard padding">
        <div className="container">
          <div className="personCard">
            <img src="/images/victor.jpg" alt="" />
            <div className="personDetail">
              <h2>Dr.NAME</h2>
              {/* <p> */}
                <span style={{ color: "#05386B" }}> Dr. NAME.</span>
              {/* </p> */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                veritatis recusandae quos quidem earum quis inventore cum sint
                deserunt. Perferendis!
              </p>
            </div>
          </div>
          <div className="personCard">
            <img src="/images/victor.jpg" alt="" />
            <div className="personDetail">
              <h2>Dr.NAME</h2>
              {/* <p> */}
                <span style={{ color: "#05386B" }}> Dr. NAME.</span>
              {/* </p> */}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                veritatis recusandae quos quidem earum quis inventore cum sint
                deserunt. Perferendis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorsCard;
