import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

import HeartLogo from "../assets/heart.jpeg";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={HeartLogo} className="heart-img" />
          <Link to="/" className="tcbc-title">
            Tampa bay Chinese Baptist Church
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <FaBars />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/doctrine">Doctrine</Link>
            </li>
            <li>
              <Link to="/ministries">Ministries</Link>
            </li>
            <li>
              <Link to="/fellowship">Fellowship</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
