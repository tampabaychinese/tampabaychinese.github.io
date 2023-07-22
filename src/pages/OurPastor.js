import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

import PastorPic from "../assets/pastor.jpg";
import "./OurPastor.css";

const OurPastor = () => {
  return (
    <div>
      <div className="shortImageContainer">
        <h1>OUR PASTOR</h1>
      </div>
      <div className="ourPastorContainer">
        <div className="pastorRow">
          <img src={PastorPic} className="pastorPic" data-aos="fade-up"></img>
          <div data-aos="fade-up">
            <p data-aos="fade-up">
              <b style={{ textTransform: "uppercase" }}>ABOUT PASTOR HSIEH</b>
            </p>
            <p data-aos="fade-up">
              Pastor Hsieh was ordained as a part time pastor in November 1998.
              He began his full time service in September 1999 while attending
              Dallas Theological Seminary. In the year of 2008, he graduated
              from DTS.
            </p>
            <p data-aos="fade-up">
              Pastor Hsieh and his wife Susan have two grown up sons. Both the
              elder son Jonathan and the younger son Brian are now serving at
              Dallas churches after finishing study at Dallas Theological
              Seminary in Texas.
            </p>
            <p data-aos="fade-up">
              <br />
              <br />
              <b style={{ textTransform: "uppercase" }}>Contact Pastor Hsieh</b>
            </p>
            <p data-aos="fade-up">
              <FaPhone /> - 727-580-4114
            </p>
            <p data-aos="fade-up">
              <FaEnvelope /> -{" "}
              <a
                className="standardURL"
                onClick={() => window.open("mailto:jhsieh1@tampabay.rr.com")}
              >
                jhsieh1@tampabay.rr.com
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
