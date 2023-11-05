import React, { useState } from "react";
import PieChart from "./PM25PieChart";
import AqiMap from "./AqiMap";

import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import "./index.css";

const PageOne = () => {
  const [showFirstChart, setShowFirstChart] = useState(true);
  return (
    <div className="section">
      <div className="container">
        <div className="left-side" style={{ backgroundColor: "#b2bec3" }}>
          <p
            onClick={() => setShowFirstChart(true)}
            className="clickable_text"
            style={{ color: showFirstChart ? "#57606f" : "white" }}
          >
            In cities once vibrant, under skies once clear
          </p>
          <p>Trees whisper their demise, as AQI levels rear</p>
          <p
            onClick={() => setShowFirstChart(false)}
            className="clickable_text"
            style={{ color: showFirstChart ? "white" : "#57606f" }}
          >
            Graphs paint our haste, PM2.5 levels declare
          </p>
          <p>In each AQI point, city’s breath laid bare</p>
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
        <div className="right-side" style={{ backgroundColor: "#dfe6e9" }}>
          {showFirstChart && <AqiMap />}
          {!showFirstChart && <PieChart />}
        </div>
      </div>
    </div>
  );
};

export default PageOne;
