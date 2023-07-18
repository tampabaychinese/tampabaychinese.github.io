import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./About";
import Home from "./Home";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="flex-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
