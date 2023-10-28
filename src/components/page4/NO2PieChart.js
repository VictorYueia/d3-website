import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

export const data = [
  { category: "0", percentage: 35.13 },
  { category: "1-4", percentage: 44.91 },
  { category: "5-10", percentage: 12.8 },
  { category: "> 10", percentage: 7.16 },
];

export const color = d3.scaleOrdinal([
  "#4daf4a",
  "#B0D9B1",
  "#ff7f00",
  "#BF8B67",
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

    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .text((d) => d.data.category)
      .style("font-weight", "bolder");

    // Add hover event listener to the arcs
    arcs
      .on("mouseover", function (event, d) {
        d3.select(this).select("path").attr("d", arcOver);
      })
      .on("mouseout", function (event, d) {
        d3.select(this).select("path").attr("d", arc);
      });

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height + 10)
      .style("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bolder")
      .text(
        "Chart6: Proportion of cities displayed according to NO2 AQI  in USA"
      );
  }, []);

  return <svg ref={ref}></svg>;
};

export default PieChart;
