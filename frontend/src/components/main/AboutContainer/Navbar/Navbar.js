import {React,useState} from 'react'
import {Link} from "react-scroll";
import "./Navbar.css"
import logo from '../assets/Home/webx.png'
import { NavLink} from "react-router-dom";
const Navbar = () => {
    const[isMobile,setIsMoblie]=useState(false);
    
    return (
    <div className='navbar-container'>
        <h3 className='navbar-parent'>
        <NavLink
          to="/home"
          className="brand"
          style={{
           color:"white",
            textDecoration: "none",
            fontWeight: "500",
            fontSize: "1.9rem",
            // textTransform: "uppercase",
          }}
        >
          <img src={logo} alt="logo" style={{ height: "45px" }} /> 
          &nbsp;Web-X
        </NavLink>
            </h3>
        <ul className={isMobile ? 'navbar-links-mobile':'navbar-links'}
        onClick={()=>{setIsMoblie(false)}}
        >
          <NavLink to="/home" className='home'>Home</NavLink>
            <Link to="aboutus" spy={true} smooth={true} offset={-5} duration={500} className='about-me'>
            <li>About Us</li>
            </Link>
            <NavLink to="/user/webbuild" className='home'>Builder</NavLink>
            <Link to="resume" spy={true} smooth={true} offset={10} duration={500} className='resume'>
                <li>Details</li>
            </Link>
            <Link to="contactme" spy={true} smooth={true} offset={50} duration={500} className='contact-me'>
                <li>Feedback</li>
            </Link>
        </ul>  
        <button className='mobile-menu-icon'
            onClick={()=>setIsMoblie(!isMobile)}>
             {isMobile ? (
            <i className="fa fa-times" />
            ):(
            <i className="fa fa-bars" />
            )}
        </button>
    </div>
  )
}


export default Navbar
