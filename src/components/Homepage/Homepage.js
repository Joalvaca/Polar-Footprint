import React from "react";
import "./Homepage.css";
import Logo from "../../images/polarchef.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main>
      <div className="enter-box">
        <Link
          className="password-box"
          style={{ textDecoration: "none" }}
          to="login"
        >
          <h1>Login</h1>
        </Link>
      </div>
      <div className="logo-container">
        <img src={Logo} alt="logo" />
        <h2 className="homepage-logo-name">Polar Footprints</h2>
        <div className="homepage-intro">
          Welcome to Polar Footprints! This was designed to help you get started
          on your reselling journey, by keeping track of your inventory and
          sales. Click the login at the top right and use the demo credentials
          provided, or you may make your own credentials.
        </div>
      </div>
    </main>
  );
}

export default Homepage;
