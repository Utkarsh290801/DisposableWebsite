import React from "react";
import "./AboutUs.css";
import { Link } from "react-scroll";
export default function AboutUs() {
  return (
    <div className="about-contanier" id="aboutus">
      <div className="about-title">
        <div className="about-title-heading">
          About Us
          <div className="about-title-description">
            Why choose us ?<div className="border-image"></div>
          </div>
        </div>
      </div>
      <div className="about-grandparent">
        <div className="about-parent">
          <div className="about-picture-background">
            <div className="about-picture ">
              Web-X takes a block-oriented approach to building a web pages and
              websites. What this is means is that <b>"Web-X"</b>. Web-X means{" "}
              <b>"We Built with extra features." </b>It provides the user with a
              section of pre-designed blocks, such as container, content
              sections, tab, map, templates, images etc. which are combined onto
              a canvas to create a fully functional web pages.
              <br />
              <br />
              This website aims to achieve hassle-free web pages development for
              begineers using simple and very easy-to-use darg & drop features.
              Using this website, webmasters can develop a very efficient,
              interactive, and secure webpages instantly in a few clicks and
              create a temporary websites which is dispose some amount of time.
              <br />
              <br />
              The main objective of the project on the Disposable Website is to
              build an application without using coading knowledge. Create a
              temporary website that is disposed automatically when its purpose
              is done. The web pages which is developed all are responsive. This
              project is totally built at the administrative end and thus only
              the administrator is guranteed access. The project of project is
              to build an application project is to reduce the manual work to
              write code to develop the website.
            </div>
          </div>

          <div className="about-details">
            <span className="description">
              It is a No-Code platform. A platform for creating a temporary
              website. This application is designed using{" "}
              <b> MERN Technology.</b> This project uses <b>React Framework </b>
              and hence the code complexity of this project is simplified and
              reduced. It created a single-page application.
            </span>
            <div className="about-details-name">
              <span className="about-hilighted-text">
                <h2>Features</h2>
              </span>
              <span className="about-skills">
                <ul>
                  <li>You don't have to code.</li>
                  <li>Block Approach</li>
                  <li>Drag n drop Functionality</li>
                  <li>Responsive</li>
                  <li>PWA (Progressive Web App)</li>
                  <li>Preview & Publish</li>
                  <li>Contact To Design</li>
                  <li>Automatically Dispose</li>
                </ul>
              </span>
            </div>

            <div className="about-options">
              <Link
                to="contactme"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                <button className="about-btn about-primary-btn"> Pricing </button>
              </Link>
              <a
                href="https://drive.google.com/file/d/1yc1A5zE1JZR23aE_APqFzhmjNm_YxUBy/view?usp=share_link"
                download="https://drive.google.com/file/d/1yc1A5zE1JZR23aE_APqFzhmjNm_YxUBy/view?usp=share_link"
              >
                <button className="about-btn highlighted-btn">Documentation</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
