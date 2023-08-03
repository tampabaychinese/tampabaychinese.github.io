import { Link } from "react-router-dom";
import { FaBars, FaGlobe, FaTimes } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import HeartLogo from "../assets/heart.jpeg";
import english from "../data/Header.json";
import chinese from "../data/Header_Chinese.json";
import "./navbar.css";

const Navbar = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currentTab, setCurrentTab] = useState("");
  const ref = useRef();
  const data = language === "English" ? english : chinese;

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowNavbar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const createTab = (link, title) => {
    return (
      <Link
        to={"/" + link}
        className="subnavbar-tab"
        onClick={() => {
          window.scrollTo(0, 0);
          setCurrentTab(link);
          setShowNavbar(false);
        }}
        style={{
          color: currentTab === link ? "darkred" : "black",
        }}
      >
        {title != null ? title : link}
      </Link>
    );
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Link
              to="/"
              className="tcbc-title"
              onClick={() => {
                window.scrollTo(0, 0);
                setCurrentTab("");
                setShowNavbar(false);
              }}
            >
              <img src={HeartLogo} className="heart-img" alt="logo" />
              {data.title}
            </Link>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            {showNavbar ? <FaTimes /> : <FaBars />}
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`} ref={ref}>
            <ul>
              <li className="aboutDropdown">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <a
                      className="navbar-tab"
                      style={{
                        color:
                          currentTab === "about" ||
                          currentTab === "doctrine" ||
                          currentTab === "history" ||
                          currentTab === "pastor"
                            ? "darkred"
                            : "black",
                      }}
                    >
                      {data.tabs[0].title} ▾
                    </a>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      className="aboutDropdownContent"
                      sideOffset={32}
                    >
                      <DropdownMenu.Item asChild>
                        {createTab("pastor", data.tabs[0].subTabs[0])}
                      </DropdownMenu.Item>
                      <DropdownMenu.Item asChild>
                        {createTab("history", data.tabs[0].subTabs[1])}
                      </DropdownMenu.Item>
                      <DropdownMenu.Item asChild>
                        {createTab("doctrine", data.tabs[0].subTabs[2])}
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </li>
              <li className="aboutDropdownMobile">
                {createTab("pastor", data.tabs[0].subTabs[0])}
              </li>
              <li className="aboutDropdownMobile">
                {createTab("history", data.tabs[0].subTabs[1])}
              </li>
              <li className="aboutDropdownMobile">
                {createTab("doctrine", data.tabs[0].subTabs[2])}
              </li>
              <li>{createTab("ministries", data.tabs[1].title)}</li>
              <li>{createTab("online", data.tabs[2].title)}</li>
              <li>{createTab("connect", data.tabs[3].title)}</li>
              <li>
                <button
                  className="language-toggle"
                  onClick={() => {
                    const newLang =
                      language === "English" ? "中文版" : "English";
                    setLanguage(newLang);
                    props.onLanguageChange(newLang);
                  }}
                >
                  <FaGlobe />{" "}
                  {": " + (language === "English" ? "中文版" : "English")}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
