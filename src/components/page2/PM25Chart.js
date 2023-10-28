import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import jsonData from "../Data/pm25-data.json";

import "./index.css";

function PM25Chart() {
  const chartRef = useRef();
  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 60, left: 60 };
    const width = 1000 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

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
      .padding(0.3);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(jsonData, (d) => d["PM2.5 AQI Value"])])
      .range([height, 0]);

    svg
      .selectAll(".co-bar")
      .data(jsonData)
      .enter()
      .append("rect")
      .attr("class", "co-bar")
      .attr("x", (d) => xScale(d.city))
      .attr("y", (d) => yScale(d["PM2.5 AQI Value"]))
      .attr("width", xScale.bandwidth())
      .attr("height", (d) => height - yScale(d["PM2.5 AQI Value"]));

    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    svg
      .append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 25})`)
      .style("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bolder")
      .text("Chart4: 15 cities with the worst PM2.5 AQI values in USA");

    svg.append("g").call(d3.axisLeft(yScale));
  }, []);

  return <svg ref={chartRef} />;
}

export default PM25Chart;
