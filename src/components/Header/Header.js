import React from 'react'
import Typed from 'react-typed'
// import { Link } from 'react-scroll'
import './Header.css'

const Header = () => {
  return (
    <div id='home' className='header-wrapper'>
      <div className="main-info">
        <h1>Raunak Bag</h1>
        <h1>FrontEnd Web Developer</h1>
        <Typed
          className="typed-text"
          strings={["HTML", "Javascript", "CSS", "React", "React Native"]}
          typeSpeed={45}
          backSpeed={60}
          loop
        />
        {/* <Link
          smooth={true}
          to="contact"
          offset={-110}
          className="btn-main-offer"
        >
          contact me
        </Link> */}
      </div>
    </div>
  )
}

export default Header
