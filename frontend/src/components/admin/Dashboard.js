import React from 'react'
import './Dahboard.css'
const Dashboard = () => {
  return (
    <div>
      <div className='sidebar'>
        <div className='logo_
        content'>
          {/* //logo */}
          <div className='logodashboard'>
          <i class='bx bxs-color icons'></i>
            <div className='logo_name'>Web Build</div>
          </div>
          <i class='bx bx-menu' id='btn1'></i>
        </div>
        <ul className='navbarlist'>
          <li>
            
            <i class='bx bx-search'></i>
            <input type="text" placeholder="Search..."/>

           
            {/* <span className='tooltip'>Dahboard</span> */}
          </li>
          <li>
            <a href='#'>
            <i class='bx bx-grid-alt'></i>
            <span className='links_name'>Dahboard</span>

            </a>
            {/* <span className='tooltip'>Dahboard</span> */}
          </li>
          <li>
            <a href='#'>
            <i class='bx bxs-user'></i>
            <span className='links_name'>User</span>

            </a>
            {/* <span className='tooltip'>Dahboard</span> */}
          </li>
          <li>
            <a href='#'>
            <i class='bx bx-message-detail'></i>
            <span className='links_name'>Contact Us</span>

            </a>
            {/* <span className='tooltip'>Dahboard</span> */}
          </li>
        </ul>
        <div className='profile_content'>
          <div className='profileadmin'>
            {/* <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"></img> */}
            <div className='name'>Utkarsh and Mansha</div>
            <div className='job'>web developer</div>
          </div>
        </div>
        <i class='bx bx-log-out' id='log_out'></i>
      </div>
    </div>
  )
}

export default Dashboard