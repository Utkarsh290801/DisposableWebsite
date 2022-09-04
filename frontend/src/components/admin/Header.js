import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light "style={{backgroundColor: "#e3f2fd"}}>
  <div class="container-fluid">
  <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://blogs.articulate.com/rapid-elearning/wp-content/uploads/sites/7/2016/07/drag-drop-examples.png"
          height="55"
          alt=""
          loading="lazy"
        />
      </a>
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <NavLink className="nav-link active" to="">
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
                 FEATURES
                </NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" to="" >
               WEBPAGE 
                </NavLink>
        </li>
      </ul>
    </div>

  </div>
  
        
    <div class="container-fluid " style={{marginLeft:"60%"}}>
        <button type="button" class="btn px-3 me-2">
          Login
        </button>
    <ul class="navbar-nav">
      {/* <!-- Avatar --> */}
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle d-flex align-items-center"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
            class="rounded-circle"
            height="35"
            alt="Portrait of a Woman"
            loading="lazy"
          />
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header