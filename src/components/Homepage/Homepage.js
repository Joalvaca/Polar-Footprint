import React from "react";
import "./Homepage.css";
import Logo from "../../images/polarchef.png";
import { Link } from "react-router-dom";
import Sneaker from "../../images/sneaker.jpg";

function Homepage() {
  return (
    <main>
      <div className="enter-box">
        <div className="homepage-logo">
          <img className="polar-logo" src={Logo} alt="logo" />
        </div>
        <div className="home-links">
          <Link
            className="password"
            style={{ textDecoration: "none" }}
            to="Login"
          >
            <h1 className="login-link">Login</h1>
          </Link>
          <Link style={{ textDecoration: "none" }} to="Register">
            <h1 className="register-link">Register</h1>
          </Link>
        </div>
      </div>
      <div className="homepage-container">
        <h2 className="homepage-logo-name">Polar Footprints</h2>
        <div className="homepage-intro">
          Welcome to Polar Footprints! This was designed to help you get started
          on your reselling journey, by keeping track of your inventory and
          sales. Click the login at the top right and use the demo credentials
          provided, or you may make your own credentials.
        </div>
        <div className="homepage-image">
          <img className="sneaker-image" src={Sneaker} alt="sneaker picture" />
        </div>
      </div>
    </main>
  );
}

export default Homepage;
