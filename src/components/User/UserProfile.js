import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../NavBar/Sidebar";
import "./UserProfile.css";
import Icon from "../Image/icon.png";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");

        if (!accessToken) {
          setError("Access token not found");
          redirectToLogin();
          return;
        }

        const response = await axios.get("http://localhost:3000/api/profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setUser(response.data.user);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Unauthorized, access token expired
          setError("Access token expired. Please login again.");
          localStorage.removeItem("access_token");
          redirectToLogin();
        } else {
          setError("Failed to fetch user profile");
        }
      }
    };

    fetchUserProfile();
  }, []);

  const redirectToLogin = () => {
    // Redirect to the login page
    window.location.href = "/login";
  };

  const handleEdit = () => {
    setEditing(!editing);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>Loading user profile...</div>;
  }

  return (
    <div className="profile-container">
      <div className="navigation">
        <Sidebar />
      </div>
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="profile-content">
        <h2 style={{ marginBottom: "40px", color: "#6a391b" }}>Profile</h2>
        <div className="image">
          {" "}
          <img src={Icon} alt="User Icon" />
        </div>
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
        {/*{editing ? (
          <>
            <p>
              Name:{" "}
              <input
                type="text"
                value={user.name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              Email:{" "}
              <input
                type="email"
                value={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
          </>
        ) : (
       
        )}
        <button className="profile-button" onClick={handleEdit}>
          {editing ? "Cancel" : "Edit"}
        </button>*/}
      </div>
    </div>
  );
};

export default UserProfile;
