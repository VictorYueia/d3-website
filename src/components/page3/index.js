import React, { useState } from "react";
import OZoneChart from "./OZoneChart";
import "../index.css";

const PageThree = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="left-side" style={{ backgroundColor: "#FFD93D" }}>
          <p>Oceans of data, vast, reveal the seas’ sad plea</p>
          <p>Life reduced to points, in a digital decree</p>
          <p>Fishermen's logs, once full, now echo decline</p>
          <p className="clickable_text">
            Ozone’s tale told by indices, in data they align
          </p>
        </div>
        <div className="right-side" style={{ backgroundColor: "#F6F1E9" }}>
          <OZoneChart />
        </div>
      </div>
    </div>
  );
};

export default PageThree;
