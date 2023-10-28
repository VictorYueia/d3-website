import React, { useState } from "react";
import AtMap from "./AtMap";
import AtAqiChart from "./AtAqiChart";
import "../index.css";

const PageFive = () => {
  const [showFirstChart, setShowFirstChart] = useState(true);

  return (
    <div className="section">
      <div className="container">
        <div className="left-side" style={{ backgroundColor: "#ABCECF" }}>
          <p onClick={() => setShowFirstChart(true)} className="clickable_text">
            To breathe in Atlanta's haze, where smog and stories blend
          </p>
          <p>A sphere suffocated, its tales and toxins entwined</p>
          <p
            onClick={() => setShowFirstChart(false)}
            className="clickable_text"
          >
            Every gasp in the city, every AQI point tallied
          </p>
          <p>
            Crafts a muted symphony, in polluted air, echoes and indices,
            profound
          </p>
        </div>
        <div className="right-side" style={{ backgroundColor: "#C4DCE0" }}>
          {showFirstChart && <AtMap />}
          {!showFirstChart && <AtAqiChart />}
        </div>
      </div>
    </div>
  );
};

export default PageFive;
