import React from "react";
import "./simpleTwoColumnContainer.css";

const SimpleTwoColumnContainer = (props) => {
  return (
    <div
      className="twoColumnlContainer"
      style={{ backgroundColor: props.color }}
    >
      <div className="containerRow" data-aos="fade-up">
        {props.imageLeft ? (
          <img
            src={props.picture}
            className="containerPic"
            style={{ marginRight: "50px" }}
          />
        ) : null}
        <div className="textContainer">
          <div>
            <h2 className="rowTitle">{props.title}</h2>
            <p>{props.description}</p>
          </div>
        </div>
        {!props.imageLeft ? (
          <img
            src={props.picture}
            className="containerPic"
            style={{ marginLeft: "50px" }}
          />
        ) : null}
      </div>
      <img
        src={props.picture}
        className="containerPicMobile"
        data-aos="fade-up"
      />
    </div>
  );
};

export default SimpleTwoColumnContainer;
