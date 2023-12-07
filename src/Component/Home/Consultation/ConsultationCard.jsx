import React from 'react'

const ConsultationCard = ({icon, title, text}) => {
  return (
    <>
        <div className="card flex2">
              <span>{ icon}</span>
              <div>
                  <h4>{ title }</h4>
                  <p>{ text }</p>
              </div>
        </div>   
    </>
  )
}

export default ConsultationCard