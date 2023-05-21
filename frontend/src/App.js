// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React, { useState } from "react";

import Home from "./components/main/Home";
import Login from "./components/main/Login";
import SignUp from "./components/main/SignUp";
import Footer from "./components/main/Footer";
import BrowseBadges from "./components/main/BrowseBadges";
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
import { UserProvider } from "./context/UserContext";
import { AdminProvider } from "./context/AdminContext";
import BadgeDetails from "./components/main/BadgeDetails";

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
      <AdminProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/main/home" />} />
            <Route
              path="admin"
              element={
                <AdminAuth>
                  <Admin />
                </AdminAuth>
              }
            >
              <Route path="adminProfile" element={<AdminProfile />} />
              <Route path="manageStudent" element={<ManageStudent />} />
              <Route path="adminDashboard" element={<AdminDashboard />} />
              <Route path="manageBadges" element={<ManageBadges />} />
              {/* <Route path="issueBadges" element={<IssueBadges />} /> */}
              <Route path="badgeData" element={<BadgeData />} />
              <Route path="studentData" element={<StudentData />} />
            </Route>

            <Route path="main" element={<Main />}>
              <Route path="home" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="browseBadges" element={<BrowseBadges />} />
              <Route path="userData" element={<UserData />} />
              <Route path="badgeDetails/:id" element={<BadgeDetails />} />
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
          <Footer />
        </UserProvider>
      </AdminProvider>
    </BrowserRouter>
  );
}

export default App;
