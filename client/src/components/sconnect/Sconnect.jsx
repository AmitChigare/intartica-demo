import React from "react";
import "./sconnect.css";

const Sconnect = () => {
  const bgImageee = "https://picsum.photos/200/300";
  const containerStyle = {
    backgroundImage: `url(${bgImageee})`,
  };
  return (
    <div style={containerStyle} className="container sconnect-container">
      <div className="main">
        <h6>Subscribe To Our Email</h6>
        <h4>Start Project With Us ?</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className="btn">Start New</button>
      </div>
    </div>
  );
};

export default Sconnect;
