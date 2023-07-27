import React from "react";

import english from "../data/History.json";
import chinese from "../data/History_Chinese.json";
import "./History.css";

const History = (props) => {
  const data = props.language === "English" ? english : chinese;

  return (
    <div>
      <div className="churchHistoryImageContainer">
        <div>
          <h1>{data.title}</h1>
          {data.body.map((x, _) => (
            <p>{x}</p>
          ))}
          <h4>(background for this page will be a picture of the church)</h4>
        </div>
      </div>
    </div>
  );
};
export default History;
