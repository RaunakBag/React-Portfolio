import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faHtml5,
  faCss3,
  faJs
} from '@fortawesome/free-brands-svg-icons'
import './Skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills'>
      <h1 className='py-5'>my skills</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faHtml5} size='2x' />
              </div>
              <h3>HTML</h3>
              <p>
              HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation.
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faCss3} size='2x' />
              </div>
              <h3>CSS</h3>
              <p>
              Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faJs} size='2x' />
              </div>
              <h3>Javascript</h3>
              <p>
              A high-level, just-in-time compiled & multi-paradigm language.
                Alongside HTML and CSS, it is one of the core technologies of
                the World Wide Web.
              </p>
            </div>
          </div>
          {/* - */}
          <div className='col-lg-3 col-md-6 col-sm-6'>
            <div className='box'>
              <div className='circle'>
                <FontAwesomeIcon className='icon' icon={faReact} size='2x' />
              </div>
              <h3>React</h3>
              <p>
              React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills