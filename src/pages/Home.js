import React from "react";
import CircleCard from "../components/circleCard";
import { useState } from "react";
import $ from "jquery";

import ContactSection from "../components/contactSection";
import english from "../data/Home.json";
import chinese from "../data/Home_Chinese.json";
import "./Home.css";

const Home = (props) => {
  const data = props.language === "English" ? english : chinese;
  const meetings = data.scheduleSection.meetings;

  const [currentMeeting, setCurrentMeeting] = useState(-1);
  const [currentChildMeeting, setCurrentChildMeeting] = useState(-1);

  $.fn.isOnScreen = (ref) => {
    const rect = $(ref)[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.right <= window.innerWidth &&
      rect.bottom <= window.innerHeight
    );
  };

  const executeScroll = (ref, forceScroll = false) => {
    setTimeout(function () {
      if (!$(ref).isOnScreen(ref) || forceScroll) {
        const y = $(ref).offset().top;
        window.scrollTo({ top: y - 80, behavior: "smooth" });
      }
    }, 100);
  };

  const renderMeetingDetailsBody = (meeting, childMeeting = false) => {
    return (
      <div>
        <h4 style={{ textTransform: "uppercase" }}>{meeting.name}</h4>
        {meeting.time !== "TBD" &&
        meeting.time !== "待定" &&
        meeting.weekly === true ? (
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
          {data.announcementSection.announcements.length > 0 ? (
            <button
              className="announcementButton"
              onClick={() => {
                executeScroll("#annoucements", true);
              }}
            >
              {data.announcementSection.annoucementButtonTitle}
            </button>
          ) : null}
        </div>
      </div>
      {data.announcementSection.announcements.length > 0 ? (
        <div className="annoucementContainer" id="annoucements">
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
            onClick={() => {
              if (
                currentMeeting >= 0 &&
                meetings[currentMeeting].childMeetings.length > 0
              ) {
                setCurrentChildMeeting(-1);
              }
              setCurrentMeeting(i);
              executeScroll("#meetingDetails");
            }}
          />
        ))}
      </div>
      {currentMeeting === -1 ? (
        <div id="meetingDetails"></div>
      ) : (
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
                    color={"#8B0000"}
                    subColor={"#DEB54D"}
                    onClick={() => {
                      setCurrentChildMeeting(i);
                      executeScroll("#childMeetingDetails");
                    }}
                  />
                ))}
                {currentChildMeeting === -1 ? (
                  <div id="childMeetingDetails"></div>
                ) : (
                  <div id="childMeetingDetails" className="childMeetingDetails">
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
