import React from 'react'
import "./Header1.css"

const Header1 = () => {
//     const mobile_nav = document.querySelector(".mobile-navbar-btn");
// const nav_header = document.querySelector(".header");

// const toggleNavbar = () => {
//   // alert("Plz Subscribe ");
//   nav_header.classList.toggle("active");
// };

// mobile_nav.addEventListener("click", () => toggleNavbar());
  return (
    <div>
         <header class="header">
      <img
        src="logo.png"
        alt="Web Build"
        class="logo"
      />

      <nav class="navbar">
        <ul class="navbar-list">
          <li><a class="navbar-link" href="#">Home</a></li>
          <li><a class="navbar-link" href="#">About</a></li>
          <li><a class="navbar-link" href="#">Services</a></li>
          <li><a class="navbar-link" href="#">Gallery</a></li>
          <li>
            <a
              class="navbar-link"
              href="https://www.instagram.com/thapatechnical/"
              target="_blank"
              >Contact</a
            >
          </li>
        </ul>
      </nav>

      <div class="mobile-navbar-btn">
        <ion-icon name="menu-outline" class="mobile-nav-icon"></ion-icon>
        <ion-icon name="close-outline" class="mobile-nav-icon"></ion-icon>
      </div>
    </header>

    {/* <!-- ======================================== 
          Our Main Hero Section Start  
    ========================================  --> */}
    <main>
      <section class="section-hero">
        <div class="hero">
          <p>Hero section </p>
        </div>
      </section>
    </main>

    {/* <!-- ======================================== 
          Our Service Section Start  
    ========================================  --> */}
    <section class="section-services">
      <div class="hero">
        <p>Services section</p>
      </div>
    </section>
    </div>
  )
}

export default Header1