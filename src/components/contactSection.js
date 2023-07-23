import React from "react";
import { FaFacebook, FaYoutube, FaEnvelope } from "react-icons/fa";

import "./contactSection.css";

const ContactSection = () => {
  return (
    <div>
      <h2>CONNECT WITH US</h2>
      <div>
        <p>
          <b>Phone:</b> (727) 546-3057
        </p>
        <p>
          <b>Email:</b>{" "}
          <a
            className="standardURL"
            onClick={() => window.open("mailto:jhsieh1@tampabay.rr.com")}
          >
            jhsieh1@tampabay.rr.com
          </a>
          <div>
            <button
              className="socialIconButton"
              onClick={() =>
                window.open("https://www.facebook.com/groups/282579880948/")
              }
            >
              <FaFacebook />
            </button>
            <button
              className="socialIconButton"
              onClick={() =>
                window.open("https://www.youtube.com/@tcbcchurch727")
              }
            >
              <FaYoutube />
            </button>
            <button
              className="socialIconButton"
              onClick={() => window.open("mailto:jhsieh1@tampabay.rr.com")}
            >
              <FaEnvelope />
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
