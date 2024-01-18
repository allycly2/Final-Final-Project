import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Image/bkimage.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false); // New state for alert message
  const [showRedirectMessage, setShowRedirectMessage] = useState(false); // New state for redirecting message
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any input field is empty
    if (!name || !email || !password) {
      setShowAlert(true);
      return;
    }

    // Validate field lengths
    if (name.length > 30) {
      // Handle error: Name is too long
      return;
    }

    if (email.length > 40) {
      // Handle error: Email is too long
      return;
    }

    if (password.length > 70) {
      // Handle error: Password is too long
      return;
    }

    if (password.length < 4) {
      setPasswordError(true);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/signup", {
        name,
        email,
        password,
      });

      // Handle successful signup
      console.log("Signup successful");
      setShowRedirectMessage(true); // Set showRedirectMessage to true to show the redirecting message
      // Redirect to the login page after a short delay (e.g., 2 seconds)
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error("Signup error:", error);
    }
  };

  const handleInputChange = () => {
    setShowAlert(false); // Clear the error message when the user starts typing
  };

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="signup-form-container">
      <ul class="circles">
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

      <form className="signup-form" style={styles} onSubmit={handleSubmit}>
        <div>
          <h1>
            <Link className="logo" to="/">
              Great Plan
            </Link>
          </h1>
        </div>
        {showAlert && (
          <div className="signup-redirect">
            <p>Please enter a valid input.</p>
          </div>
        )}
        {showRedirectMessage && (
          <div className="signup-redirect">
            <p>Signup successful!</p>
            <p>Redirecting to the login page...</p>
          </div>
        )}
        {passwordError && (
          <div className="signup-redirect">
            <p>Password must be at least 4 characters long.</p>
          </div>
        )}
        <div className="signup-header">
          <h2>Signup</h2>
        </div>

        <div>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              handleInputChange();
            }}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              handleInputChange();
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              handleInputChange();
            }}
          />
        </div>
        <button type="submit">Signup</button>
        <div className="signup-text">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
