import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer className="bg-dark text-center text-white">
  {/* Grid container */}
  <div className="container p-4 pb-0">
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <NavLink
        className="btn btn-outline-light btn-floating m-1"
        to="https://www.facebook.com/digipodium/"
        role="button"
      >
        <i className="fab fa-facebook-f" />
      </NavLink>
      
      {/* Google */}
      <NavLink
        className="btn btn-outline-light btn-floating m-1"
        to="https://digipodium.com/"
        role="button"
      >
        <i className="fab fa-google" />
      </NavLink>
      {/* Instagram */}
      <NavLink
        className="btn btn-outline-light btn-floating m-1"
        to="https://www.instagram.com/digipodium_official/?hl=en"
        role="button"
      >
        <i className="fab fa-instagram" />
      </NavLink>
      {/* Linkedin */}
      <NavLink
        className="btn btn-outline-light btn-floating m-1"
        to="https://www.linkedin.com/company/itanddigitalmarketinginternship2023/?originalSubdomain=in"
        role="button"
      >
        <i className="fab fa-linkedin-in" />
      </NavLink>
      {/* Github */}
      <NavLink
        className="btn btn-outline-light btn-floating m-1"
        to="https://github.com/digipodium"
        role="button"
      >
        <i className="fab fa-github" />
      </NavLink>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    © 2020 Copyright:
    <NavLink className="text-white" to="https://digipodium.com/">
      digipodium.com
    </NavLink>
  </div>
  {/* Copyright */}
</footer>

    </div>
  )
}

export default Footer