import React from "react";
import CircleCard from "../components/circleCard";
import { useState } from "react";

import ContactSection from "../components/contactSection";
import data from "../data/Home.json";
import "./Home.css";

const Home = () => {
  const meetings = data.scheduleSection.meetings;

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
          <h1>{data.title}</h1>
          <h4>{data.subtitle}</h4>
          <h4>
            This is currently placeholder text and a random background image
          </h4>
        </div>
      </div>
      <div className="meetingsContainer">
        <h2 data-aos="fade-up">{data.scheduleSection.title}</h2>
        <p data-aos="fade-up">
          <i>{data.scheduleSection.subtitle}</i>
        </p>
        {meetings.map((x, i) => (
          <CircleCard
            name={x.name}
            caption={x.time}
            subtitle={x.subtitle}
            icon={x.inPerson ? "church" : "laptop"}
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
                  <CircleCard
                    name={x.name}
                    caption={x.time}
                    subtitle={x.subtitle}
                    icon={x.icon}
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
          <ContactSection data={data.contactSection} />
        </div>
      </div>
    </div>
  );
};
export default Home;
