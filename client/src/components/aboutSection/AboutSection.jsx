import React from "react";
import "./aboutSection.css";
import HomeTag from "../homeTag/HomeTag";

const AboutSection = ({ images }) => {
  return (
    <div className="container about-section pt-5">
      <HomeTag text="About Us" />
      <div className="d-flex p-3 gap-5 as-1">
        <div className="about-container">
          <h1 className="about-heading">
            Crafting Dreams, Building Homes.{" "}
            <span className="about-heading1">
              Creating <br />
              Masterpieces,
            </span>{" "}
            Not Projects
          </h1>
          <p className="about-para">
            At Intartica, we don't just design interiors; we curate dream spaces
            that blend art, functionality, and soulfulness. Founded in 2017 by
            Srinivas Reddy Puram in Hyderabad, India, Intartica has been on a
            mission to turn houses into homes, celebrating the bond of family
            and community.
          </p>
          <p className="about-para">
            We approach each project as a masterpiece, working collaboratively
            like a family to bring your vision to life. Our commitment to
            experimentation, compelling ideas, and unique techniques ensures an
            ultimate user experience, making us your one-stop solution for
            interior design and execution.
          </p>
        </div>

        <div className="d-flex as-2">
          <img src={images[0]} alt="image 1" className="image-1" />
          <img src={images[1]} alt="image 2" className="" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
