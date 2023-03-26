import React from "react";
import Typical from "react-typical";
import {Link} from "react-scroll";
import "./Profile.css";


export default function Profile() {
  return (
    <div className="profile-contanier">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            {/* <div className="colz-icon">
              <a href="https://www.linkedin.com/in/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://github.com/>
                <i className="fa fa-github"></i>
              </a>
            </div> */}
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hi, Welcome to <span className="hilighted-text">Web-X</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "No Code Platform 🔴",
                    1500,
                    "Drag & Drop Web Builder 💻",
                    1500,
                    "Build Your Own Website 👩🏻‍💻",
                    1500,
                    "Create a Temporary Website 📝",
                    1500,
                 
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
               Web-X is a drag & drop Web Builder which is built with GrapesJs.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <Link to="contactme" spy={true} smooth={true} offset={50} duration={1000}>
            <button className="about-btn about-primary-btn">Feedback</button></Link>
            <a href="https://drive.google.com/file/d/1yc1A5zE1JZR23aE_APqFzhmjNm_YxUBy/view?usp=share_link" download="">
              <button className="about-btn highlighted-btn"> Documentation </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
