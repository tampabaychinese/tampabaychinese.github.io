import { Link } from "react-router-dom";
import { FaBars, FaGlobe } from "react-icons/fa";
import { useState, useEffect } from "react";
import Dropdown, { MenuItem } from "@trendmicro/react-dropdown";
import "@trendmicro/react-buttons/dist/react-buttons.css";
import "@trendmicro/react-dropdown/dist/react-dropdown.css";

import HeartLogo from "../assets/heart.jpeg";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [languageToggle, setLanguageToggle] = useState(0);

  const tabs = ["about", "doctrine", "ministries", "fellowship", "contact"];

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    if (!window.language) {
      window.language = "English";
    }
    console.log(window.language);
  }, []);

  const mapKeyToLangauge = (key) => {
    return {
      0: "English",
      1: "中文版",
    }[key];
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
              {tabs.map((x, i) => (
                <li>
                  <Link to={"/" + x} className="navbar-tab">
                    {x}
                  </Link>
                </li>
              ))}
              <li>
                <Dropdown
                  onSelect={(eventKey) => {
                    setLanguageToggle(eventKey);
                    window.language = mapKeyToLangauge(eventKey);
                  }}
                  autoOpen={true}
                >
                  <Dropdown.Toggle className="language-toggle">
                    <FaGlobe /> {": " + mapKeyToLangauge(languageToggle)}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <MenuItem eventKey={0}>English</MenuItem>
                    <MenuItem eventKey={1}>中文版</MenuItem>
                  </Dropdown.Menu>
                </Dropdown>
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
