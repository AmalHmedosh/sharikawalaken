import React from "react";
import Map from "./Map";

function Part2({ te, tm }) {
  return (
    <div className="dir-ltr my-9 text-center px-10">
      {te}
      <Map />
      <p className="font-bold">{tm}</p>
    </div>
  );
}

export default Part2;
