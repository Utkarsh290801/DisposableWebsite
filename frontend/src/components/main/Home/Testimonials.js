import React, { useState } from "react";
// import loadmore from "./assets/loadmore.png";
import testimonial1 from "./assets/testimonial5.jpeg";
import testimonial2 from "./assets/testimonial2.jpeg";
import testimonial3 from "./assets/testimonial6.jpg";
import testimonial4 from "./assets/testimonial4.jpeg";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { testimonialsAnimations } from "./animation";

function Testimonials() {
  const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      designation: "PC Advisor",
      name: "Mike Williams      ",
      review: "Web-X is sincerely great, fully customer-oriented and just perfect for building state-of-the-art web pages just like that!",
      image:testimonial1,
    },
    {
      designation: "GizmoEditor",
      name: "Ric Manning",
      review:
        "Building websites with Web-X is like playing a game to me: it's easy, simple and fun to produce web pages that look best in our mobile universe!",
        image:testimonial2,
    },
    {
      designation: "About.com",
      name: "Tom Green",
      review:
        "It is one of the first solutions that come in handy when people like me get to know web design and Bootstrap. I like that I don't have to deal with the code at all!",
        image:testimonial3,
    },
    {
      designation: "Huffpost",
      name: "Alex Ivanovs",
      review:
        "Web-X is the easiest web design tool for making websites that look flawless on both mobiles and desktops. No wonder why there are so many people that are in love with it!",
        image:testimonial4,
    },
  ];
  return (
    <Section ref={element}>
      <div className="container">
        <motion.div
          className="testimonials"
          variants={testimonialsAnimations}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          {testimonials.map(({ designation, name, review,image }, index) => {
            return (
              <div
                className={`testimonial ${
                  selected === index ? "active" : "hidden"
                }`}
                key={index}
              >
                <div className="image">
                  <div className="circle2">
                    {/* <img src={loadmore} alt="Loadmore"> */}
                    <img className="image circle2" src={image} alt="Loadmore" />
                  </div>
                </div>
                <div className="title-container">
                  <span className="designation">{designation}</span>
                  <h3 className="title">{name}</h3>
                </div>
                <p className="description">{review}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          className="controls"
          variants={testimonialsAnimations}
          animate={controls}
          transition={{
            delay: 0.03,
            type: "tween",
            duration: 0.8,
          }}
        >
          <button
            className={selected === 0 ? "active" : ""}
            onClick={() => {
              setSelected(0);
            }}
          ></button>
          <button
            className={selected === 1 ? "active" : ""}
            onClick={() => {
              setSelected(1);
            }}
          ></button>
          <button
            className={selected === 2 ? "active" : ""}
            onClick={() => {
              setSelected(2);
            }}
          ></button>
          <button
            className={selected === 3 ? "active" : ""}
            onClick={() => {
              setSelected(3);
            }}
          ></button>
        </motion.div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  overflow: hidden;

  .container {
    min-height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    .testimonials {
      display: flex;
      gap: 1rem;
      text-align: center;
      justify-content: center;
      width: 30%;
      .testimonial {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        .image {
          position: relative;
          .circle2 {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10rem;
            width: 10rem;
            border-radius: 10rem;
            background-color: #8860e6b0;
          }
        }
      }
      .hidden {
        display: none;
      }
      color: #fff;
      .designation {
        height: 8rem;
      }
    }
    .controls {
      display: flex;
      gap: 1rem;
      button {
        padding: 0.5rem;
        border-radius: 1rem;
        background-color: var(--secondary-color);
        border: 0.1rem solid transparent;
        cursor: pointer;
      }
      .active {
        background-color: transparent;
        border: 0.1rem solid var(--secondary-color);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .background {
      display: none;
    }
    .container {
      padding: 4rem 0;
      .testimonials {
        width: 80%;
        .testimonial {
          .description {
            height: 18rem;
          }
        }
      }
    }
  }
`;

export default Testimonials;
