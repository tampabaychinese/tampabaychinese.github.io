import { Link } from "react-router-dom";
import { FaBars, FaGlobe } from "react-icons/fa";
import { useState, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import HeartLogo from "../assets/heart.jpeg";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [language, setLanguage] = useState("English");

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

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <img src={HeartLogo} className="heart-img" alt="logo" />
            <Link to="/" className="tcbc-title">
              Tampa bay Chinese Baptist Church
            </Link>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <FaBars />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              {tabs.map((x, _) => (
                <li>
                  <Link
                    to={"/" + x}
                    className="navbar-tab"
                    onClick={() => {
                      window.scrollTo(0, 0);
                      setShowNavbar(false);
                    }}
                  >
                    {x}
                  </Link>
                </li>
              ))}
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
      <div style={{ height: "85px" }}></div>
    </div>
  );
};

export default Navbar;
