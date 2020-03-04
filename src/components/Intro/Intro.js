import React from "react";
import "./Intro.css";
import iceberg from "./iceberg.png";

function Intro() {
  return (
    <main>
      <div className="intro-container">
        <div className="pic-container">
          <img className="intro-pic" src={iceberg} alt="logo" />
        </div>
        <div className="intro-text">
          <p>
            Welcome to Polar Footprints, This App is designed to help keep track
            of your inventory, so that you can better manage you time, money,
            and stock. Please use the above inventory tabs to propery guide
            yourself to the app.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Intro;
