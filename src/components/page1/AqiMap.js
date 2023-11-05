import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import us from "../Data/usa-states-10m.json";
import data from "../Data/map-aqi-data.json";

function AqiMap() {
  const ref = useRef();
  const width = 900;
  const height = 650;

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove(); // render and update

    const projection = d3
      .geoAlbersUsa()
      .fitSize([width, height], feature(us, us.objects.states));

    const path = d3.geoPath().projection(projection);

    svg
      .append("g")
      .selectAll("path")
      .data(feature(us, us.objects.states).features)
      .join("path")
      .attr("d", path)
      .attr("stroke", "#000")
      .attr("fill", "#BDCDD6");

    // add city points
    const circles = svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", function (d) {
        return projection(d.coordinates)?.[0];
      })
      .attr("cy", function (d) {
        return projection(d.coordinates)?.[1];
      })
      .attr("r", "5px")
      .attr("fill", "red")
      .attr("stroke", "black") // Add this line to add a border color
      .attr("stroke-width", "1px"); // Add this line to define the border width

    // add city names
    svg
      .selectAll(".city-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "city-label")
      .style("visibility", "hidden") // Make the labels initially invisible
      .attr("x", function (d) {
        return projection(d.coordinates)[0] - 35;
      })
      .attr("y", function (d) {
        return projection(d.coordinates)[1];
      })
      .text(function (d) {
        return `${d.city}:${d["AQI Value"]}`;
      })
      .attr("font-size", "15px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .attr("fill", "black");

    circles
      .on("mouseover", function (event, d) {
        // Show the label of the hovered circle
        svg
          .selectAll(".city-label")
          .filter(function (d2) {
            return d2 === d;
          })
          .style("visibility", "visible");
      })
      .on("mouseout", function (event, d) {
        // Hide the label when not hovering
        svg
          .selectAll(".city-label")
          .filter(function (d2) {
            return d2 === d;
          })
          .style("visibility", "hidden");
      });

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height - 10)
      .style("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bolder")
      .text("Chart1: Top 10 cities with the highest AQI value in USA");
  }, [data]);

  return <svg ref={ref} style={{ width: width, height: height }} />;
}

export default AqiMap;
