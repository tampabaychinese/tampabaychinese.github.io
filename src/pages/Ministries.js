import React from "react";

import ExamplePic from "../assets/familyPaster.jpeg";
import FellowshipCard from "../components/fellowshipCard";

import english from "../data/Ministries.json";
import chinese from "../data/Ministries_Chinese.json";
import "./Ministries.css";

const Ministries = (props) => {
  const data = props.language === "English" ? english : chinese;

  const classes = {
    sundaySchool: [
      {
        name: "Adult Sunday School",
        time: "9:30am-10:30am",
        description:
          "Every Sunday before worship. There are two classes offered. One studies the Old Testament and the other studies the New Testament. ",
        image: ExamplePic,
      },
      {
        name: "Youth Sunday School",
        time: "9:30am-10:30am",
        description:
          "Every Sunday before worship. Youth Sunday School welcomes young adults age 12-17.",
        image: ExamplePic,
      },
      {
        name: "Children's Sunday School",
        time: "10:45am-12pm",
        description:
          "Teachers of Children’s Sunday School are dedicated to the teaching of Biblical truths to the young children through storytelling, role-playing, hands-on experiences, games and songs. ",
        image: ExamplePic,
      },
    ],
    adultBibleStudy: [
      {
        name: "Friday Bible Study",
        time: "7:30pm-8:30pm",
        description:
          "Currently through Zoom. Friday night’s Bible Study Class focuses on topical studies and discussions.",
        image: ExamplePic,
      },
      {
        name: "Sarasota Bible Study",
        time: "TBD",
        description:
          "Brothers and sisters living in both Tampa Bay areas and Sarasota get to gather together on Saturdays to worship God with Hymn songs and message.  They also treat one another with hospitality and share delicious food.　",
        image: ExamplePic,
      },
    ],
    discipleship: [
      {
        name: "Wednesday Discipleship",
        time: "7:30pm-8:30pm",
        description:
          "Wednesday night’s “Discipleship Class” was designed especially for those brothers and sisters who are devoted to God and church services.  In depth studies are instructed emphasizing the importance of theologies, doctrine and Bible studying, which well prepare and equip those who lead the Friday night’s Bible Study Class.　",
        image: ExamplePic,
      },
    ],
  };
  return (
    <div>
      <div className="shortImageContainer">
        <h1>{data.title}</h1>
      </div>
      <div className="fellowshipDescription">
        <p>{data.subtitle}</p>
      </div>
      <div>
        <p>
          Note that the below pictures should be replaced with pictures of each
          class/ministry
        </p>
        <div className="sundaySchoolContainer">
          <h3 data-aos="fade-up">SUNDAY SCHOOL FOR ALL AGES</h3>
          {classes["sundaySchool"].map((x, _) => (
            <FellowshipCard
              name={x.name}
              time={x.time}
              description={x.description}
              img={x.image}
            />
          ))}
        </div>
        <div className="discipleshipContainer">
          <h3 data-aos="fade-up">DISCIPLESHIP</h3>
          <p data-aos="fade-up">
            <b style={{ textTransform: "uppercase" }}>
              {classes["discipleship"][0].time}
            </b>
          </p>
          <p style={{ textAlign: "left" }} data-aos="fade-up">
            {classes["discipleship"][0].description}
          </p>
        </div>
        <div className="bibleStudyContainer">
          <h3 data-aos="fade-up">ADULT BIBLE STUDY</h3>
          {classes["adultBibleStudy"].map((x, _) => (
            <FellowshipCard
              name={x.name}
              time={x.time}
              description={x.description}
              img={x.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Ministries;
