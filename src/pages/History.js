import React from "react";

import english from "../data/History.json";
import chinese from "../data/History_Chinese.json";
import "./History.css";

const History = (props) => {
  const data = props.language === "English" ? english : chinese;

  return (
    <div>
      <div className="churchHistoryImageContainer">
        <div className="historyDescription">
          <h1>{data.title}</h1>
          <div>
            {data.body.map((x, _) => (
              <p>{x}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default History;
