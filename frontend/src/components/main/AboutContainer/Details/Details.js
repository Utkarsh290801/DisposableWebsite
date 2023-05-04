import { React, useState } from "react";
import "./Details.css";
import {RxCounterClockwiseClock} from 'react-icons/rx'
import {FaGraduationCap} from 'react-icons/fa'
import {BsCodeSlash,BsGithub} from 'react-icons/bs'
import {IoDocumentAttachOutline} from 'react-icons/io5'
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
export default function Details() {
  const [tooggleState, setToggleState] = useState(1);
  const toogleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="resume-container" id="resume">
      <div className="resume-title">
        <div className="resume-title-heading">
          Details
          <div className="resume-title-description">
            My Project Details<div className="border-image"></div>
          </div>
        </div>
      </div>
      <div className="resume-bio-details">
        <div className="resume-tabs">
          <div className="tabs-header">
            <div
              className={tooggleState === 1 ? "active" : ""}
              onClick={() => toogleTab(1)}
            >
              {/* <i className="fa fa-graduation-cap"> Team Members</i> */}
              <FaGraduationCap/> Team Members
            </div>
            <div
              className={tooggleState === 2 ? "active" : ""}
              onClick={() => toogleTab(2)}
            >
                <RxCounterClockwiseClock/> Work History
            </div>
            <div
              className={tooggleState === 3 ? "active" : ""}
              onClick={() => toogleTab(3)}
            >
              <BsCodeSlash/> Technology Used
            </div>
            <div
              className={tooggleState === 4 ? "active" : ""}
              onClick={() => toogleTab(4)}
            >
              <IoDocumentAttachOutline/> Documentation
            </div>
            <div
              className={tooggleState === 5 ? "active" : ""}
              onClick={() => toogleTab(5)}
            >
            <BsGithub/> Commits
            </div>
          </div>

          <div className="tab-content">
            <div className={tooggleState === 1 ? "active" : ""}>
              <div className="work">

            <FaGraduationCap/>
              </div>
              <h2>Team Members</h2>
              <div className="education">
                <div className="row mt-5">
                  <div className="col-md-6">
                    <img
                      class="rounded-circle shadow-4-strong"
                      alt="avatar2"
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                      style={{ height: "100px", width: "100px" }}
                    />
                    <h3 className="mt-2">Utkarsh Arora</h3>
                    <p>Mern-Stack Developer</p>
                  </div>
                  <div className="col-md-6">
                    <img
                      class="rounded-circle"
                      alt="avatar1"
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
                      style={{ height: "100px", width: "100px" }}
                    />
                    <h3 className="mt-2">Mansha Tiwari</h3>
                    <p>Mern-Stack Developer</p>
                  </div>
                </div>
                <div className="one-line">
                  <h4>
                    Bachelor of Technology in{" "}
                    <b>Computer Science & Engineering</b>
                  </h4>
                  <span>2019-2023</span>
                </div>
                <div className="college">
                  B.N. College Of Engineering And Technology
                </div>
              </div>
            </div>

            <div className={tooggleState === 2 ? "active" : ""}>
              <div className="work">

            <RxCounterClockwiseClock/>
            </div>
              <h2>Work History</h2>
              <div className="one-line">
                <h3>Duration(5-Month)</h3>
              </div>
              <div className="college">
              The "Disposable Website" project was started on December 1, 2022, and completed on April 30, 2023, with a total duration of 5 months. During this period, we spent an estimated 500 hours working on the project, including planning, implementation, testing, and evaluation. We worked on the project primarily during weekdays and weekends, dedicating an average of 20 hours per week to the project.
<br/>
<br/>
The project was divided into several phases, including project planning, implementation, testing, and evaluation, each of which took a significant amount of time to complete. The project planning phase took approximately 2 weeks, during which we researched various website builder tools and defined the project scope and requirements. The implementation phase took the bulk of our time, lasting for approximately 12 weeks, during which we designed and developed the Web-X tool. The testing and evaluation phase took approximately 2 weeks, during which we tested the Website Builder tool using various methodologies and received feedback from users.
<br/>
<br/>
Overall, the duration of work done on the Website Builder project was significant, requiring a considerable amount of time and effort to complete. However, the skills and knowledge gained during the project, as well as the successful completion of the project, made it a valuable and rewarding experience.
              </div>
            </div>

            <div className={tooggleState === 3 ? "active" : ""}>
              <div className="work">
              <BsCodeSlash/> </div>
              <h2>Technology Used</h2>
              <div className="coding-container">
                <div className="display-skills">
                  <div className="division-1">
                    <div className="coding-skills">
                      <h4>React JS</h4>
                      <div className="progress">
                        <div className="python">
                          <span>95%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>Express JS</h4>
                      <div className="progress">
                        <div className="react">
                          <span>75%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>Node JS</h4>
                      <div className="progress">
                        <div className="javascript">
                          <span>96%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>HTML</h4>
                      <div className="progress">
                        <div className="html">
                          <span>89%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>CSS</h4>
                      <div className="progress">
                        <div className="css">
                          <span>70%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="division-2">
                    <div className="coding-skills">
                      <h4>Bootstrap</h4>
                      <div className="progress">
                        <div className="java">
                          <span>88%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>Material Ui</h4>
                      <div className="progress">
                        <div className="c">
                          <span>90%</span>
                        </div>
                      </div>
                    </div>

                    <div className="coding-skills">
                      <h4>Mongo DB</h4>
                      <div className="progress">
                        <div className="cplus">
                          <span>87%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={tooggleState === 4 ? "active" : ""}>
           <div className="work">
            <IoDocumentAttachOutline/>
           </div>
              <h2>Project Documentation</h2>

              <div className="project">
                <h4>Web-X</h4>
              </div>
              <div className="project-college">
                <span>
                  Technologies Used : Mern Stack
                  <br />
                </span>
                <div className="mt-3">
                  <div className="row mt-5" >
                    <div className="col-md-4">
                      <a
                        href="https://drive.google.com/file/d/1yc1A5zE1JZR23aE_APqFzhmjNm_YxUBy/view?usp=share_link"
                        download=""
                        target={"_blank"}
                      >
                        <button className="btn btn-outline-primary mb-3">
                          {" "}
                          Synposis{" "}
                        </button>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a
                        href="https://docs.google.com/presentation/d/1OymG0dWeD8tTwjkaIG9QZPuGpO-J16np/edit?usp=drivesdk&ouid=114676352264157476226&rtpof=true&sd=true"
                        download=""
                        target={"_blank"}
                      >
                        <button className="btn btn-outline-primary mb-3">
                          {" "}
                          Presentation{" "}
                        </button>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="" download="" target={"_blank"}>
                        <button className="btn btn-outline-primary mb-3">
                          {" "}
                          Report{" "}
                        </button>
                      </a>
                    </div>
                  </div>

                  {/* <iframe
                    src="https://drive.google.com/file/d/1yc1A5zE1JZR23aE_APqFzhmjNm_YxUBy/preview"
                    width="630"
                    height="770"
                    allow="autoplay"
                  ></iframe> */}
                </div>
              </div>

              {/* <div className="project">
                <h4>
                  Aditi-The Virtual Assistant
                  <a href="https://clck.ru/ouVYN">view</a>
                </h4>
                <span>
                  <a href="https://clck.ru/ouVYN"> view</a>
                </span>
              </div>
              <div className="project-college">
                <span>
                  Technologies Used : python, Tkinter, pyqt5
                  <br />
                </span>
                A Virtual Assistant ahich can perform a lot of task on Voice
                Commands or in User Input mode.
              </div> */}
            </div>

            <div className={tooggleState === 5 ? "active" : ""}>
              <div className="work">
                <BsGithub/>
              </div>
              <h2>Commits</h2>
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <h1
                  className="project-heading"
                  style={{ paddingBottom: "20px" }}
                >
                  Days I <strong className="purple">Code</strong>
                </h1>
                <GitHubCalendar
                  username="Utkarsh290801"
                  blockSize={15}
                  blockMargin={5}
                  // color="#c084f5"
                  fontSize={20}
                />
              </Row>
              {/* <div className="interest">
                <div className="dot">
                  <h4>Teaching</h4>
                </div>
              </div>
              <div className="interest-description">
                Apart from being tech devotee and a code essayist, I likewise
                love to teach people what I know simply because I believe in
                sharing.
              </div> */}

              {/* <div className="interest">
                <div className="dot">
                  <h4>Cycling</h4>
                </div>
              </div>
              <div className="interest-description">
                Cycling empowers me to determine delight and goes far in
                guaranteeing my general wellness safeguarding me from serious
                illnesses, for example, stroke, respiratory failure and gloom.
              </div> */}

              {/* <div className="interest">
                <div className="dot">
                  <h4>Trekking</h4>
                </div>
              </div>
              <div className="interest-description">
                Trekking develops my actual wellbeing monstrously, exploring the
                rich flora and fauna exploring local cultures and local food
                which energizes me the most.
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
