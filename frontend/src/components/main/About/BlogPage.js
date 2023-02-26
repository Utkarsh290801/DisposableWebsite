import React, { useEffect, useState } from "react";
import styled from "styled-components";
import img from "./assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";

import presentation from "./assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import { NavLink } from "react-router-dom";
import LogoComponent from "./subComponents/LogoComponent";
import SocialIcons from "./subComponents/SocialIcons";
import PowerButton from "./subComponents/PowerButton";

import { Blogs } from "./data/BlogData";
import BlogComponent from "./BlogComponent";
import AnchorComponent from "./subComponents/Anchor";
// import BigTitle from "./subComponents/BigTitlte";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
const MainContainer = styled(motion.div)`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
const Logo = styled.h1`
  display: inline-block;
  color: #000000;
  font-family: "Pacifico", cursive;

  left: 5.1rem;
  top: 5.3rem;
  z-index: 3;
`;
const Link = styled.a`
background-color:black;
color: white;
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(1em + 0.5vw);


}
`;
const Linkk = styled.a`
background-color:black;
color: white;
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 50px 0px;
font-size:calc(1em + 0.5vw);


}
`;
const Linka = styled.a`
background-color:black;
color: white;
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
// border-radius: 0 0 50px 0px;
font-size:calc(1em + 0.5vw);


}
`;
const Button = styled.a`
background-color:black;
color: white;
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
// border-radius: 0 0 50px 0px;
font-size:calc(1em + 0.5vw);


}
`;

const Container = styled.div`
  background-color: rgba(252, 246, 244, 0.8);
  width: 100%;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

// Framer-motion config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
const WORK = styled.div`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  color: #818589;
  position: absolute;
  top: 39%;
  left: calc(7rem + 9vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
  font-size: 100px;
`;
const BigTitle = styled.div`
  position: fixed;
  top: 3rem;
  left: 5rem;
  color: rgba(0, 0, 0, 0.1);
  font-size: calc(5rem + 5vw);
  z-index: 0;
`;
const BLOG = styled.div`
  color: ${(props) => props.theme.text};
  color: #818589;
  position: absolute;
  top: 89%;
  right: calc(0rem + 0vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  font-size: 100px;
`;
const Contact = styled.a`
  color: #464444;
  position: fixed;
  top: 7rem;
  right: calc(3rem + 7vw);
  text-decoration: none;
  z-index: 1;
`;
const BlogPage = (props) => {
  const [numbers, setNumbers] = useState(0);
  const [element, controls] = useScroll();
  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
  }, []);

  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        {/* <LogoComponent /> */}
        <NavLink to="/home">
          <img
            src="https://cdn-icons-png.flaticon.com/512/919/919829.png"
            alt=""
            style={{
              height: "45px",
              marginTop: "20px",

              marginLeft: "20px",
            }}
          />
          <Logo color={props.theme}>Web-X</Logo>
        </NavLink>
        <Contact target="_blank" href="/">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            HOME
          </motion.h2>
        </Contact>
        <PowerButton />
        <SocialIcons />
        <AnchorComponent number={numbers} />
        <WORK>Synopsis</WORK>
        <BLOG>Presentation</BLOG>
        <div ref={element}>
          <center>
            <h1
              style={{
                marginTop: "5rem",
                fontSize: "4rem",
                fontFamily: "sans-serif",
              }}
            >
              Project Documents
            </h1>
            <p
              style={{
                color: "inherit",
                fontSize: "1.6rem",
                fontFamily: "Karla sans-serif",
                fontWeight: "500",
                marginTop: "1rem",
              }}
            >
              Here you get all the documentation of projects and you can easily
              download it.
            </p>{" "}
          </center>
          <div style={{ marginTop: "2rem" }}>
            <center>
              <Link href="#synopsis">Synopsis</Link>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Linka href="#presentation">Presentation</Linka>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Linkk href="#report">Report</Linkk>
            </center>
          </div>
        </div>
        <Center id="synopsis" ref={element}>
          <iframe
            src="https://drive.google.com/file/d/1yc1A5zE1JZR23aE_APqFzhmjNm_YxUBy/preview"
            width="640"
            height="720"
            allow="autoplay"
          ></iframe>
        </Center>
        <center style={{ marginTop: "2rem" }}>
          <Button
            href="https://drive.google.com/file/d/1yc1A5zE1JZR23aE_APqFzhmjNm_YxUBy/view?usp=share_link"
            download
          >
            Download PDF
          </Button>
        </center>

        <Center id="presentation">
          {/* <Grid>
            {Blogs.map((blog) => {
              return <BlogComponent key={blog.id} blog={blog} />;
            })}
          </Grid> */}
          <div>
            <iframe
              src="https://docs.google.com/presentation/d/1OymG0dWeD8tTwjkaIG9QZPuGpO-J16np/edit?usp=share_link&ouid=114676352264157476226&rtpof=true&sd=true/embed?start=false&loop=false&delayms=3000"
              frameborder="3"
              width="960"
              height="569"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
            <div>
              <center style={{ marginTop: "2rem" }}>
                <Button
                  href="https://drive.google.com/file/d/1yc1A5zE1JZR23aE_APqFzhmjNm_YxUBy/view?usp=share_link"
                  download
                >
                  Download Presentation
                </Button>
              </center>
            </div>
          </div>
        </Center>
        <BigTitle>Documentation</BigTitle>
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
