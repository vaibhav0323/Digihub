// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import React from 'react';

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
import SignUpData from "./components/main/SignUpData";
import LoginData from "./components/main/LoginData";

function App() {
  return (
      <BrowserRouter> 
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <Route path="admin" element={<Admin />}>

            <Route path="admin profile" element={<AdminProfile />} />
            <Route path="manage student" element={<ManageStudent />} />
            <Route path="admin dashboard" element={<AdminDashboard />} />
            <Route path="manage badges" element={<ManageBadges />} />
            <Route path="issue badges" element={<IssueBadges />} />
            <Route path="badge data" element={<BadgeData />} />
            <Route path="student data" element={<StudentData />} />
          </Route>

          <Route path="main" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="browse badges" element={<BrowseBadges />} />
            <Route path="badge details" element={<BadgeDetails />} />
            <Route path="signUp Data" element={<SignUpData />} />
            <Route path="Login Data" element={<LoginData />} />
          </Route>

          <Route path="user" element={<User />}>
            <Route path="user profile" element={<UserProfile />} />
            <Route path="new badge" element={<NewBadge />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
