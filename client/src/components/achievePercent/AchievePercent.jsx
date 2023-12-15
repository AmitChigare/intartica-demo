import React from "react";
import "./achievePercent.css";

const AchievePercent = ({ data, type }) => {
  console.log(type);
  return (
    <div className="container percentage d-flex">
      {data.map((data, index) => (
        <div className="a-per d-flex align-items-center" key={index}>
          <div className="number">{data.number}</div>
          <div className="">
            <h6>{data.heading}</h6>
            {(type = "type-1" && data.desc && <p>{data.desc}</p>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievePercent;
