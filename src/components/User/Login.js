import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signup&Login.css";
import backgroundImage from "../Image/bkimage.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("access_token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await axios.post(
        "http://localhost:3000/api/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            Authorization: "Bearer avSjekkd4526Dkeo586Dhjdsf52ba",
          },
        }
      );

      const { access_token } = loginResponse.data;

      localStorage.setItem("access_token", access_token);

      // Make the GET request to the profile API with the Authorization header
      const profileResponse = await axios.get(
        "http://localhost:3000/api/profile",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      console.log(profileResponse.data);

      navigate("/App");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  const handleLogout = () => {
    // Perform any logout-related actions (e.g., clear local storage, reset state)
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const styles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="login-form-container">
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

      <div>
        <form className="login-form" style={styles} onSubmit={handleSubmit}>
          <div>
            <h1>
              <Link className="logo" to="/">
                Great Plan
              </Link>
            </h1>
          </div>

          <div className="login-header">
            <p className="login-p">
              Hello and welcome! Log in to embark on a transformative journey of
              effectively managing your diary, schedule, and expenses.
            </p>
            <br></br>
          </div>
          <div className="form-row">
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-row">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
          <div className="login-error">{error && <p>{error}</p>}</div>
          <div className="signup-text">
            Don't have an account? <a href="/signup">Signup here</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
