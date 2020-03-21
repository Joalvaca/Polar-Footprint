import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

function Contact() {
  return (
    <main>
      <div className="contact-container">
        <a
          href="https://www.instagram.com/polarchefs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="9x" icon={["fab", "instagram"]} />
        </a>
        <a
          href="https://twitter.com/polarchefs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon size="9x" icon={["fab", "twitter"]} />
        </a>
      </div>
      <p className="intro-text">
        Polar chefs is currently out of stock, please use the above links to
        follow us on our Instagram and Twitter, and tune in for the opportunitiy
        to join the Polar Family.
      </p>
    </main>
  );
}

export default Contact;
