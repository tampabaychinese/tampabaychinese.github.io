import React from "react";
import { FaFacebook, FaYoutube, FaEnvelope } from "react-icons/fa";

import "./contactSection.css";

const ContactSection = (props) => {
  return (
    <div>
      <h2>{props.data.title}</h2>
      <div>
        <p className="infoText">
          <b>{props.data.phoneSection.title}:</b>{" "}
          {props.data.phoneSection.phone}
        </p>
        <p className="infoText">
          <b>{props.data.emailSection.title}:</b>{" "}
          <a
            className="standardURL"
            onClick={() =>
              window.open("mailto:" + props.data.emailSection.email)
            }
          >
            {props.data.emailSection.email}
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
              onClick={() =>
                window.open("mailto:" + props.data.emailSection.email)
              }
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
