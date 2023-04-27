// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import SignUp from "./components/main/SignUp";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import BrowseBadges from "./components/main/BrowseBadges";
import BadgeDetails from "./components/main/BadgeDetails";
import AdminDashboard from "./components/admin/AdminDashboard";
import MainAdmin from "./components/admin";
import AdminProfile from "./components/admin/AdminProfile";
import ManageStudent from "./components/admin/ManageStudent";
import ManageBadges from "./components/admin/ManageBadges";
import IssueBadges from "./components/admin/IssueBadges";
import UserProfile from "./components/user/UserProfile";
import NewBadge from "./components/user/NewBadge";
import Main2 from "./components/admin";
import Main3 from "./components/user";

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
                <NavLink className="nav-link active" to="/main2">
                  Admin
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/main">
                  Main
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/main3">
                  User
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        <Routes>
          <Route path="main" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="browse badges" element={<BrowseBadges />} />
            <Route path="badge details" element={<BadgeDetails />} />
          </Route>

          <Route path="main2" element={<Main2 />}>
            <Route path="admin dashboard" element={<AdminDashboard />} />
            <Route path="admin profile" element={<AdminProfile />} />
            <Route path="manage student" element={<ManageStudent />} />
            <Route path="manage badges" element={<ManageBadges />} />
            <Route path="issue badges" element={<IssueBadges />} />
          </Route>

          <Route path="main3" element={<Main3 />}>
            <Route path="user profile" element={<UserProfile />} />
            <Route path="new badge" element={<NewBadge />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
