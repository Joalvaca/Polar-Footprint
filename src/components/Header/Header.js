import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/homepage">
        <h2>Polar Logo</h2>{" "}
      </Link>
      <Link to="/intro">
        {" "}
        <p>Intro</p>{" "}
      </Link>
      <Link to="/footprint">
        {" "}
        <p>FootPrint</p>
      </Link>
      <Link to="/contact">
        {" "}
        <p>Contact</p>
      </Link>

      <Link to="/resell">
        {" "}
        <p>Resell</p>
      </Link>
    </header>
  );
}

export default Header;
