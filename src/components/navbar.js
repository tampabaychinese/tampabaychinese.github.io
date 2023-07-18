import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { DropdownMenu, DropdownToggle } from "@trendmicro/react-dropdown";

import HeartLogo from "../assets/heart.jpeg";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
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
                <Link to="/about" className="navbar-tab">
                  About
                </Link>
              </li>
              <li>
                <Link to="/doctrine" className="navbar-tab">
                  Doctrine
                </Link>
              </li>
              <li>
                <Link to="/ministries" className="navbar-tab">
                  Ministries
                </Link>
              </li>
              <li>
                <Link to="/fellowship" className="navbar-tab">
                  Fellowship
                </Link>
              </li>
              <li>
                <Link to="/contact" className="navbar-tab">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: "85px" }}></div>
    </div>
  );
};

export default Navbar;
