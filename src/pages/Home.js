import React from "react";
import MeetingCard from "../components/meetingCard";
import { useState } from "react";
import "./Home.css";

const Home = () => {
  const meetings = [
    {
      name: "Sunday School",
      time: "9:30am-10:30am",
      weekDay: "Sunday",
      inPerson: true,
      details:
        "We offer 4 different Sunday School classes. Adult, Youth, and English Sunday Schools are from 9:30am-10:30am. Children's Sunday School is from 10:45am-12pm.",
    },
    {
      name: "Sunday Worship",
      time: "10:45am-12pm",
      weekDay: "Sunday",
      inPerson: true,
      details: "OR live stream on YouTube: youtube.com/@tcbcchurch727",
    },
    {
      name: "Wednesday Discipleship",
      time: "7:30pm-8:30pm",
      weekDay: "Wednesday",
      inPerson: false,
      details: "Please Call for Zoom meeting information.",
    },
    {
      name: "Friday Bible Study",
      time: "7:30pm-8:30pm",
      weekDay: "Friday",
      inPerson: false,
      details: "Please Call for Zoom meeting information.",
    },
  ];

  const [currentMeeting, setCurrentMeeting] = useState(-1);

  return (
    <div>
      <div className="mainImageContainer">
        <div>
          <h1>Your attitude should be the same as that of Christ Jesus.</h1>
          <h4>Phil. 2:5</h4>
          <h4>
            This is currently placeholder text and a random background image
          </h4>
        </div>
      </div>
      <div className="meetingsContainer">
        <h3 data-aos="fade-up">JOIN US FOR WORSHIP</h3>
        <p data-aos="fade-up">
          <i>Click for more details</i>
        </p>
        {meetings.map((x, i) => (
          <MeetingCard
            name={x.name}
            time={x.time}
            inPerson={x.inPerson}
            href="#meetingDetails"
            onClick={() => {
              setCurrentMeeting(i);
            }}
          />
        ))}
      </div>
      {currentMeeting === -1 ? null : (
        <div className="meetingDetailsContainer" id="meetingDetails">
          <h4 style={{ textTransform: "uppercase" }} data-aos="fade-up">
            {meetings[currentMeeting].name}
          </h4>
          <p data-aos="fade-up">
            {"Every " + meetings[currentMeeting].weekDay + " at "}
            <b style={{ color: "darkred" }}>{meetings[currentMeeting].time}</b>
          </p>
          <p data-aos="fade-up">
            <i>
              {meetings[currentMeeting].inPerson
                ? "On site at church"
                : "Online using Zoom"}
            </i>
          </p>

          <p data-aos="fade-up">{meetings[currentMeeting].details}</p>
        </div>
      )}
    </div>
  );
};
export default Home;
