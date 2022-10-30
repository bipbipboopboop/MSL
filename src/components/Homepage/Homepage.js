import { Banner } from "./Banner";
import { Events } from "./Events";

import About from "./About";

import React from "react";

const Homepage = () => {
  return (
    <div className="App">
      <Banner />
      <About />
      <Events />
      {/* <Skills /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Homepage;
