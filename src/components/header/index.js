import React from "react";

import github_logo from "../../assets/github.svg";
import d3_logo from "../../assets/d3.svg";
import react_logo from "../../assets/react.svg";

import "./index.css";

const HeaderPage = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="header">
          <h1>Haze and Heartbeats</h1>
          <div className="header-desc">
            Breathe Easy: Your Guide to Global Air Quality. Safeguarding Our
            Environment, Preserving Our Planet.
          </div>
          <div className="icons">
            <a
              href="https://github.com/VictorYueia/d3-website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github_logo} alt="github" />
            </a>
            <a
              href="https://d3js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={d3_logo} alt="d3" />
            </a>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={react_logo} alt="react" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
