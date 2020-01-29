import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "./polarchef.png";

function Header() {
  return (
    <header>
      <Link to="/">
        <img className="logo-header" src={Logo} alt="logo" />
      </Link>
      <Link
        className="links-header"
        style={{ textDecoration: "none" }}
        to="/intro"
      >
        <p>Intro</p>
      </Link>
      <Link
        className="links-header"
        style={{ textDecoration: "none" }}
        to="/footprint"
      >
        <p>FootPrint</p>
      </Link>
      <Link
        className="links-header"
        style={{ textDecoration: "none" }}
        to="/contact"
      >
        <p>Contact</p>
      </Link>
      <Link
        className="links-header"
        style={{ textDecoration: "none" }}
        to="/resell"
      >
        <p>Resell</p>
      </Link>
    </header>
  );
}

export default Header;
