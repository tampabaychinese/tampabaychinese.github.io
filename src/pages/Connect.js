import React from "react";

import ContactSection from "../components/contactSection";
import "./Connect.css";

const Connect = () => {
  return (
    <div>
      <div className="shortImageContainer">
        <h1>CONNECT</h1>
      </div>
      <div className="goldSpacer"></div>
      <div className="addressContainer">
        <h4>CHURCH ADDRESS:</h4>
        <p>6281 90th Ave. North, Pinellas Park, FL 33782</p>
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
        <ContactSection />
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

export default Connect;
