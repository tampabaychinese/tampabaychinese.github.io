import React from "react";
import { FaFacebook, FaYoutube, FaEnvelope } from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="shortImageContainer">
        <h1>CONTACT US</h1>
      </div>
      <div className="goldSpacer"></div>
      <div className="addressContainer">
        <h4 data-aos="fade-right">CHURCH ADDRESS:</h4>
        <p data-aos="fade-right">
          6281 90th Ave. North, Pinellas Park, FL 33782
        </p>
        <button
          className="primaryButton"
          onClick={() =>
            window.open(
              "https://www.google.com/maps/dir//Tampa+Bay+Chinese+Baptist+Church,+6281+90th+Ave+N,+Pinellas+Park,+FL+33782/@27.8540872,-82.7632231,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88c2e424b3ed6bd5:0xd548df28a069ed1a!2m2!1d-82.7220236!2d27.8540094!3e0?entry=ttu"
            )
          }
        >
          GET DIRECTIONS
        </button>
      </div>
      <div className="officeHoursContainer">
        <h2 data-aos="fade-left">CONNECT WITH US</h2>
        <div data-aos="fade-left">
          <p>
            <b>Phone:</b> (727) 546-3057
          </p>
          <p>
            <b>Email:</b>{" "}
            <a
              className="pastorEmail"
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
      <div>
        <div>
          <div>
            <iframe
              width="100%"
              height="600"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6281%2090th%20Ave.%20North,%20Pinellas%20Park,%20FL%2033782+(TCBC)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
