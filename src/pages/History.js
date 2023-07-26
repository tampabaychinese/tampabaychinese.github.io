import React from "react";

import data from "../data/History.json";
import "./History.css";

const History = () => {
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
