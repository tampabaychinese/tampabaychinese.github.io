import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Home";
import Connect from "./Connect";
import Doctrine from "./Doctrine";
import NotFound from "./NotFound";
import Ministries from "./Ministries";
import Online from "./Online";
import History from "./History";
import OurPastor from "./OurPastor";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "./App.css";
import "../style/global.css";

function App() {
  const [lang, setLanguage] = useState("English");

  return (
    <div className="App">
      <Router>
        <Navbar
          onLanguageChange={(l) => {
            setLanguage(l);
          }}
        />
        <div className="flex-wrapper">
          <div style={{ height: "85px" }}></div>
          <Routes>
            <Route path="/" element={<Home language={lang} />} />
            <Route path="/connect" element={<Connect language={lang} />} />
            <Route path="/doctrine" element={<Doctrine language={lang} />} />
            <Route
              path="/ministries"
              element={<Ministries language={lang} />}
            />
            <Route path="/online" element={<Online language={lang} />} />
            <Route path="/history" element={<History language={lang} />} />
            <Route path="/pastor" element={<OurPastor language={lang} />} />
            <Route path="*" element={<NotFound language={lang} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
