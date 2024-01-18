import React from "react";
import { Link } from "react-router-dom";
import Icon from "./components/Image/icon.png";
import "./Home.css";
import backgroundImage from "./components/Image/Image2.png";

function Home() {
  return <div className="App">Home Page</div>;
}

const styles = {
  backgroundImage: `url(${backgroundImage})`,
};

function MainApp() {
  return (
    <div className="Home-wrapper">
      <div className="home-header">
        <div className="home-head1">
          <div className="home-logo">
            {" "}
            <img className="home-img" src={Icon} />
          </div>
          <div className="logo">
            <h1>
              <Link className="logo" to="/">
                Great Plan
              </Link>
            </h1>
          </div>
        </div>
        <div>
          <Link to="/login">
            <button className="home-btn">Go to Web App</button>
          </Link>
        </div>
      </div>
      .
      <div className="home-bk" style={styles}>
        <h2 className="home-h2">
          <span class="title-word title-word-1">Your </span>
          <span class="title-word title-word-2">ultimate </span>
          <span class="title-word title-word-3">organizational </span>
          <span class="title-word title-word-4">tool </span>
        </h2>
      </div>
      <div className="home-section-one">
        <p>
          At{" "}
          <span
            style={{ color: "#6c3518", fontStyle: "italic", fontWeight: "600" }}
          >
            Great Plan
          </span>
          , we believe in empowering individuals to take control of their lives
          and achieve their goals.{" "}
          <span
            style={{ color: "#6c3518", fontStyle: "italic", fontWeight: "600" }}
          >
            Great Plan
          </span>{" "}
          provide you with a comprehensive platform for managing your to-do
          lists, writing diaries, tracking your spending, and exploring holidays
          worldwide, all in one convenient place.
        </p>
      </div>
      <div className="home-question">
        <h2 className="home-question-h2">
          What are the benefits of using Great Plan?
        </h2>
      </div>
      <div className="home-answer">
        <h2 className="home-answer-h2">
          <span class="title-word title-word-1">Organize. </span>
          <span class="title-word title-word-2">Reflect. </span>
          <span class="title-word title-word-3">Succeed. </span>
        </h2>
      </div>
      <div className="home-section-two">
        <div className="section-two-text">
          <h4
            style={{ fontWeight: "600", fontSize: "20px", lineHeight: "40px" }}
          >
            Stay organized
          </h4>
          <p>
            Streamline your daily tasks and activities, and track your progress
            to maximize your efficiency and accomplish more.
          </p>
        </div>
        <div>
          <img
            className="section-two-img"
            src="https://media3.giphy.com/media/frTCk80t0RXQFptuIe/giphy.gif?cid=6c09b952znvs29oh34ydce9f8r534tyzdpf67wbvhm665wmy&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
          ></img>
        </div>
      </div>
      <div className="home-section-three">
        <div>
          <img
            className="section-three-img"
            src="https://images.squarespace-cdn.com/content/v1/6254846339034a198c07dc06/1649709023060-QTGUVQ25NSNEL6DCF2QL/image-asset.gif"
          ></img>
        </div>
        <div className="section-three-text">
          <h4
            style={{ fontWeight: "600", fontSize: "20px", lineHeight: "40px" }}
          >
            Reflect and grow
          </h4>
          <p>
            Capture your thoughts, emotions, and experiences in your personal
            diary, fostering self-reflection and personal growth.
          </p>
        </div>
      </div>
      <div className="home-section-four">
        <div className="section-four-text">
          <h4
            style={{ fontWeight: "600", fontSize: "20px", lineHeight: "40px" }}
          >
            Manage your finances
          </h4>
          <p>
            Keep tabs on your expenses, and gain insights into your spending
            habits to make better financial decisions.
          </p>
        </div>
        <div>
          <img
            className="section-four-img"
            src="https://media4.giphy.com/media/NyniJ2Nf2ZzlE8GYsl/200w.gif?cid=6c09b9523j7abxgvzohpe1qdk92g8xnw8qhofh8ykac1orxv&ep=v1_gifs_search&rid=200w.gif&ct=g"
          ></img>
        </div>
      </div>
      <div className="home-section-five">
        <div>
          <img
            className="section-five-img"
            src="https://cdn.pixabay.com/animation/2023/06/13/15/13/15-13-19-191_512.gif"
          ></img>
        </div>
        <div className="section-five-text">
          <h4
            style={{ fontWeight: "600", fontSize: "20px", lineHeight: "40px" }}
          >
            Discover holidays worldwide
          </h4>
          <p>
            Explore our integrated calendar feature to search for holidays
            across different countries and plan your vacations accordingly.
          </p>
        </div>
      </div>
      <div className="footer">
        {" "}
        <p class="copyright">
          Copyright © 2024 <span>Great Plan</span>
        </p>
      </div>
    </div>
  );
}

export default MainApp;
