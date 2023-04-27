import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const  Main3 = () => {
  return (
    <div>
      <h1>This is a user index page.</h1>
      <Navbar/>
      <Outlet />
    </div>
  )
}

export default  Main3
