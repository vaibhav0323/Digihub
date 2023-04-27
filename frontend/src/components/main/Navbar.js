import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light menu">
    {/* Container wrapper */}
    <div className="container-fluid">
      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars" />
      </button>
      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Navbar brand */}
        <NavLink className="navbar-brand mt-2 mt-lg-0" to="/index">
        
        <img
        src='/images/sign2.png' height={40} alt="Logo"
        /> 

        </NavLink>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/main/home">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" to="/main/signup">
              SignUp
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" to="/main/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/main/browse badges">
              Browse Badges
            </NavLink>
           </li> 
          <li className="nav-item">
            <NavLink className="nav-link active" to="/main/badge details">
              Badge Details
            </NavLink>
          </li>
          <hr/>
        </ul>
        {/* Left links */}
      </div>
      {/* Collapsible wrapper */}
      {/* Right elements */}
      <div className="d-flex align-items-center">
      </div>
      {/* Right elements */}
    </div>
    {/* Container wrapper */}
  </nav>
  {/* Navbar */}
</>

    </div>
  )
}

export default Navbar