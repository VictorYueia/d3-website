import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { feature } from "topojson-client";
import us from "../Data/usa-states-10m.json";

const data = [
  {
    coutry: "USA",
    city: "Atlanta",
    coordinates: [-84.388, 33.749],
  },
];

function AtMap() {
  const ref = useRef();
  const width = 900;
  const height = 650;

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    // Define a separate color scale for the states
    const colorScale = d3
      .scaleOrdinal()
      .domain(["Georgia", "Other"])
      .range(["#FFD700", "#BDCDD6"]);

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
      .attr("fill", (d) => {
        return d.properties.name === "Georgia"
          ? colorScale("Georgia")
          : colorScale("Other");
      });

    // Create a star symbol generator
    const star = d3.symbol().type(d3.symbolStar).size(100);

    // Add city points as star symbols
    const stars = svg
      .selectAll(".star")
      .data(data)
      .enter()
      .append("path")
      .attr("class", "star")
      .attr("d", star) // use the star generator to create the shape
      .attr("transform", function (d) {
        return `translate(${projection(d.coordinates)})`;
      })
      .attr("fill", "red")
      .attr("stroke", "black")
      .attr("stroke-width", "1px");

    svg
      .selectAll(".city-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "city-label")
      .style("visibility", (d) => (d.city === "Atlanta" ? "visible" : "hidden"))
      .attr("x", function (d) {
        return projection(d.coordinates)[0] + 40;
      })
      .attr("y", function (d) {
        return projection(d.coordinates)[1];
      })
      .text(function (d) {
        return d.city;
      })
      .attr("font-size", "15px")
      .attr("font-weight", "bold")
      .attr("text-anchor", "middle")
      .attr("fill", "black");

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", height - 10)
      .style("text-anchor", "middle")
      .style("font-size", "18px")
      .style("font-weight", "bolder")
      .text("Chart7: The location of Atlanta");
  }, [data]);

  return <svg ref={ref} style={{ width: width, height: height }} />;
}

export default AtMap;
