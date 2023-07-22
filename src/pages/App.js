import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Connect from "./Connect";
import Doctrine from "./Doctrine";
import NotFound from "./NotFound";
import Ministries from "./Ministries";
import Online from "./Online";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import "./App.css";
import "../style/global.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="flex-wrapper">
          <div style={{ height: "85px" }}></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connect" element={<Connect />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctrine" element={<Doctrine />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/online" element={<Online />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
