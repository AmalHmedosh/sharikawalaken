import React from "react";

function Part({ title, chart, text }) {
  return (
    <div className="dir-ltr my-9 text-center  px-10">
      <div>{text}</div>
      <br></br>
      <div className="font-bold">{title}</div>
      {chart}
    </div>
  );
}

export default Part;
