import React from "react";
import "./builder.css";
import Navbar from "../../components/navbar/Navbar";
import NewletterSub from "../../components/newsletterSub/NewletterSub";
import Footer from "../../components/footer/Footer";

const Builder = () => {
  return (
    <>
      <Navbar />
      <div className="container">Builder page here</div>
      <NewletterSub />
      <Footer />
    </>
  );
};

export default Builder;
