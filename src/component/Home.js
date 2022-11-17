import React from "react";

function Home({ navbar, t, h, name }) {
  return (
    <div className=" relative flex flex-col items-center justify-between img-cover-main text-center ">
      <div className="overlay absolute bg-[#000]"></div>
      <div className="flex flex-col justify-between p-8 z-10">
        {navbar}
        <div className="max-w-[80%] my-20 m-auto head secondary-color-yellow text-header">
          <h1 className=" text-[#fdd245] font-bold my-200 ">{t}</h1>
          <p className=" text-[#fff]  font-bold">
            <div className="my-10 width-content">
              {h} <br />
              {name}
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
