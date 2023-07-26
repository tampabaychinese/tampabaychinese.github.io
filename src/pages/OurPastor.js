import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

import PastorPic from "../assets/pastor.jpg";
import data from "../data/OurPastor.json";
import "./OurPastor.css";

const OurPastor = () => {
  return (
    <div>
      <div className="shortImageContainer">
        <h1>{data.title}</h1>
      </div>
      <div className="ourPastorContainer">
        <div className="pastorRow">
          <img src={PastorPic} className="pastorPic" data-aos="fade-up"></img>
          <div data-aos="fade-up">
            <p data-aos="fade-up">
              <b style={{ textTransform: "uppercase" }}>
                {data.pastorSection.title}
              </b>
            </p>
            {data.pastorSection.body.map((x, _) => (
              <p data-aos="fade-up">{x}</p>
            ))}
            <p data-aos="fade-up">
              <br />
              <br />
              <b style={{ textTransform: "uppercase" }}>
                {data.pastorSection.contact.title}
              </b>
            </p>
            <p data-aos="fade-up">
              <FaPhone /> - {data.pastorSection.contact.phone}
            </p>
            <p data-aos="fade-up">
              <FaEnvelope /> -{" "}
              <a
                className="standardURL"
                onClick={() =>
                  window.open("mailto:" + data.pastorSection.contact.email)
                }
              >
                {data.pastorSection.contact.email}
              </a>
            </p>
          </div>
        </div>
        <img
          src={PastorPic}
          className="pastorPicMobile"
          data-aos="fade-up"
        ></img>
      </div>
    </div>
  );
};
export default OurPastor;
