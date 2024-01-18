import React from "react";
import { Link } from "react-router-dom";
import "./TopNavBar.css";

function TopNavBar() {
  return (
    <nav className="top-nav">
      <ul className="main-nav">
        {/* <li>
          <Link className="nav-a" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-a" to="/ToDoList">
            My Schedule
          </Link>
        </li>
        <li>
          <Link className="nav-a" to="/event">
            Event Calendar
          </Link>
        </li>
        <li>
          <Link className="nav-a" to="/holiday">
            Holidays Worldwide
          </Link>
  </li>*/}
        <li className="nav-login">
          <Link className="nav-b" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-login">
          <Link className="nav-b" to="/signup">
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNavBar;
