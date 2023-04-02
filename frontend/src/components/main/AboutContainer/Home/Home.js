import React from "react";
import "./Home.css";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Navbar from "../Navbar/Navbar";
import AboutUs from "../AboutUs/AboutUs";
import Details from "../Details/Details";
import Feedback from "../Feedback/Feedback";
import AboutFooter from "../Footer/AboutFooter";
export default function Home() {
  return (
    <>
      <div className="home-container" id="home">
        <Navbar />

        <Profile />
        <Footer />
      </div>
      <AboutUs />
      <Details />
      <Feedback />
      <AboutFooter />
    </>
  );
}
