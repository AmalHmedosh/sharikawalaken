import React from "react";
function Title({ title, img }) {
  return (
    <div>
      {/* <div className={`background-title ${img}`}> */}
      <div className="overlay"></div>
      <div className="dir-ltr text-center relative my-9 opacity-80 bg-[#fdd245]">
        <h2 className="text-5xl font-bold text-[#80298f] p-4">{title}</h2>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Title;
