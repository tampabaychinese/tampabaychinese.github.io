import React from "react";
import "./Home.css";

const styles = {
  mainImage: {
    color: "black",
  },
};

const Home = () => {
  return (
    <div style={styles.mainImage}>
      <div className="mainImageContainer">
        <h1>placeholder text here</h1>
        <h4>placeholder subtitle here</h4>
      </div>

      <h3>Home</h3>
    </div>
  );
};
export default Home;
