import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import Particles from 'react-particles-js';
import "./Header.css";

function Header() {
  return (
    <div id="home" className="header-wrapper">
     <Particles
        className='particles-canvas'
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 6,
                color: '#f9ab00'
              }
            }
          }
        }}
      />
      <div className="main-info">
        <h1>Raunak Bag</h1>
        <h1>FrontEnd Web Developer</h1>
        <Typed
          className="typed-text"
          strings={["HTML", "Javascript", "CSS", "React", "React Native"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link
          smooth={true}
          to="contact"
          offset={-110}
          className="btn-main-offer"
        >
          contact me
        </Link>
      </div>
    </div>
  );
}

export default Header;
