import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const  Admin = () => {
  return (
    <div>
      <h1>This is admin Page</h1>
      <Navbar/>
      <Outlet />
    </div>
  )
}

export default  Admin
