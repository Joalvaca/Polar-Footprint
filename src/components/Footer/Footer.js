import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="footer-section">
        <div className="footer-icons">
          <a
            href="https://www.polarchefs.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
            className="polar-site"
          >
            Polarchefs
          </a>
        </div>
        <div className="footer-icons">
          <a
            href="https://twitter.com/polarchefs"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
            className="site"
          >
            <FontAwesomeIcon icon={["fab", "twitter"]} size="3x" />
          </a>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.instagram.com/polarchefs"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
            className="site"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
          </a>
        </div>
        <div className="footer-icons">
          <a
            href="https://www.goat.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
            className="polar-site"
          >
            Goat
          </a>
        </div>
        <div className="footer-icons">
          <a
            href="https://stockx.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Linkedin"
            className="polar-site"
          >
            Stock x
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
