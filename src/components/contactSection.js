import React from "react";
import { FaFacebook, FaYoutube, FaEnvelope } from "react-icons/fa";

import "./contactSection.css";

const ContactSection = (props) => {
  return (
    <div>
      <h2>{props.data.title}</h2>
      <div>
        <p className="infoText">
          <b>Phone:</b> {props.data.phone}
        </p>
        <p className="infoText">
          <b>Email:</b>{" "}
          <a
            className="standardURL"
            onClick={() => window.open("mailto:" + props.data.email)}
          >
            {props.data.email}
          </a>
          <div className="socialButtonContainer">
            <button
              className="socialIconButton"
              //   style={{ color: "#4267B2" }}
              onClick={() => window.open(props.data.facebook)}
            >
              <FaFacebook />
            </button>
            <button
              className="socialIconButton"
              //   style={{ color: "black" }}
              onClick={() => window.open("mailto:" + props.data.email)}
            >
              <FaEnvelope />
            </button>
            <button
              className="socialIconButton"
              //   style={{ color: "red" }}
              onClick={() => window.open(props.data.youtube)}
            >
              <FaYoutube />
            </button>
          </div>
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
