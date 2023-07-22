import React from "react";
import MeetingCard from "../components/meetingCard";
import { useState } from "react";

import ContactSection from "../components/contactSection";
import "./Home.css";

const Home = () => {
  const meetings = [
    {
      name: "Sunday Gathering",
      time: "9:30am-12pm",
      subtitle: "",
      weekDay: "Sunday",
      inPerson: true,
      details: "",
      childMeetings: [
        {
          name: "Sunday School",
          time: "9:30am-10:30am",
          weekDay: "Sunday",
          subtitle: "",
          inPerson: true,
          details:
            "We offer 4 different Sunday School classes. Adult, Youth, and English Sunday Schools are from 9:30am-10:30am. Children's Sunday School is from 10:45am-12pm.",
        },
        {
          name: "Sunday Worship",
          time: "10:30am-12pm",
          subtitle: "(with online streaming)",
          weekDay: "Sunday",
          inPerson: true,
          details: "Also available on live stream through YouTube",
          url: "https://www.youtube.com/@tcbcchurch727/streams",
        },
      ],
    },
    {
      name: "Wednesday Discipleship",
      time: "7:30pm-8:30pm",
      subtitle: "(Zoom only)",
      weekDay: "Wednesday",
      inPerson: false,
      details: "Please Call for Zoom meeting information.",
      childMeetings: [],
    },
    {
      name: "Friday Bible Study",
      time: "7:30pm-8:30pm",
      subtitle: "(Zoom only)",
      weekDay: "Friday",
      inPerson: false,
      details: "Please Call for Zoom meeting information.",
      childMeetings: [],
    },
    {
      name: "Saturday Sarasota Bible Study",
      time: "TBD",
      subtitle: "",
      weekDay: "Saturday",
      inPerson: true,
      details:
        "Paused, please join us online on Friday for bible study (using Zoom).",
      childMeetings: [],
    },
  ];

  const [currentMeeting, setCurrentMeeting] = useState(-1);
  const [currentChildMeeting, setCurrentChildMeeting] = useState(-1);

  const renderMeetingDetailsBody = (data, childMeeting = false) => {
    return (
      <div>
        <h4 style={{ textTransform: "uppercase" }}>{data.name}</h4>
        {data.time !== "TBD" ? (
          <div>
            <p>
              {"Every " + data.weekDay + " at "}
              <b style={{ color: "darkred" }}>{data.time}</b>
            </p>
            <p>
              <i>
                {!childMeeting
                  ? data.inPerson
                    ? "On site at church"
                    : "Online using Zoom"
                  : null}
              </i>
            </p>
          </div>
        ) : (
          <div>
            <b style={{ color: "darkred" }}>{data.time}</b>
          </div>
        )}
        <p>{data.details}</p>
        {data.url ? (
          <a
            onClick={() => window.open(data.url)}
            className="standardURL"
            style={{ overflowWrap: "break-word" }}
          >
            {data.url}
          </a>
        ) : null}
      </div>
    );
  };

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
        <h2 data-aos="fade-up">JOIN US FOR WORSHIP</h2>
        <p data-aos="fade-up">
          <i>Click for more details</i>
        </p>
        {meetings.map((x, i) => (
          <MeetingCard
            name={x.name}
            time={x.time}
            subtitle={x.subtitle}
            inPerson={x.inPerson}
            href="#meetingDetails"
            onClick={() => {
              if (
                currentMeeting >= 0 &&
                meetings[currentMeeting].childMeetings.length > 0
              ) {
                setCurrentChildMeeting(-1);
              }
              setCurrentMeeting(i);
            }}
          />
        ))}
      </div>
      {currentMeeting === -1 ? null : (
        <div className="meetingDetailsContainer" id="meetingDetails">
          <div data-aos="fade-up">
            {renderMeetingDetailsBody(meetings[currentMeeting])}

            {meetings[currentMeeting].childMeetings.length > 0 ? (
              <div>
                {meetings[currentMeeting].childMeetings.map((x, i) => (
                  <MeetingCard
                    name={x.name}
                    time={x.time}
                    subtitle={x.subtitle}
                    inPerson={x.inPerson}
                    href="#childMeetingDetails"
                    color={"#8B0000"}
                    subColor={"#DEB54D"}
                    onClick={() => {
                      setCurrentChildMeeting(i);
                    }}
                  />
                ))}
                {currentChildMeeting === -1 ? null : (
                  <div
                    id="childMeetingDetails"
                    className="childMeetingDetails"
                    data-aos="fade-up"
                  >
                    {renderMeetingDetailsBody(
                      meetings[currentMeeting].childMeetings[
                        currentChildMeeting
                      ],
                      true
                    )}
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      )}
      <div className="contactContainer">
        <div data-aos="fade-up">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};
export default Home;
