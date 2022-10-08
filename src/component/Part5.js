import React from "react";

function Part5({ tt, av, te }) {
  return (
    <div className="dir-ltr my-5 text-center">
      <h2 className="text-xl text-header font-bold my-3">{tt}</h2>
      {te}
      {av}
    </div>
  );
}

export default Part5;
