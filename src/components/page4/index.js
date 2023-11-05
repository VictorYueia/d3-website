import React from "react";
import PieChart from "./NO2PieChart";
import "../index.css";

const PageFour = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="left-side" style={{ backgroundColor: "#8EA7E9" }}>
          <p>In a world of data streams, life’s rhythms caught in bytes</p>
          <p>Heartbeats tracked, dreams lost in digital flights</p>
          <p className="clickable_text" style={{ color: "#474787" }}>
            NO2 whispers its tale, as data points dance
          </p>
          <p>Heartbeats, indices, and tears, all part of the trance</p>
        </div>
        <div className="right-side" style={{ backgroundColor: "#7286D3" }}>
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default PageFour;
