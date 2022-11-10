import React from "react";
import { Chart } from "react-google-charts";

function YesOrNoP({ datas, titles }) {
  return (
    <div className="dir-ltr m-auto w-full overflow-hidden">
      <h3>{titles}</h3>
      <Chart
        chartType="PieChart"
        width="100%"
        height="300px"
        data={datas}
        options={{
          slices: {
            0: { color: "#FF8181" },
            1: { color: "#91B5F0" },
            2: { color: "#F7FF5B" },
            3: { color: "#617153" },
            4: { color: "#FC97F2" },
            5: { color: "#97FCCD" },
            6: { color: "#ADF172" },
          },
          pieHole: 0.4,
          is3D: true,
        }}
      />
    </div>
  );
}

export default YesOrNoP;
