import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "../../images/polarchef.png";

function Header() {
  return (
    <header>
      <Link to="/">
        <img className="logo-header" src={Logo} alt="logo" />
      </Link>
      <div className="header-title">Polar Footprints</div>
    </header>
  );
}

export default Header;
