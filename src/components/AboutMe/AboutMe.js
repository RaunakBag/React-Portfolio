import React from 'react'
import './AboutMe.css'
import  CV from './CV.pdf'
import Image from './Image.jpeg'

const AboutMe = () => {
  return (
    <div id='about' className='container py-5'>
      <div className='row'>
        <div className='col-lg-6 col-xs-12'>
          <div className='photo-wrap mb-5'>
            <img className='profile-img' src={Image} alt='Desmond J. Pringle' />
          </div>
        </div>
        <div className='col-lg-6 col-xs-12'>
          <h1 className='about-heading'>about me</h1>
          <p>
          Hello, I am a Frontend Web Developer seeking a new challenge in
            web development. I love to create and think outside the box when it
            comes to designing web sites.
          </p>
          <a href={CV} download="CV.pdf">
            {" "}
            <button className="btn btn-info"> Get my Resume</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
