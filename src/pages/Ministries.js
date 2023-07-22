import React from "react";

import ExamplePic from "../assets/familyPaster.jpeg";
import FellowshipCard from "../components/fellowshipCard";
import "./Ministries.css";

const Ministries = () => {
  const classes = [
    {
      name: "Youth Sunday School",
      time: "9:30am-10:30am",
      description: "description goes here",
      image: ExamplePic,
    },
    {
      name: "Youth Sunday School",
      time: "9:30am-10:30am",
      description: "description goes here",
      image: ExamplePic,
    },
    {
      name: "Youth Sunday School",
      time: "9:30am-10:30am",
      description: "description goes here",
      image: ExamplePic,
    },
    {
      name: "Youth Sunday School",
      time: "9:30am-10:30am",
      description: "description goes here",
      image: ExamplePic,
    },
  ];
  return (
    <div>
      <div className="shortImageContainer">
        <h1>FELLOWSHIP</h1>
      </div>
      <div className="fellowshipDescription">
        <p>
          TCBC provides Biblical education through all ages. We encourage every
          Christian to continually and progressively study the word of God so
          that our spiritual lives will grow together and unite as one in Jesus
          Christ.
        </p>
      </div>
      <div className="meetingsContainer">
        <h4>Example Bible Study Info Cards:</h4>
        <FellowshipCard
          name="Youth Sunday School"
          time="9:30am-10:30am"
          description="description goes here"
          img={ExamplePic}
        />
        <FellowshipCard
          name="Youth Sunday School"
          time="9:30am-10:30am"
          description="longer description goes here. background image for each bible study group can be a picture of the bible study group."
          img={ExamplePic}
        />
        {classes.map((x, _) => (
          <FellowshipCard
            name={x.name}
            time={x.time}
            description={x.description}
            img={x.image}
          />
        ))}
      </div>
    </div>
  );
};
export default Ministries;
