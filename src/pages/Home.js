import React from "react";
import CircleCard from "../components/circleCard";
import { useState } from "react";

import ContactSection from "../components/contactSection";
import english from "../data/Home.json";
import chinese from "../data/Home_Chinese.json";
import "./Home.css";

const Home = (props) => {
  const data = props.language === "English" ? english : chinese;
  const meetings = data.scheduleSection.meetings;

  const [currentMeeting, setCurrentMeeting] = useState(-1);
  const [currentChildMeeting, setCurrentChildMeeting] = useState(-1);

  const renderMeetingDetailsBody = (meeting, childMeeting = false) => {
    return (
      <div>
        <h4 style={{ textTransform: "uppercase" }}>{meeting.name}</h4>
        {meeting.time !== "TBD" && meeting.time !== "待定" ? (
          <div>
            <p>
              {props.language === "English"
                ? "Every " + meeting.weekDay + " at "
                : "每个" + meeting.weekDay + " "}
              <b style={{ color: "darkred" }}>{meeting.time}</b>
            </p>
            <p>
              <i>
                {!childMeeting
                  ? meeting.inPerson
                    ? data.scheduleSection.onsiteText
                    : data.scheduleSection.zoomText
                  : null}
              </i>
            </p>
          </div>
        ) : (
          <div>
            <b style={{ color: "darkred" }}>{meeting.time}</b>
          </div>
        )}
        <p>{meeting.details}</p>
        {meeting.url ? (
          <a
            onClick={() => window.open(meeting.url)}
            className="standardURL"
            style={{ overflowWrap: "break-word" }}
          >
            {meeting.url}
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
        </div>
      </div>
      {data.announcementSection.announcements.length > 0 ? (
        <div className="annoucementContainer">
          <h2 data-aos="fade-up">{data.announcementSection.title}</h2>
          {data.announcementSection.announcements.map((x, _) => (
            <p data-aos="fade-up">{x}</p>
          ))}
        </div>
      ) : null}
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
