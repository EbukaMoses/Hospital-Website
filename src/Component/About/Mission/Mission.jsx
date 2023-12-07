import React from "react";
import "./Mission.css";
import MissionTable from "./MissionTable";

const Mission = () => {
  return (
    <>
      <div className="AboutMission padding">
        <div className="container flex2">
          <div className="left">
            <h1>Our Mission</h1>
            <p>
              The mission of Kelina Hospital is to promote, preserve, and
              restore individual and family health by providing expert medical
              and surgical care within a cordial and dignified environment.
            </p>

            <h1>Our Objectives</h1>
            {/* <div className="obj"> */}
            <div className="details">
              <i class="fa-solid fa1 fa-heart-pulse"></i>
              <p>
                To create and provide the highest quality of medical and
                surgical care available in Nigeria.
              </p>
            </div>
            <div className="details">
              <i class="fa-solid fa2 fa-lightbulb"></i>
              <p>
                To innovate, achieve optimal surgical success, fastest recovery
                times.
              </p>
            </div>
            <div className="details">
              <i class="fa-solid fa3 fa-users"></i>
              <p>
                To train and retrain a workforce with the highest level of
                expertise, motivation, job satisfaction, and patient service
              </p>
            </div>
            <div className="details">
              <i class="fa-solid fa4 fa-bed"></i>
              <p>
                To cultivate a practice environment that enhances professional
                care-giving and patient healing, and also explore technology to
                optimize operational efficiency.
              </p>
            </div>
            {/* </div> */}
          </div>
          <div className="right">
            <h1>Opening Hours</h1>
            <MissionTable title="Monday - Sunday" subtitle="24 hours" />
            <MissionTable title="Emergency" subtitle="24 hours" />
            <MissionTable title="Pharmacy" subtitle="24 hours" />
            <MissionTable title="Laboratory" subtitle="24 hours" />
            <h6>
              Staff taking taking care of patients in the main service areas are
              available within the hospital round the clock.
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
