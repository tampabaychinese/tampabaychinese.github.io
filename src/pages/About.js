import React from "react";
import "./About.css";
import PastorPic from "../assets/familyPaster.jpeg";

const About = () => {
  return (
    <div>
      <div className="shortImageContainer">
        <h1>ABOUT US</h1>
      </div>
      <div className="contentButtons">
        <a href="#info">
          <button className="primaryButton">General Info</button>
        </a>
        <a href="#history">
          <button className="primaryButton">Church History</button>
        </a>
        <a href="#pastor">
          <button className="primaryButton">Our Pastor</button>
        </a>
      </div>
      <div className="infoContainer" id="info">
        <h3 data-aos="fade-up">GENERAL INFORMATION</h3>
        <table className="infoTable" data-aos="fade-up">
          <tr>
            <th className="infoCard">
              <b>Address:</b> <br />
              6281 90th AVE. N, Pinellas Park, FL33782
            </th>
            <th className="infoCard">
              <b>Phone number:</b> <br />
              (727) 546-3057
            </th>
            <th className="infoCard">
              <b>Fax number:</b> <br />
              (727) 546-3001
            </th>
            <th className="infoCard">
              <b>Office Hours:</b> <br />
              Monday to Thursday between 9:00 am—3:00 pm
            </th>
          </tr>
        </table>
      </div>
      <div className="historyContainer" id="history">
        <h3 data-aos="fade-up">CHURCH HISTORY</h3>
        <p data-aos="fade-up">
          The Chinese Fellowship began its Sunday Service at Seminole First
          Baptist Church in March 1993. In January 2000, it became an
          independent church and changed its name to Tampabay Chinese Baptist
          Church. It also relocated to the First Baptist Church of St.
          Petersburg with the use of its facilities. In July 2008, we moved into
          our own church after the construction was completed.
        </p>
      </div>
      <div className="pastorContainer" id="pastor">
        <h3 data-aos="fade-up">OUR PASTOR</h3>
        <img
          src={PastorPic}
          className="pastorPicMobile"
          data-aos="fade-up"
        ></img>
        <div className="pastorRow">
          <img src={PastorPic} className="pastorPic" data-aos="fade-up"></img>
          <div data-aos="fade-up">
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
              <b>Contact Pastor Hsieh</b>
            </p>
            <p data-aos="fade-up">Phone: 727-580-4114</p>
            <p data-aos="fade-up">Email: jhsieh1@tampabay.rr.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
