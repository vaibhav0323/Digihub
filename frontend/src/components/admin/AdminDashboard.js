import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className='mainBodyAdmin'>
      <div className="container-fluid" id="main">
        <div className="row row-offcanvas row-offcanvas-left">
          <div
            className="col-md-3 col-lg-2 sidebar-offcanvas  pl-0 sideNav"
            id="sidebar"
            role="navigation"
          >
            <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3 ">
              <li className="nav-item">
                <NavLink className="nav-link sLink" to="/admin/adminProfile">
                  Admin profile
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link sLink" to="/admin/manageStudent">
                  Manage Students
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link sLink" to="/admin/manageBadges">
                  Manage Badges
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link sLink" to="/admin/badgeData">
                  Badge Data
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link sLink" to="/admin/studentData">
                  Student Data
                </NavLink>
              </li>
            </ul>
          </div>
          {/*/col*/}
          <div className="col main pt-5 mt-3">
            <h1 className="display-4 fw-bold d-none d-sm-block">Digihub AdminDashboard</h1>
            <h3 className="lead d-none d-sm-block fs-large fw-normal">
              Unlock the potential of your organization.
            </h3>

            <div className="row mb-3">
              <div className="col-xl-3 col-sm-6 py-2">
                <div className="card bg-success text-white h-100">
                  <div className="card-body bg-success">
                    <div className="rotate">
                      <i className="fa fa-user fa-4x" />
                    </div>
                    <h6 className="text-uppercase fw-bold">Students</h6>
                    <h1 className="display-4 fw-bold">134</h1>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-danger h-100">
                  <div className="card-body bg-danger">
                    <div className="rotate">
                      <i className="fa fa-list fa-4x" />
                    </div>
                    <h6 className="text-uppercase fw-bold">Badges</h6>
                    <h1 className="display-4 fw-bold">10</h1>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-info h-100">
                  <div className="card-body bg-info">
                    <div className="rotate">
                      <i className="fa fa-twitter fa-4x" />
                    </div>
                    <h6 className="text-uppercase">Tweets</h6>
                    <h1 className="display-4">125</h1>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 py-2">
                <div className="card text-white bg-warning h-100">
                  <div className="card-body">
                    <div className="rotate">
                      <i className="fa fa-share fa-4x" />
                    </div>
                    <h6 className="text-uppercase fw-bold">Badges Alloted</h6>
                    <h1 className="display-4">36</h1>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className='container'>
              <div className='row'>
                <div className="col-md-4  badgeWSt">
                  <div className="badgeImg">
                    <img src="/images/datasc.png" alt="1" class="rounded"></img>
                  </div>
                  <div className='imgDes'>
                    <h2 className="text-center" >Data Science</h2>
                    <h3 className="text-center" >Badges Alloted: 4</h3>
                  </div>
                </div>
                <div className="col-md-4  badgeWSt">
                  <div className="badgeImg">
                    <img src="/images/macler.png" alt="1" class="rounded"></img>
                  </div>
                  <div className='imgDes'>
                    <h2 className="text-center" >Machine Learning</h2>
                    <h3 className="text-center" >Badges Alloted: 4</h3>
                  </div>
                </div>
                <div className="col-md-4  badgeWSt">
                  <div className="badgeImg">
                    <img src="/images/WebDev.png" alt="1" class="rounded"></img>
                  </div>
                  <div className='imgDes'>
                    <h2 className="text-center" >Web Devlopment (React)</h2>
                    <h3 className="text-center" >Badges Alloted: 4</h3>
                  </div>
                </div>

              </div>

              <hr/>

              <div className='row'>
                <div className="col-md-4  badgeWSt">
                  <div className="badgeImg">
                    <img src="/images/iot.png" alt="1" class="rounded"></img>
                  </div>
                  <div className='imgDes'>
                    <h2 className="text-center" >Internet of Things</h2>
                    <h3 className="text-center" >Badges Alloted: 4</h3>
                  </div>
                </div>
                <div className="col-md-4  badgeWSt">
                  <div className="badgeImg">
                    <img src="/images/macler.png" alt="1" class="rounded"></img>
                  </div>
                  <div className='imgDes'>
                    <h2 className="text-center" >Machine Learning</h2>
                    <h3 className="text-center" >Badges Alloted: 4</h3>
                  </div>
                </div>
                <div className="col-md-4  badgeWSt">
                  <div className="badgeImg">
                    <img src="/images/WebDev.png" alt="1" class="rounded"></img>
                  </div>
                  <div className='imgDes'>
                    <h2 className="text-center" >Web Devlopment (React)</h2>
                    <h3 className="text-center" >Badges Alloted: 4</h3>
                  </div>
                </div>

              </div>


            </div>
          </div>
        </div>
      </div>
    </div>




  )
}

export default AdminDashboard