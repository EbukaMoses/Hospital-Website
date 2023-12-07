import React from 'react'

const MissionCard = ({title, text}) => {
  return (
    <>
        <section className="missioncard flex">
              <div className="card">
                  <h1>{title}</h1>
                  <p>{text}</p>
              </div>
        </section>
    </>
  )
}

export default MissionCard