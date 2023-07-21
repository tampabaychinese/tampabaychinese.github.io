import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2 style={{ marginTop: "100px" }}>Page Not Found :(</h2>
      <Link to="/">
        <button className="primaryButton">Go To Home</button>{" "}
      </Link>
    </div>
  );
};
export default NotFound;
