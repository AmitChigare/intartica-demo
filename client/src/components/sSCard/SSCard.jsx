import React from "react";
import "./sSCard.css";

const SSCard = () => {
  return (
    <>
      <h1 className="my-5 builder text-center">Design Your Space For Living</h1>
      <div className="container third-build-container d-flex justify-content-center">
        <div className="d-flex flex-column left-card">
          <div className="builder-card">
            <h1>Windows</h1>
            <p>
              Intartica embodies speed in every project. Our streamlined
              processes ensure swift transformations, bringing your vision to
              life without unnecessary delays, making your dream interior a
              reality in record time.
            </p>
          </div>
          <div className="builder-card">
            <h1>Model Flats</h1>
            <p>
              Intartica embodies speed in every project. Our streamlined
              processes ensure swift transformations, bringing your vision to
              life without unnecessary delays, making your dream interior a
              reality in record time.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column right-card">
          <div className="builder-card">
            <h1>Doors</h1>
            <p>
              Intartica embodies speed in every project. Our streamlined
              processes ensure swift transformations, bringing your vision to
              life without unnecessary delays, making your dream interior a
              reality in record time.
            </p>
          </div>
          <div className="builder-card">
            <h1>Interiors</h1>
            <p>
              Intartica embodies speed in every project. Our streamlined
              processes ensure swift transformations, bringing your vision to
              life without unnecessary delays, making your dream interior a
              reality in record time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SSCard;
