import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

export const data = [
  { category: "Good", percentage: 43.51 },
  { category: "Moderate", percentage: 38.68 },
  { category: "Unhealthy", percentage: 9.07 },
  { category: "Unhealthy for Sensitive Groups", percentage: 6.92 },
  { category: "Very Unhealthy", percentage: 1.09 },
  { category: "Hazardous", percentage: 0.73 },
];

export const color = d3.scaleOrdinal([
  "#4daf4a",
  "#B0D9B1",
  "#ff7f00",
  "#BF8B67",
  "#9D5353",
  "#632626",
]);

const PieChart = () => {
  const ref = useRef();

  useEffect(() => {
    const pie = d3.pie().value((d) => d.percentage);

    const width = 600;
    const height = 600;
    const radius = Math.min(width, height) / 2 - 50;

    const arc = d3.arc().outerRadius(radius).innerRadius(0);
    const arcOver = d3
      .arc()
      .outerRadius(radius + 10)
      .innerRadius(0); // Arc for mouseover state

    const svg = d3
      .select(ref.current)
      .attr("class", "pie")
      .attr("width", width)
      .attr("height", height + 60);

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const arcs = g
      .selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.category));

    const labels = arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .style("visibility", "hidden") // Make the labels initially hidden
      .text((d) => d.data.category)
      .style("font-weight", "bolder");

    // Add hover event listener to the arcs
    arcs
      .on("mouseover", function (event, d) {
        // Show the label of the hovered arc
        labels
          .filter(function (d2) {
            return d2 === d;
          })
          .style("visibility", "visible");
        // Increase the size of the hovered arc
        d3.select(this).select("path").attr("d", arcOver);
      })
      .on("mouseout", function (event, d) {
        // Hide the label when not hovering
        labels
          .filter(function (d2) {
            return d2 === d;
          })
          .style("visibility", "hidden");
        // Return the arc back to its original size
        d3.select(this).select("path").attr("d", arc);
      });

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height + 10)
      .style("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bolder")
      .text("Chart2: Proportion of cities displayed according to PM2.5 AQI");
  }, []);

  return <svg ref={ref}></svg>;
};

export default PieChart;
