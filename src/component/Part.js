import React from "react";

function Part({ title, chart, text}) {
  return (
    <div className="dir-ltr my-9 text-center  px-10">
      {title}
      {chart}
      <div>
        {text}
      </div>
    </div>
  );
}

export default Part;
