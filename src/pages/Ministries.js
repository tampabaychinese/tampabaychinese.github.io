import React from "react";
import SimpleTwoColumnContainer from "../components/simpleTwoColumnContainer";

import english from "../data/Ministries.json";
import chinese from "../data/Ministries_Chinese.json";
import "./Ministries.css";

const Ministries = (props) => {
  const data = props.language === "English" ? english : chinese;

  return (
    <div>
      <div className="shortImageContainer">
        <h1>{data.title}</h1>
      </div>
      <div className="fellowshipDescription">
        <p>{data.subtitle}</p>
      </div>
      <div>
        {data.ministries.map((x, i) => (
          <SimpleTwoColumnContainer
            title={x.title}
            description={x.description}
            picture={x.picture}
            imageLeft={i % 2 === 0}
            color={i % 2 === 0 ? "white" : "#f0f0f0"}
          ></SimpleTwoColumnContainer>
        ))}
      </div>
    </div>
  );
};
export default Ministries;
