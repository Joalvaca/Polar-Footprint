import React from "react";
import "./Homepage.css";
import Logo from "./polarchef.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main>
      <div className="enter-box">
        <Link
          className="password-box"
          style={{ textDecoration: "none" }}
          to="Intro"
        >
          <h1>Enter Using Password</h1>
        </Link>
      </div>
      <div className="logo-container">
        <img src={Logo} alt="logo" />
        <h2 className="logo-name">POLAR CHEFS</h2>
      </div>
    </main>
  );
}

export default Homepage;
