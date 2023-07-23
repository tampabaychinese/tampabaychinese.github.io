import React from "react";

import CircleCard from "../components/circleCard";
import "./Online.css";

const Online = () => {
  const resources = [
    {
      name: "Sunday Worship Live Stream",
      caption: "10:45am-12pm",
      subtitle: "",
      href: "https://www.youtube.com/@tcbcchurch727/streams",
      icon: "youtube",
    },
    {
      name: "Sermon & Bible Study Archive",
      caption: "Through YouTube",
      subtitle: "",
      href: "https://www.youtube.com/@tcbcchurch727/videos",
      icon: "youtube",
    },
    {
      name: "Facebook",
      caption: "Get social with us!",
      subtitle: "",
      href: "https://www.youtube.com/@tcbcchurch727/videos",
      icon: "facebook",
    },
    {
      name: "Email",
      caption: "jhsieh1@tampabay.rr.com",
      subtitle: "",
      href: "mailto:jhsieh1@tampabay.rr.com",
      icon: "email",
    },
    {
      name: "Zoom",
      caption: "Call us for Zoom info",
      subtitle: "",
      href: "https://zoom.us/",
      icon: "laptop",
    },
  ];
  return (
    <div>
      <div className="shortImageContainer">
        <h1>ONLINE</h1>
      </div>
      <div className="onlineContainer">
        <h3 data-aos="fade-up">Stay Connected Wherever, Whenever.</h3>
        <p data-aos="fade-up">
          <i>
            TCBC offers a variety of online resources so that you can stay
            connected anywhere, anytime.
          </i>
        </p>
        <spacer></spacer>
        <div>
          {resources.map((x, _) => (
            <CircleCard
              name={x.name}
              caption={x.caption}
              subtitle={x.subtitle}
              inPerson={false}
              href=""
              icon={x.icon}
              color="#d1b75e"
              onClick={() => {
                window.open(x.href);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Online;
