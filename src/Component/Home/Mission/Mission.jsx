import React from "react";
import "./Mission.css";
import MissionCard from "./MissionCard";
import Heading from './../../Common/Heading';

const Mission = () => {
  return (
    <>
      <section className="mission padding">
      <Heading title />
        <div className="container flex">
          <MissionCard
            title="Mission"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit mollitia asperiores, ratione doloremque, animi modi ducimus, ab sed iste voluptas rem a suscipit beatae fugiat saepe ipsum? Sint minima laborum praesentium ipsum dignissimos fuga voluptatibus consequatur. Id reprehenderit similique, sed rem optio eaque eius commodi molestiae, veritatis provident veniam."
          />
          <MissionCard
            title="Vision"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit mollitia asperiores, ratione doloremque, animi modi ducimus, ab sed iste voluptas rem a suscipit beatae fugiat saepe ipsum? Sint minima laborum praesentium ipsum dignissimos fuga voluptatibus consequatur. Id reprehenderit similique, sed rem optio eaque eius commodi molestiae, veritatis provident veniam."
          />
        </div>
      </section>
    </>
  );
};

export default Mission;
