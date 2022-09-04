import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showBar, setShowBar] = useState(false);
  return (
    <div>
      {/* <!-- Navbar --> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <!-- Container wrapper --> */}
        <div class="container-fluid">
          {/* <!-- Toggle button --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <!-- Navbar brand --> */}
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://blogs.articulate.com/rapid-elearning/wp-content/uploads/sites/7/2016/07/drag-drop-examples.png"
                height="55"
                alt=""
                loading="lazy"
              />
            </a>
            {/* <!-- Left links --> */}
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink className="nav-link" to="">
                  HOME
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="">
                  PREVIEW
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="">
                  TEMPLATES
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="">
                  PRICING
                </NavLink>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>
          {/* <!-- Collapsible wrapper --> */}

          {/* <!-- Right elements --> */}
          <div class="d-flex align-items-center">
            <a class="link-secondary" href="#">
              <i
                class="fas fa-search"
                id="search-btn"
                onClick={(e) => setShowBar(true)}
              ></i>
              <i class="fas fa-user" id="login-btn"></i>
            </a>
          </div>
          {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      <form action="" class="search-bar">
        <input
          hidden={!showBar}
          type="search"
          id=""
          className="form-control"
          placeholder="search here..."
          style={{ marginTop: "", border: "2px solid black" }}
        />
      </form>

      {/* <!-- Navbar --> */}
    </div>
  );
};

export default Header;
