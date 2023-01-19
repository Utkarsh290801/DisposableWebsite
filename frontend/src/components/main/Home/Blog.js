import React from "react";
import styled from "styled-components";
import play from "./assets/play.png";
import feature1 from "./assets/editor.gif";
import feature2 from "./assets/temps-3.jpg";
// import feature2 from "./assets/maker.jpg";
// import feature3 from "./assets/preview.png";
import feature3 from "./assets/p.jpg";
import Title from "./Title";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { blogsAnimation } from "./animation";

function Blog() {
  const [element, controls] = useScroll();
  const blogsData = [
    {
      title: "You don't have to code",
      type: "Drag-n-Drop",
      description:
        "Web-X is a super easy and simple website builder application - just drag-n-drop site elements to your page, add content, and style it to look the way you like.  ",
      image: feature1,
    },
    {
      title: "Make your site unique      ",
      type: "Modify a Template",
      description:
        "Web-X offers a huge collection of website blocks, templates. You can pick one of free templates your future website will be based on. You are free to modify a website as you want: add pages, edit their titles, descriptions, change the look of site by using the visual inline editor and block parameters. Combine blocks from different themes to create a unique mix.    ",
      image: feature2,
    },
    {
      title: "Publish your website",
      type: "Preview & Publish",
      description:
        " You have had a nice preview of your site in the app switching between mobile, tablet and desktop views (yes, it's possible, too). It's time to publish the the ready website to your local folder and to GitHub Pages.        ",
      image: feature3,
    },
  ];
  return (
    <Section id="blog" ref={element}>
      <Title value="Feature" />
      <div className="blogs">
        {blogsData.map(({ title, type, description ,image}) => {
          return (
            <motion.div
              className="blog"
              variants={blogsAnimation}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
              <div className="">
                <img className="image" src={image} alt="Feature" />
              </div>
              <div className="title">
                <h3>{title}</h3>
              </div>
              <span className="type">{type}</span>
              <div className="description">
                <p>{description}</p>
              </div>
            </motion.div>
          );
        })}
              {/* <div className="more">
                <img src={play} alt="Play" />
                <span>Read More</span>
              </div> */}
      </div>
    </Section>
  );
}

// background: url(${home}) no-repeat center center;
const Section = styled.section`
  min-height: 100vh;
  position: relative;
  .blogs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    margin: 5rem 15rem;
    .blog {
      display: flex;
      flex-direction: column;
      
      gap: 1rem;
      .image {
        height: 13rem;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .title {
        h3 {
          color: var(--secondary-color);
          font-size: 1.5rem;
        }
      }
      .type {
        color: var(--primary-color);
        font-weight: bolder;
        text-transform: uppercase;
      }
      .description {
        height: 10rem;
        color: var(--primary-color);
      }
      .more {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        span {
          letter-spacing: 0.1rem;
          text-transform: uppercase;
          color: var(--primary-color);
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem 0;
    .blogs {
      padding: 0 2rem;
      grid-template-columns: 1fr;
      margin: 0 1rem;
    }
  }
`;

export default Blog;
