// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";

import Home from "./components/main/Home";
import Login from "./components/main/Login";
import SignUp from "./components/main/SignUp";
import Footer from "./components/main/Footer";
import BrowseBadges from "./components/main/BrowseBadges";
import BadgeDetails from "./components/main/BadgeDetails";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminProfile from "./components/admin/AdminProfile";
import ManageStudent from "./components/admin/ManageStudent";
import ManageBadges from "./components/admin/ManageBadges";
import IssueBadges from "./components/admin/IssueBadges";
import UserProfile from "./components/user/UserProfile";
import NewBadge from "./components/user/NewBadge";
import Admin from "./components/admin";
import User from "./components/user";
import Main from "./components/main";
import BadgeData from "./components/admin/BadgeData";
import StudentData from "./components/admin/StudenData";
import UserData from "./components/main/UserData";
import AdminAuth from "./auth/AdminAuth";
import { Toaster } from "react-hot-toast";
import DisplayStudentBadges from "./components/user/DisplayStudentBadges";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/App">
                  Home page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/Admin">
                  Admin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/Main">
                  Main
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/User">
                  User
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/main/home" />} />
        <Route
          path="admin"
          element={
            <AdminAuth>
              {" "}
              <Admin />{" "}
            </AdminAuth>
          }
        >
          <Route path="adminProfile" element={<AdminProfile />} />
          <Route path="manageStudent" element={<ManageStudent />} />
          <Route path="adminDashboard" element={<AdminDashboard />} />
          <Route path="manageBadges" element={<ManageBadges />} />
          <Route path="issueBadges" element={<IssueBadges />} />
          <Route path="badgeData" element={<BadgeData />} />
          <Route path="studentData" element={<StudentData />} />
        </Route>

        <Route path="main" element={<Main />}>
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="browseBadges" element={<BrowseBadges />} />
          <Route path="badgeDetails" element={<BadgeDetails />} />
          <Route path="UserData" element={<UserData />} />
        </Route>

        <Route path="user" element={<User />}>
          <Route path="userProfile" element={<UserProfile />} />
          <Route path="newBadge" element={<NewBadge />} />
          <Route
            path="displayStudentBadges"
            element={<DisplayStudentBadges />}
          />
        </Route>
      </Routes>
      <div className="row" style={{ height: "auto" }}>
        <MDBCarousel showControls dealy={5}>
          <MDBCarouselItem
            className="d-block img-fluid"
            itemId={1}
            src="/images/s1.jpg"
            alt="..."
            height={"600px"}
          />
          <MDBCarouselItem
            className="d-block img-fluid"
            itemId={2}
            src="/images/s2.jpeg"
            alt="..."
            height={"600px"}
          />
          <MDBCarouselItem
            className="d-block img-fluid"
            itemId={3}
            src="/images/s3.jpeg"
            alt="..."
            height={"600px"}
          />
        </MDBCarousel>
      </div>
      <div className="conatainer d-flex align-item-center justify-content-center mt-lg-5 ">
        <div className="row heading">
          <h2>Our Services</h2>
        </div>
      </div>
      <div className="container mt-lg-5 mb-5">
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          <MDBCol>
            <MDBCard className="h-80">
              <div>
              <MDBCardImage 
                className="mt-3 offset-5"
                src="/images/security.png"
                alt="..."
                height={"80px"}
                width={"80px"}
              />
              </div>
              <MDBCardBody className="d-flex-column align-item-center justify-content-center"> 
                <h3 className="d-flex align-item-center justify-content-center" > Secure Credentials </h3>
                <p className="d-flex align-item-center justify-content-center">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-80">
              <div>
              <MDBCardImage 
                className="mt-3 offset-5"
                src="/images/security.png"
                alt="..."
                height={"80px"}
                width={"80px"}
              />
              </div>
              <MDBCardBody className="d-flex-column align-item-center justify-content-center"> 
                <h3 className="d-flex align-item-center justify-content-center" > Secure Credentials </h3>
                <p className="d-flex align-item-center justify-content-center">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="h-80">
              <div>
              <MDBCardImage 
                className="mt-3 offset-5"
                src="/images/security.png"
                alt="..."
                height={"80px"}
                width={"80px"}
              />
              </div>
              <MDBCardBody className="d-flex-column align-item-center justify-content-center"> 
                <h3 className="d-flex align-item-center justify-content-center" > Secure Credentials </h3>
                <p className="d-flex align-item-center justify-content-center">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
        </MDBRow>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
