import React from "react";

import CircleCard from "../components/circleCard";
import data from "../data/Online.json";
import "./Online.css";

const Online = () => {
  return (
    <div>
      <div className="shortImageContainer">
        <h1>{data.title}</h1>
      </div>
      <div className="onlineContainer">
        <h3 data-aos="fade-up">{data.resoursesSection.title}</h3>
        <p data-aos="fade-up">
          <i>{data.resoursesSection.subtitle}</i>
        </p>
        <spacer></spacer>
        <div>
          {data.resoursesSection.resources.map((x, _) => (
            <CircleCard
              name={x.name}
              caption={x.caption}
              subtitle={x.subtitle}
              inPerson={false}
              href="#"
              icon={x.icon}
              color="#d1b75e"
              onClick={() => {
                window.open(x.href);
                return false;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Online;
