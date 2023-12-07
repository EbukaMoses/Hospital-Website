import React from 'react'
import "./Consultation.css";
import ConsultationCard from './ConsultationCard';
import Heading from './../../Common/Heading';

const Consultation = () => {
  return (
    <>
      <section className="consultation padding">
        <Heading title="Routine Consultation" subtitle="Consultation" />
        <div className="container flex2">
          <div className="img"></div>

          <div className="boxes">
            <div className="flex2">
              <ConsultationCard
                icon={<i class="fa-solid fa-calendar-days"></i>}
                title="Monday - Sunday"
                text="24 Hours"
              />
              <ConsultationCard
                icon={<i class="fa-solid fa-calendar-days"></i>}
                title="Pharmacy"
                text="24 Hours"
              />
            </div>
            <div className="flex2 mtop">
              <ConsultationCard
                icon={<i class="fa-solid fa-calendar-days"></i>}
                title="Emergency"
                text="24 Hours"
              />
              <ConsultationCard
                icon={<i class="fa-solid fa-calendar-days"></i>}
                title="Laboratory"
                text="24 Hours"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Consultation