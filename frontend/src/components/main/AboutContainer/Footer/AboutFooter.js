import React from "react";
import "./AboutFooter.css";
import { Link } from "react-scroll";
import logo from "../assets/Home/webx.png";
import {  NavLink, useNavigate } from "react-router-dom";
const AboutFooter = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 text-justify col-lg-10 mx-auto">
            <div className="row">
              <div className="col-12  col-lg-5">
                <a
                  href="/home"
                  className="brand"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "1.9rem",
                    // textTransform: "uppercase",
                  }}
                >
                  <img src={logo} alt="logo" style={{ height: "45px" }} />
                  &nbsp;Web-X
                </a>
                <br />
                <br />
                <ul>
                  This website aims to achieve hassle-free web pages development
                  for begineers using simple and very easy-to-use darg & drop
                  features. Using this website, webmasters can develop a very
                  efficient, interactive, and secure webpages instantly in a few
                  clicks and create a temporary websites which is dispose some
                  amount of time.
                </ul>
              </div>
              <div className="col-12 text-center col-lg-2">
                <h3>Important Links</h3>
                <br />
                <ul>
                  <li>
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={10}
                      duration={500}
                    >
                      home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="aboutme"
                      spy={true}
                      smooth={true}
                      offset={-5}
                      duration={500}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="resume"
                      spy={true}
                      smooth={true}
                      offset={10}
                      duration={500}
                    >
                      Builder
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="contactme"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                    >
                     Feedback
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-12 text-center col-lg-4">
                <h3>contact info</h3>
                <br />
                <br />
                <ul>
                  <li>+91 6386406135</li>
                  <li>testproject2629@gmail.com</li>
                </ul>
              </div>
              <div className="col-12 text-center col-lg-1">
                <h3>Social Links</h3>
                <br />
                <ul>
                  <li>
                    <NavLink to="">Instagram</NavLink>
                  </li>
                  <li>
                    <NavLink to="">YouTube</NavLink>
                  </li>
                  <li>
                    <NavLink to="">LinkedIn</NavLink>
                  </li>
                  <li>
                    <NavLink to="">Github</NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="mt-3">
              <p className="main hero para text-center width=100">
                copyright @ 2023 Web-X. All Rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AboutFooter;
