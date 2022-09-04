import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div><nav class="navbar navbar-light bg-secondary">
    <div class="container-fluid">
    <a class="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://blogs.articulate.com/rapid-elearning/wp-content/uploads/sites/7/2016/07/drag-drop-examples.png"
          height="55"
          alt=""
          loading="lazy"
        />
      </a>
      
    <div class="" id="navbarNav">
    <ul class="navbar-nav mb-2 mb-lg-0" style={{marginLeft:"20%"}}>
        <li class="nav-item">
        <NavLink className="nav-link active" to="">
                 HOME
                </NavLink>
        </li>
        {/* <li class="nav-item">
        <NavLink className="nav-link" to="">
               MANAGE PLAN
                </NavLink>
        </li> */}
        </ul>
        </div>
        

      
      <form class="d-flex input-group w-auto" style={{marginLeft:"60%"}}>
        <input
          type="search"
          class="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="fas fa-search"></i>
        </span>
      </form>
      
      <button type="button" class="btn" style={{marginLeft:''}}>
          Login
        </button>
    <ul class="navbar-nav">
     
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
  </nav></div>
  )
}

export default Header