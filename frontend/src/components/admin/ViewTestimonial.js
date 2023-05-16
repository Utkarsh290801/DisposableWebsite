import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { testimonialsAnimations } from "../main/Home/animation";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "../main/Home/useScroll";
import Avatar from 'react-avatar';

const url = app_config.backend_url;
const ViewTestimonial = () => {
  const [viewTest, setViewTest] = useState([]);
  const [element, controls] = useScroll();
  const [selected, setSelected] = useState(0);

  const avatarImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUSTMkxBaMlffFsLg6zNs3dzRIx6cUn29oTVbJHi7l4g&usqp=CAU&ec=48665701",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-WyQybvDaQTk2vVSICs46DMS71ZW1hb4hKyTQ6zC6pA&usqp=CAU&ec=48665701",
    "https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80",
    "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    // Add more avatar image paths here
  ];
    const randomIndex = Math.floor(Math.random() * avatarImages.length);
  const randomAvatar = avatarImages[randomIndex];
  

  const getDataFromBackend = async () => {
    const response = await fetch(url + "/testimonial/getall");
    const data = await response.json();
    console.log(data);
    setViewTest(data);
  };
  useEffect(() => {
    getDataFromBackend();
  }, []);
  
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
          {viewTest?.map(({ _id, name, designation, review }, index) => {
            return (
              <div
                className={`testimonial ${
                  selected === index ? "active" : "hidden"
                }`}
                key={index}
              >
                <div className="image">
                <div style={{ maxWidth: '100%' }}>
                      <Avatar src={randomAvatar} name="avatar" size="100%" round={true} />
                    </div>
                </div>
                <div className="title-container">
                  <span className="designation">{designation}</span>
                  <h3 className="title">{name}</h3>
                </div>
                <p className="description">"{review}"</p>
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
          {viewTest.map((testimonial, index) => (
            <button
              key={index}
              className={selected === index ? "active" : ""}
              onClick={() => {
                setSelected(index);
              }}
            ></button>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  overflow: hidden;

  .container {
    min-height: 85vh;
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
        .title-container {
          .designation {
            font-size: 1.5rem;
          }
          .title {
            color: blue;
          }
        }
        .description {
          max-width: 500px;
          overflow: hidden;
          word-wrap: break-word;
          font-size: 1.1rem;
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

export default ViewTestimonial;
