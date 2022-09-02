import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Header1 from './Header1'

const User = () => {
  return (
    <div>
       <Header></Header>
       <Header1/>
        <Outlet/>
    </div>
  )
}

export default User