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
          <i id='icons1' class='bx bxs-color'></i>
            <div className='logo_name'>Web Build</div>
          </div>
          <i class='bx bx-menu' id='btn1'></i>
        </div>
        <ul className='navbarlist'>
          <li className='navbar_list'>
            
            <i id='search_btn' class='bx bx-search'></i>
            <input id='input_box' type="text" placeholder="Search..."/>

           
            {/* <span className='tooltip'>Dahboard</span> */}
          </li>
          <li className='navbar_list'>
            <a  className='atag' href='#'>
            <i  id='icons2' class='bx bx-grid-alt '></i>
            <span className='links_name'>Dahboard</span>

            </a>
            {/* <span className='tooltip'>Dahboard</span> */}
          </li>
          <li className='navbar_list'>
            <a className='atag' href='#'>
            <i  id='icons2' class='bx bxs-user'></i>
            <span className='links_name'>User</span>

            </a>
            {/* <span className='tooltip'>Dahboard</span> */}
          </li>
          <li className='navbar_list'>
            <a className='atag' href='#'>
            <i  id='icons2' class='bx bx-message-detail'></i>
            <span className='links_name'>Contact Us</span>

            </a>
            {/* <span className='tooltip'>Dahboard</span> */}
          </li>
        </ul>
        <div className='profile_content'>
          <div className='profileadmin'>
            <div className='profile_details'>

            <img id='image_admin' src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"></img>
            <div className='name_job'>

            <div className='name'>Utkarsh and Mansha</div>
            <div className='job'>web developer</div>
          </div>
            </div>
        <i class='bx bx-log-out' id='log_out'></i>
        </div>
            </div>
            
      </div>
    </div>
  )
}

export default Dashboard