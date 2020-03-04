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
            Welcome to Polar Footprints, This App is designed to help keep track
            of your inventory, so that you can better manage your time, money,
            and stock. By filling out the form in the footprint tab, you can
            input specific details about your products. Please use the above
            inventory tabs to propery guide yourself to the app.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Intro;
