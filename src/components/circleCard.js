import {
  FaLaptop,
  FaChurch,
  FaYoutube,
  FaFacebook,
  FaEnvelope,
  FaBible,
  FaDrumstickBite,
} from "react-icons/fa";
import "./circleCard.css";

const CircleCard = (props) => {
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
          {props.icon === "church" ? (
            <FaChurch style={{ fontSize: "40px" }} />
          ) : props.icon === "laptop" ? (
            <FaLaptop style={{ fontSize: "40px" }} />
          ) : props.icon === "youtube" ? (
            <FaYoutube style={{ fontSize: "40px" }} />
          ) : props.icon === "food" ? (
            <FaDrumstickBite style={{ fontSize: "40px" }} />
          ) : props.icon === "book" ? (
            <FaBible style={{ fontSize: "40px" }} />
          ) : props.icon === "facebook" ? (
            <FaFacebook style={{ fontSize: "40px" }} />
          ) : (
            <FaEnvelope style={{ fontSize: "40px" }} />
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
      <h3 style={{ fontSize: "16px" }}>{props.caption}</h3>
    </div>
  );
};

export default CircleCard;
