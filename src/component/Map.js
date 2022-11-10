import React from "react";
import { Chart } from "react-google-charts";

function Map() {
  const data = [
    ["Country", "Color"],
    ["France", 0],
    ["United States", 6],
    ["Turkey", 6],
    ["Germany", 6],
    ["Switzerland", 6],
    ["Netherlands", 6],
    ["Lebanon", 6],
    ["Syria", 10],
  ];
  const options = {
    colors: "#80298f",
  };

  return (
    <div className="m-auto my-8 w-full">
      <Chart
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}
export default Map;
