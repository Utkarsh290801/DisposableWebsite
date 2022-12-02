import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import home from "assets/istockphoto-516856080-170667a.jpg";
// import home from "assets/pink-.jpg";
// import home from "assets/banner-bg.png";
// import home from "assets/watercolor6.jpg";
// import home from "./assets/images.jpeg";
// import play from "assets/play.png";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation } from "./animation";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Milestones from "./Milestones";
import Blog from "./Blog";
import Pricing from "./Pricing";
import Video from "./Video";
import Testimonials from "./Testimonials";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const HomePage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Disposable Website", "Temporary Website", "Websites"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <Section id="home">
      <Navbar />
      <motion.div
        className="home"
        variants={homeAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <span className="tagline">Welcome in Web-X</span>
          <div className="">
            {/* <h1>Blossoms Parlour</h1> */}

            <h1>
              {`A Platform for creating a`}{" "}
              <span
                className="txt-rotate"
                dataPeriod="1000"
                data-rotate='[ "Disposable Website", "Temporary Website", "Websites" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
          </div>
          <div className="subTitle">
            <p>
              It is a No-Code platform. Here you can build the application
              without using coding knowledge.Web-X is a super easy and simple
              website builder application - just drag-n-drop site elements to
              your page, add content, and style it to look the way you like.
              Here, you create Temporary Websites.
            </p>
          </div>
          {/* <img src={play} alt="Play Button" /> */}
        </div>
      </motion.div>
      {/* <motion.div
        className="info"
        variants={homeInfoAnimation}
        transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        
      
      </motion.div> */}
      <Services />
      <Portfolio />
      <Milestones />
      <Blog />
      <Video />
      <Pricing />
      <Testimonials />
      {/* <Skills/> */}
      <Contact />
      <Footer />
      <ScrollToTop />{" "}
    </Section>
  );
};

// background: url(${home}) no-repeat center;
const Section = styled.section`
  background: url() no-repeat center;

  min-height: 100vh;

  background-size: cover;
  position: relative;
  .home {
    height: 100%;

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color: black;
      gap: 1.2rem;
      margin-top: 5rem;
      padding-left: 10rem;

      h1 {
        font-weight: 800;
        font-size: 3.5rem;
        line-height: 5.3rem;
      }
      .tagline {
        font-weight: 800;
        letter-spacing: 0.8px;
        padding: 8px 10px;
        background: linear-gradient(
          90.21deg,
          rgba(170, 54, 124, 0.5) -5.91%,
          rgba(74, 47, 189, 0.5) 111.58%
        );
        border: 1px solid rgba(255, 255, 255, 0.5);
        font-size: 20px;
        // margin-bottom: 16px;
        display: inline-block;
      }
      .txt-rotate > .wrap {
        border-right: 0.08em solid #666;
      }
      .subTitle {
        p {
          width: 100%;
          margin-bottom: 2rem;
          font-weight: 300;
          font-size: 1.3rem;
        }
      }
    }
  }
  .info {
    position: absolute;
    bottom: -6rem;
    right: 0;
    background-color: var(--secondary-color);
    padding: 4rem;
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      color: black;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 2rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 4rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
  }
`;

export default HomePage;
