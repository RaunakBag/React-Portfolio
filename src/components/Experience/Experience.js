import React from 'react'
import './Experience.css'

const Experience = () => {
  return (
    <div id='experience' className='experience'>
    <div className='d-flex justify-content-center my-5'>
      <h1>experience</h1>
    </div>
    <div className='container experience-wrapper'>
      <div className='timeline-block timeline-block-left'>
        <div className='marker'></div>
        <div className='timeline-content'>
          <h3>03/2020 - 09/2020</h3>
          <p>
            Research Analyst&emsp;&ensp;
           Globsyn 3rd Life&emsp;&ensp;Kolkata,West Bengal
          </p>
          <ul>
            <li>
              Worked on Video labeling
            </li>
            <li>
              Worked on Picture and Video annotations
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Experience
