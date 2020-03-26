import React from "react";
import "./Intro.css";
import iceberg from "../../images/iceberg.png";

function Intro() {
  return (
    <main>
      <div className="intro-container">
        <div className="pic-container">
          <img className="intro-pic" src={iceberg} alt="logo" />
        </div>
        <div className="intro-text">
          <p>
            Polar Footprints was designed for members in Polar Chefs, a sneaker
            reselling group. Each section of Polar Footprints is designed to aid
            the user in their reselling journey.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Intro;
