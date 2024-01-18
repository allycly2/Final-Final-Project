import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ToDoList from "./components/ToDoList/ToDoList";
import Diary from "./components/Diary/Diary";
import Event from "./components/Event/Event";
import "./App.css";
import Sidebar from "./components/NavBar/Sidebar";
import Holiday from "./components/Holiday/Holiday";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker";
import UserProfile from "./components/User/UserProfile";
import backgroundImage from "./components/Image/image.png";
import Image from "./components/Image/bkimage6.png";
import Home from "./Home";

function Apps() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      // User is logged in
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Perform any logout-related actions (e.g., clear local storage, reset state)
    setIsLoggedIn(false);
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const style = {
    Image: `url(${Image})`,
  };

  return (
    <div className="App" style={styles}>
      <div className="nav">
        <div className="navBar-container">
          <Sidebar isLoggedIn={isLoggedIn} logout={handleLogout} />
        </div>
      </div>
      <div className="content-container">
        <div
          style={{
            backgroundImage: "{image}",
          }}
        ></div>
        <div></div>
        <div className="main-logo">Great Plan</div>
        <div className="home-page-content">
          <h1 className="home-h1">
            <span class="title-word title-word-1">Hello </span>
            <span class="title-word title-word-2">and </span>
            <span class="title-word title-word-3">Welcome </span>
          </h1>
          <br></br>
          <p className="home-p">
            Embark on a transformative journey of effectively managing your
            diary, schedule, and expenses.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="App" element={<Apps />} />
        <Route path="/" element={<Home />} />
        <Route path="/ToDoList" element={<ToDoList />} />
        <Route path="/Diary" element={<Diary />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Holiday" element={<Holiday />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/ExpenseTracker" element={<ExpenseTracker />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
