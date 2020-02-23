import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Logo from "./polarchef.png";

function Header(props) {
  const headerLinks = {
    Intro: "/intro",
    FootPrint: "/footprints",
    Contact: "/contact",
    Resell: "/resell"
  };

  return (
    <header>
      <Link to="/">
        <img className="logo-header" src={Logo} alt="logo" />
      </Link>
      {Object.entries(headerLinks).map((link, i) => {
        return (
          <Link
            key={`header-link-${i}`}
            className={
              props.location.pathname.indexOf(link[1]) === 0
                ? "links-header active"
                : "links-header"
            }
            to={link[1]}
          >
            <p>{link[0]}</p>
          </Link>
        );
      })}
    </header>
  );
}

export default Header;
