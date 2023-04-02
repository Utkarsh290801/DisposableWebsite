import React, { useEffect, useState } from "react";
import styled from "styled-components";
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
import { UserContext } from "../../user/UserContext";
import Contact from "./Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const HomePage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Disposable Website", "Temporary Website", "Websites"];
  const period = 2000;
  const navigate = useNavigate();

  const { loggedIn, setLoggedIn } = React.useContext(UserContext);


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
        <div className="row">
          <div className="content">
            <span className="tagline">Welcome in Web-X</span>
            <div className="">
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
              <ul>
              {!loggedIn ? (
            <li className="">
              <Button
                type="submit"
                variant="outlined"
                color="warning"
                size="large"
                href="/user/webbuild"
                sx={{
                  borderRadius: "25px",
                  color: "#ed6c02",
                  border: "2px solid #ed6c02",
                  transition: "transform .2s ease-in-out",
                  ":hover": {
                    transform: "scale(1.04)",
                    color: "white",
                    bgcolor: "#ed6c02",
                  },
                }}
              >
                Try for free
              </Button>
            </li>
          ) : (
              
            <Button
            type="submit"
            variant="outlined"
            color="secondary"
            size="large"
            href="/main/contactus"
           
            sx={{
              borderRadius: "25px",
              color: "#9c27b0",
              border: "2px solid #9c27b0",
              transition: "transform .2s ease-in-out",
              marginLeft: "20px",
              ":hover": {
                transform: "scale(1.04)",
                color: "white",
                bgcolor: "#9c27b0",
              },
            }}
          >
            Talk to us
          </Button>
          )}
        </ul>
          
            </div>
            {/* <img src={play} alt="Play Button" /> */}
          </div>

          <div className="col-md-4 mt-5">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "480px",
                height: "100%",
                float: "right",
                borderBottom: " 3px solid black",
              }}
            >
              <source
                src="https://cdn.builder.io/o/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4b04451f25e748e49e31c1c1eaea185f%2Fcompressed?apiKey=YJIGb4i01jvw0SRdL5Bt&token=4b04451f25e748e49e31c1c1eaea185f&alt=media&optimized=true"
                type="video/mp4"
              />
            </video>
          </div>
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
      <Contact />
      <Footer />
      <ScrollToTop />{" "}
    </Section>
  );
};

// background: url(${home}) no-repeat center;
//
const Section = styled.section`
  min-height: 100vh;
  // background: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);

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
        font-weight: 600;
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
        border-radius: 4px;
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
          font-weight: 400;
          font-size: 1.1rem;
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
