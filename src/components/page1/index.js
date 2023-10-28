import React, { useState } from "react";
import PieChart from "./PM25PieChart";
import AqiMap from "./AqiMap";
import "./index.css";

const PageOne = () => {
  const [showMapChart, setShowMapChart] = useState(true);
  return (
    <div className="section">
      <div className="title-container">
        <h1>Haze and Heartbeats</h1>
      </div>
      <div className="container">
        <div className="left-side" style={{ backgroundColor: "#78C1F3" }}>
          <p onClick={() => setShowMapChart(true)} className="clickable_text">
            In cities once vibrant, under skies once clear
          </p>
          <p>Trees whisper their demise, as AQI levels rear</p>
          <p onClick={() => setShowMapChart(false)} className="clickable_text">
            Graphs paint our haste, PM2.5 levels declare
          </p>
          <p>In each AQI point, city’s breath laid bare</p>
        </div>
        <div className="right-side" style={{ backgroundColor: "#A6F6FF" }}>
          {showMapChart && <AqiMap />}
          {!showMapChart && <PieChart />}
        </div>
      </div>
    </div>
  );
};

export default PageOne;
