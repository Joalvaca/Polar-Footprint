import React from "react";
import Goat from "./goatlogo.png";
import Stockx from "./stocklogo.png";
import "./Resell.css";

function Resell() {
  return (
    <main>
      <div className="resell-container">
        <a href="https://stockx.com/" target="_blank" rel="noopener noreferrer">
          <img className="stockx-logo" src={Stockx} alt="stockxlogo" />
        </a>
        <a
          href="https://www.goat.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="goat-logo" src={Goat} alt="goatlogo" />
        </a>
      </div>
      <p className="intro-text">
        Use the links above to guide your way through the most popular resell
        sites.
      </p>
    </main>
  );
}

export default Resell;
