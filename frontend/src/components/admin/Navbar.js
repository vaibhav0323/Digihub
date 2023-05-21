import React from 'react'
import { NavLink } from 'react-router-dom'
import useUserContext from '../../context/UserContext';

const Navbar = () => {
  const { loggedIn, logout } = useUserContext();
  console.log(loggedIn);
  const showLogout = () => {
    if (loggedIn) {
      return (
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </li>
        </ul>
      );
    }
  };

  return (
    <div>
        <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-light bg-light W-sm-100 menu">
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
        <NavLink className="navbar-brand mt-2 mt-lg-0" to="/admin">
        
        <img
        src='/images/sign2.png' height={40} alt="Logo"
        /> 
        
        </NavLink>
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/admin/adminDashboard">
              Home
            </NavLink>
          </li>

          
          <li className="nav-item">
            <NavLink className="nav-link active" to="/admin/adminProfile">
              Admin profile
            </NavLink>
           </li> 
          <li className="nav-item">
            <NavLink className="nav-link active" to="/admin/manageStudent">
              Manage Students
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/admin/manageBadges">
              Manage Badges
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link active" to="/admin/badgeData">
              Badge Data
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link active" to="/admin/studentData">
              Student Data
            </NavLink>
          </li>
          
        </ul>
        {/* Left links */}
        {showLogout()}
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