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
        <h2 className="logo-name">POLAR CHEFS</h2>
      </div>
    </main>
  );
}

/*

{name:'',content:'',image:'one.jpg'}
<img src={`/images/thumbnails/${res.image}`}
image: https://www.google.com/logo.png
<img src={res.image} />

*/

export default Homepage;
