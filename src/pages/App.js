import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import Doctrine from "./Doctrine";
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctrine" element={<Doctrine />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
