import { FaLaptop, FaChurch } from "react-icons/fa";
import "./meetingCard.css";

const MeetingCard = (props) => {
  return (
    <div className="meetingCardContainer" data-aos="fade-up">
      <a
        className="meetingCircle"
        href={props.href}
        onClick={() => {
          props.onClick();
        }}
        style={{ backgroundColor: props.color ? props.color : "#DEB54D" }}
      >
        <div>
          {props.inPerson ? (
            <FaChurch style={{ fontSize: "40px" }} />
          ) : (
            <FaLaptop style={{ fontSize: "40px" }} />
          )}
          <p className="meetingTitle">{props.name}</p>
          {props.subtitle != null ? (
            <p
              className="circleSubtitle"
              style={{
                color: props.subColor ? props.subColor : "darkblue",
              }}
            >
              {props.subtitle}
            </p>
          ) : null}
        </div>
      </a>
      <h3 style={{ fontSize: "16px" }}>{props.time}</h3>
    </div>
  );
};

export default MeetingCard;
