import { Link } from "react-router-dom";
import { FaBars, FaGlobe } from "react-icons/fa";
import { useState, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import HeartLogo from "../assets/heart.jpeg";
import data from "../data/Header.json";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currentTab, setCurrentTab] = useState("");

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    if (!window.language) {
      window.language = "English";
    }
    console.log(window.language);
  }, []);

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
            <img src={HeartLogo} className="heart-img" alt="logo" />
            <Link
              to="/"
              className="tcbc-title"
              onClick={() => {
                window.scrollTo(0, 0);
                setCurrentTab("");
              }}
            >
              {data.title}
            </Link>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <FaBars />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
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
                      ABOUT US ▾
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
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger asChild>
                    <button className="language-toggle">
                      <FaGlobe /> {": " + language + "  ▾"}
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content className="dropdownContent">
                      <DropdownMenu.Item
                        className="dropdownItem"
                        onSelect={() => {
                          setLanguage("English");
                          window.language = "English";
                        }}
                      >
                        ENGLISH
                      </DropdownMenu.Item>
                      <hr class="dashed"></hr>
                      <DropdownMenu.Item
                        onSelect={() => {
                          setLanguage("中文版");
                          window.language = "中文版";
                        }}
                      >
                        中文版
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
