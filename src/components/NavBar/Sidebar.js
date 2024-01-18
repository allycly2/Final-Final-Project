import React, { useState } from "react";
import { SidebarData } from "./SidebarData";
import SidebarIcon from "./SidebarIcon";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const accessToken = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout-related actions (e.g., clear local storage, reset state)
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`menu ${showSidebar ? "show" : ""}`}>
      <div className="Sidebar">
        <div className="sidebartitle">
          <br />
          <Link className="sidebar-name" to="/">
            Great Plan
          </Link>
        </div>
        <SidebarIcon onClick={toggleSidebar} />
        <ul className="SidebarList">
          {SidebarData.map((value, key) => {
            if (value.title === "Login") {
              return (
                <li
                  key={key}
                  id={window.location.pathname === value.link ? "active" : ""}
                  className="row"
                  onClick={() => {
                    accessToken ? handleLogout() : navigate(value.link);
                  }}
                >
                  <div id="icon">{value.icon}</div>
                  <div id="title">{accessToken ? "Logout" : value.title}</div>
                </li>
              );
            }

            return (
              <li
                key={key}
                id={window.location.pathname === value.link ? "active" : ""}
                className="row"
                onClick={() => {
                  navigate(value.link);
                }}
              >
                <div id="icon">{value.icon}</div>
                <div id="title">{value.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="hamburger" onClick={toggleSidebar}>
        <div className={`line ${showSidebar ? "open" : ""}`}></div>
        <div className={`line ${showSidebar ? "open" : ""}`}></div>
        <div className={`line ${showSidebar ? "open" : ""}`}></div>
      </div>
    </div>
  );
}

export default Sidebar;
