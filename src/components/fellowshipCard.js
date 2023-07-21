import React from "react";
import "./fellowshipCard.css";

const FellowshipCard = (props) => {
  return (
    <div className="fellowshipCardContainer" data-aos="flip-up">
      <div>
        <div className="fellowshipCardImg">
          <img src={props.img} className="fellowshipImg" />
          <div className="opacityCover">
            <spacer />
          </div>
          <div className="cardName">
            <p>{props.name}</p>
            <h3>{props.time}</h3>
            <p className="cardDescription">{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FellowshipCard;
