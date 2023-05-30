import React from "react";
import styled from "styled-components";
import service1 from "./assets/image.png" ;
import service2 from "./assets/contactus.jpg";
import service3 from "./assets/dispose.gif";
import play from "./assets/play.png";
import Title from "./Title";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { servicesAnimations } from "./animation";

function Services() {
  const [element, controls] = useScroll();

  const data = [
    {
      type: "PWA",
      text: "These options enable you to convert your website into a web application. By activating this feature, your website will function as a true Progressive Web Application, allowing users to install it on their devices.",
      image: service1,
    },
    {
      type: "Contact to Design",
      text: "You Can Contact us to Design a Webpages. Through a virtual chatbot, mail. Or a phone call.",
      image: service2,
    },
    {
      type: "Automatically Dispose",
      text: "Websites automatically dispose of or delete on their specified period of time, or the user can also delete them when its purpose is done",
      image: service3,
    },
  ];
  return (
    <Section id="services" ref={element}>
      <Title value="services" />
      <div className="services">
    
        {data.map(({ type, text, image }, index) => {
          return (
            <motion.div
              className="services__service"
              variants={servicesAnimations}
              animate={controls}
              transition={{
                delay: 0.03,
                type: "tween",
                duration: 0.8,
              }}
            >
              <div className="services__service__image">
                <img className="hg" src={image} alt="Service" />
              </div>
             
              <div className="services__service__title">
                <span>0{index + 1}</span>
                <h2>{type}</h2>
              </div>
              <p className="services__service__description">{text}</p>
              {/* <img src={play} alt="Readmore" /> */}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  .hg{
    width:100%;
    height:100%;
  }
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: 100%;
    width:80%;
    margin: 0 14rem;
    margin-top: 5rem;
    gap: 2rem;
    &__service {
      padding: 2rem;
      &:nth-of-type(2) {
        background-color: var(--primary-color);
        .services__service__title {
          span {
            color: #fff;
          }
        }
        .services__service__description {
          color: #fff;
        }
      }
      &__image {
  
        margin-bottom: 2rem;
      }
      &__title {
        span {
          color: var(--primary-color);
          font-weight: bolder;
        }
        h2 {
          font-size: 3rem;
          line-height: 2.5rem;
          margin-bottom: 5rem;
          color: var(--secondary-color);
        }
      }
      &__description {
        color: var(--primary-color);
        margin-bottom: 2rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .services {
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
      // padding: 0 2rem;
    }
  }
  @media screen and (max-width: 768px) {
    .services {
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
      margin: 2rem 0;
      // padding: 0 2rem;
    }
  }
`;

export default Services;
