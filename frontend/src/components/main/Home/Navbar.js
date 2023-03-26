import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "./assets/webx.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { navAnimation } from "./animation";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../user/UserContext";
import { style } from "@mui/system";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [element, controls] = useScroll();
  const navigate = useNavigate();

  const { loggedIn, setLoggedIn } = React.useContext(UserContext);

  const logout = () => {
    //1.destroy session value
    sessionStorage.removeItem("user");
    //2. set the current user to null
    setLoggedIn(false);
    //3.navigate to login page
    navigate("/main/login");
  };
  return (
    <Nav
      ref={element}
      variants={navAnimation}
      transition={{ delay: 0.1 }}
      animate={controls}
      state={isNavOpen ? 1 : 0}
    >
      <div className="brand__container">
        <a
          href="/home"
          className="brand"
          style={{
            color: "var(--primary-color)",
            textDecoration: "none",
            fontWeight: "600",
            fontSize: "1.6rem",
            // textTransform: "uppercase",
          }}
        >
          <img src={logo} alt="logo" style={{ height: "45px" }} /> &nbsp;
          &nbsp;Web-X
        </a>
        <div className="toggle">
          {isNavOpen ? (
            <MdClose onClick={() => setIsNavOpen(false)} />
          ) : (
            <GiHamburgerMenu
              onClick={(e) => {
                e.stopPropagation();
                setIsNavOpen(true);
              }}
            />
          )}
        </div>
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li className="active">
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="/user/webbuild">Builder</a>
          </li>
          <li>
            <div class="dropdown">
              <a class="dropbtn" href="#services">
                Services
              </a>
              <div class="dropdown-content">
                <a href="#blog">Feature</a>
                <a href="#portfolio">Template</a>
              </div>
            </div>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          {!loggedIn ? (
            <li className="">
              <NavLink
                className="btn btn-sm btn-block btn-outline-primary "
                to="/main/signin"
                style={{
                  color: "black",
                  transition: "transform .2s ease-in-out",
                  marginTop: "-10px",
                }}
              >
                LOGIN NOW
              </NavLink>
            </li>
          ) : (
            <NavLink
              style={{
                textDecoration: "none",
                textTransform: "uppercase",
                // color: "black",
              }}
              onClick={logout}
              className="btn btn-danger"
              to="/"
            >
              Log out
            </NavLink>
          )}
        </ul>
      </div>
    </Nav>
  );
};
// textTransform: "uppercase",
const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;
  color: black;
  padding-top: 2rem;
  .login-button {
    color: white;
  }
  .dropbtn {
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    border-radius: 4px;
    min-width: 160px;
    border: 1px solid #e47194;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
      rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
    z-index: 1;
  }
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    border-bottom: 3px solid #e47194;
    background-color: #f1f1f1;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }

  .brand__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
  }

  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 3rem;
      .active {
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
      }
      li {
        a {
          color: black;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.2rem;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        padding-right: 1rem;
        display: block;
        z-index: 1;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "100%" : "0%")};
      height: 100vh;
      background-color: var(--secondary-color);
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
  }
`;

export default Navbar;
