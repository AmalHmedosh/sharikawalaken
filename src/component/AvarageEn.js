import React from "react";
import { Chart } from "react-google-charts";

function Avarage() {
  var chart_data = [
    ["Duration", "Percentage"],
    ["Less than month  ", 48],
    ["  One to two months", 24],
    ["Three months", 16.42],
    [" More than Three months ", 2.2],
  ];
  return (
    <div className="m-auto w-4/5">
      <div className="dir-ltr">
        <Chart
          width="100%"
          height="400px"
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={chart_data}
          options={{
            colors: "#FF8181",
          }}
        />
      </div>
    </div>
  );
}

export default Avarage;
