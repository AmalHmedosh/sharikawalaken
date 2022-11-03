import React from "react";
import { Chart } from "react-google-charts";

function Avarage() {
  var chart_data = [
    ["مدة الإجازات الممنوحة للعاملات في منظمات المجتمع المدني", "النسبة"],
    ["أقل من شهر", 48],
    ["بين شهر لشهرين", 24],
    ["ثلاثة أشهر", 16.42],
    ["أكثر من ثلاثةأشهر", 2.2],
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
