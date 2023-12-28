import React from "react";
import "./serviceBuilder.css";
import NewletterSub from "../../components/newsletterSub/NewletterSub";
import Footer from "../../components/footer/Footer";
import Sconnect from "../../components/sconnect/Sconnect";
import Navbar from "../../components/navbar/Navbar";
import SSCard from "../../components/sSCard/SSCard";

const ServiceBuilder = () => {
  return (
    <>
      <Navbar />
      <div className="ssecond-container container d-flex">
        <div className="build-img">
          <img
            src="https://s3-alpha-sig.figma.com/img/f18f/79a4/01253e393833d3da01e30d1ee5ea8775?Expires=1704672000&Signature=WBtJZFsI6sg6f1hYfDmozcihzrx0W3OA9P~WjQzx8tluC8-vQRPa86Y062SKzVqab~gk204EcbcqkHMuDoodnyqjnDGlik2nSOB-OjZcY8Ilaeo5y5GL3K7LafmhiGzD5bLb4kS5EOY8cYoiuiNCj-D8AAzpTOShsU4rU9cWP6PphheBGYJZtiRjFL4fRTl8yd2ILK5tyGY~wTf08robAo6Mh9qqzEF6Xsmbc0fGDxruGf-sVSOTNDwyVpXGOvVXheGjI~4p0MDkdSXTrLS6TUIrhAiwNlwI3sEEM4Bg9p1bxUXaZYGwG3VjxwlRnsyrqUWiTjoUcYgtsRBMMJvhGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="build-img"
          />
        </div>
        <div className="right-container d-flex flex-column justify-content-between">
          <h1>Transforming Structures into Spectacles</h1>
          <p>
            Elevate your constructions with our expertly designed windows and
            secure interiors with grand entrances tailored to your vision.
            Showcase developments with captivating model flats and add
            meticulous finishing touches that redefine perfection to your
            interiors or finishing works.
          </p>
          <button className="btn">Contact Us </button>
        </div>
      </div>
      <SSCard />
      <Sconnect />
      <NewletterSub />
      <Footer />
    </>
  );
};

export default ServiceBuilder;
