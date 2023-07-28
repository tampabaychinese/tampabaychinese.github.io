import React from "react";

import ReactCardCarousel from "react-card-carousel";
import english from "../data/Doctrine.json";
import chinese from "../data/Doctrine_Chinese.json";
import "./Doctrine.css";

const Doctrine = (props) => {
  const data = props.language === "English" ? english : chinese;

  return (
    <div>
      <div className="titleImageContainer">
        <h1>{data.title}</h1>
      </div>
      <div className="coreBeliefsContainer" data-aos="fade-up">
        <h3>{data.coreBeliefsSection.title}</h3>
        <div className="mobileCoreBeliefsCard" data-aos="fade-up">
          <p>
            {data.coreBeliefsSection.coreBeliefs.map((x, _) => (
              <div>
                {x} <br />
              </div>
            ))}
          </p>
        </div>
        <div className="carouselContainer">
          <ReactCardCarousel autoplay={true} autoplay_speed={4000}>
            {data.coreBeliefsSection.coreBeliefs.map((x, _) => (
              <div className="coreBeliefsCard">{x}</div>
            ))}
          </ReactCardCarousel>
        </div>
      </div>
      <div className="fullDoctrineContainer">
        <h3 data-aos="fade-up">{data.doctrineStatementSection.title}</h3>
        <div className="fullDoctrineBody">
          {data.doctrineStatementSection.articles.map((x, _) => (
            <div>
              <h4 data-aos="fade-up">{x.title}</h4>
              {x.body.map((y, _) => (
                <p data-aos="fade-up">{y}</p>
              ))}
            </div>
          ))}
        </div>
        <h4 className="doctrineDisclaimer" data-aos="fade-up">
          <i>{data.doctrineStatementSection.disclaimer}</i>
        </h4>
      </div>
    </div>
  );
};

export default Doctrine;
