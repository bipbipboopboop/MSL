import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

import Homepage from "./components/Homepage/Homepage";
import OurTeam from "./components/OurTeam/OurTeam";
import ForFreshmen from "./components/ForFreshmen/ForFreshmen";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<OurTeam />} />
        <Route path="/for-freshmen" element={<ForFreshmen />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
