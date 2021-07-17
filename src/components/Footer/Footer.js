import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Kolkata, West Bengal</p>
            </div>
            <div className="d-flex">
              <a href="tel:6290084083">6290084083</a>
            </div>
            <div className="d-flex">
              <a href="mailto:raunakbag97@gmail.com">raunakbag97@gmail.com</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" className="footer-nav">
                  Home <span className="sr-only">(current)</span>
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="about"
                  offset={-110}
                  className="footer-nav"
                >
                  About Me
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="skills"
                  offset={-110}
                  className="footer-nav"
                >
                  Skills
                </Link>
              </div>
              <div className="col">
                <Link
                  smooth={true}
                  to="experience"
                  offset={-110}
                  className="footer-nav"
                >
                  Experience
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="portfolio"
                  offset={-110}
                  className="footer-nav"
                >
                  Portfolio
                </Link>
                <br />
                {/* <Link
                  smooth={true}
                  to="contact"
                  offset={-110}
                  className="footer-nav"
                >
                  Contact Me
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="social-container">
              <a
                href="https://github.com/RaunakBag"
                className="github social"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.facebook.com/raunak.bag1/"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://twitter.com/raunakbag"
                className="twitter social"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/raunak-bag-3b0a69153/"
                className="linkedin social"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            <p className="lastpart">
              Copyright&copy;{new Date().getFullYear()}&nbsp;SC3 | All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;