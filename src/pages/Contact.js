import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="shortImageContainer">
        <h1>CONTACT US</h1>
      </div>
      <div className="addressContainer">
        <h4>CHURCH ADDRESS:</h4>
        <p>6281 90th Ave. North, Pinellas Park, FL 33782</p>
        <button className="directionsButton">GET DIRECTIONS</button>
      </div>
      <div className="officeHoursContainer">
        <h2>OFFICE HOURS</h2>
        <div>
          <p>Monday to Thursday 9:00am—3:00 pm</p>
          <p>
            <b>Phone:</b> (727) 546-3057
          </p>
          <p>
            <b>Fax:</b> (727) 546-3001
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
              scrolling="no"
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
