import React, { useState } from "react";
import CoChart from "./CoChart";
import CoMap from "./CoMap";

import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import "../index.css";

const PageTwo = () => {
  const [showFirstChart, setShowFirstChart] = useState(true);

  return (
    <div className="section">
      <div className="container">
        <div className="left-side" style={{ backgroundColor: "#99B080" }}>
          <p
            onClick={() => setShowFirstChart(true)}
            className="clickable_text"
            style={{ color: showFirstChart ? "#218c74" : "white" }}
          >
            Cities, veiled in smog, gasp for the light of dawn
          </p>
          <p>Air quality indices reveal the future’s scorn</p>
          <p>A child’s cough, an echo in CO’s tight grip</p>
          <p
            onClick={() => setShowFirstChart(false)}
            className="clickable_text"
            style={{ color: showFirstChart ? "white" : "#218c74" }}
          >
            Statistics on screens, capturing the urban trip
          </p>
          <div className="lr-icons">
            <div>
              <span
                style={{ paddingRight: 30 }}
                onClick={() => setShowFirstChart(true)}
              >
                <img src={left} alt="left button" />
              </span>
              <span onClick={() => setShowFirstChart(false)}>
                <img src={right} alt="right button" />
              </span>
            </div>
          </div>
        </div>
        <div className="right-side" style={{ backgroundColor: "#748E63" }}>
          {showFirstChart && <CoMap />}
          {!showFirstChart && <CoChart />}
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
