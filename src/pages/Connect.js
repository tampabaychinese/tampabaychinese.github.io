import React from "react";

import ContactSection from "../components/contactSection";
import "./Connect.css";
import data from "../data/Connect.json";

const Connect = () => {
  return (
    <div>
      <div className="shortImageContainer">
        <h1>{data.title}</h1>
      </div>
      <div className="goldSpacer"></div>
      <div className="addressContainer">
        <h3>{data.addressSection.title}</h3>
        <p>{data.addressSection.subtitle}</p>
        <button
          className="primaryButton"
          onClick={() => window.open(data.addressSection.button.link)}
        >
          {data.addressSection.button.text}
        </button>
      </div>
      <div className="officeHoursContainer">
        <ContactSection data={data.contactSection} />
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
