import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

// import jsonData from "./data.json";

import "./index.css";

const jsonData = [
  {
    country: "United States of America",
    city: "Atlanta",
    "AQI Value": 99,
    "CO AQI Value": 3,
    "Ozone AQI Value": 0,
    "NO2 AQI Value": 29,
    "PM2.5 AQI Value": 99,
  },
];

function AtAqiChart() {
  const chartRef = useRef();
  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 60, left: 60 };
    const width = 700 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const svg = d3
      .select(chartRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Create scales
    const xScale = d3
      .scaleBand()
      .domain(jsonData.map((d) => d.city))
      .range([0, width])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([
        0,
        Math.max(
          ...jsonData.flatMap((d) => [
            d["AQI Value"],
            d["CO AQI Value"],
            d["Ozone AQI Value"],
            d["NO2 AQI Value"],
            d["PM2.5 AQI Value"],
          ])
        ),
      ])
      .range([height, 0]);

    const bars = svg
      .selectAll(".bar-group")
      .data(jsonData)
      .join("g")
      .attr("class", "bar-group")
      .attr("transform", (d) => `translate(${xScale(d.city)}, 0)`);

    const barWidth = xScale.bandwidth() / 5;

    // AQI bar
    bars
      .selectAll(".bar-aqi")
      .data((d) => [d])
      .join("rect")
      .attr("class", "bar-aqi")
      .attr("x", 0)
      .attr("y", (d) => yScale(d["AQI Value"]))
      .attr("width", barWidth)
      .attr("height", (d) => height - yScale(d["AQI Value"]));

    bars
      .selectAll(".label-aqi")
      .data((d) => [d])
      .join("text")
      .attr("class", "label-aqi")
      .attr("x", 0 + barWidth / 2)
      .attr("y", (d) => yScale(d["AQI Value"]) - 2)
      .attr("text-anchor", "middle")
      .text((d) => `AQI: ${d["AQI Value"]}`)
      .style("font-weight", "bolder");

    // CO bar bar
    bars
      .selectAll(".bar-co")
      .data((d) => [d])
      .join("rect")
      .attr("class", "bar-co")
      .attr("x", barWidth)
      .attr("y", (d) => yScale(d["CO AQI Value"]))
      .attr("width", barWidth)
      .attr("height", (d) => height - yScale(d["CO AQI Value"]))
      .attr("text-anchor", "middle")
      .text((d) => d["CO AQI Value"]);

    bars
      .selectAll(".label-co")
      .data((d) => [d])
      .join("text")
      .attr("class", "label-co")
      .attr("x", barWidth + barWidth / 2)
      .attr("y", (d) => yScale(d["CO AQI Value"]) - 2)
      .attr("text-anchor", "middle")
      .text((d) => `CO: ${d["CO AQI Value"]}`)
      .style("font-weight", "bolder");

    // Ozone AQI bar
    bars
      .selectAll(".bar-ozone")
      .data((d) => [d])
      .join("rect")
      .attr("class", "bar-ozone")
      .attr("x", barWidth * 2)
      .attr("y", (d) => yScale(d["Ozone AQI Value"]))
      .attr("width", barWidth)
      .attr("height", (d) => height - yScale(d["Ozone AQI Value"]))
      .attr("text-anchor", "middle")
      .text((d) => d["Ozone AQI Value"]);

    bars
      .selectAll(".label-ozone")
      .data((d) => [d])
      .join("text")
      .attr("class", "label-co")
      .attr("x", barWidth * 2 + barWidth / 2)
      .attr("y", (d) => yScale(d["Ozone AQI Value"]) - 2)
      .attr("text-anchor", "middle")
      .text((d) => `Ozone: ${d["Ozone AQI Value"]}`)
      .style("font-weight", "bolder");

    //NO2 AQI bar
    bars
      .selectAll(".bar-no2")
      .data((d) => [d])
      .join("rect")
      .attr("class", "bar-no2")
      .attr("x", barWidth * 3)
      .attr("y", (d) => yScale(d["NO2 AQI Value"]))
      .attr("width", barWidth)
      .attr("height", (d) => height - yScale(d["NO2 AQI Value"]))
      .attr("text-anchor", "middle")
      .text((d) => d["NO2 AQI Value"]);

    bars
      .selectAll(".label-no2")
      .data((d) => [d])
      .join("text")
      .attr("class", "label-no2")
      .attr("x", barWidth * 3 + barWidth / 2)
      .attr("y", (d) => yScale(d["NO2 AQI Value"]) - 2)
      .attr("text-anchor", "middle")
      .text((d) => `NO2: ${d["NO2 AQI Value"]}`)
      .style("font-weight", "bolder");

    //PM2.5 AQI bar
    bars
      .selectAll(".bar-pm25")
      .data((d) => [d])
      .join("rect")
      .attr("class", "bar-pm25")
      .attr("x", barWidth * 4)
      .attr("y", (d) => yScale(d["PM2.5 AQI Value"]))
      .attr("width", barWidth)
      .attr("height", (d) => height - yScale(d["PM2.5 AQI Value"]))
      .attr("text-anchor", "middle")
      .text((d) => d["PM2.5 AQI Value"]);

    bars
      .selectAll(".label-pm25")
      .data((d) => [d])
      .join("text")
      .attr("class", "label-pm25")
      .attr("x", barWidth * 4 + barWidth / 2)
      .attr("y", (d) => yScale(d["PM2.5 AQI Value"]) - 2)
      .attr("text-anchor", "middle")
      .text((d) => `PM2.5:${d["PM2.5 AQI Value"]}`)
      .style("font-weight", "bolder");

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg
      .append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 20})`)
      .style("text-anchor", "middle")
      .text("Chart8: The AQI values of Atlanta");

    svg.append("g").call(d3.axisLeft(yScale));
  }, []);

  return <svg ref={chartRef} />;
}

export default AtAqiChart;
